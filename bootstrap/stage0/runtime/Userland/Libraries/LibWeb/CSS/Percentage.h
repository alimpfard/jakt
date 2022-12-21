/*
 * Copyright (c) 2022, Sam Atkins <atkinssj@serenityos.org>
 *
 * SPDX-License-Identifier: BSD-2-Clause
 */

#pragma once

#include <AK/DeprecatedString.h>
#include <AK/Variant.h>
#include <LibWeb/CSS/Angle.h>
#include <LibWeb/CSS/Frequency.h>
#include <LibWeb/CSS/Length.h>
#include <LibWeb/CSS/Number.h>
#include <LibWeb/CSS/Time.h>

namespace Web::CSS {

class Percentage {
public:
    explicit Percentage(int value)
        : m_value(value)
    {
    }

    explicit Percentage(float value)
        : m_value(value)
    {
    }

    float value() const { return m_value; }
    float as_fraction() const { return m_value * 0.01f; }

    DeprecatedString to_deprecated_string() const
    {
        return DeprecatedString::formatted("{}%", m_value);
    }

    bool operator==(Percentage const& other) const { return m_value == other.m_value; }

private:
    float m_value;
};

bool calculated_style_value_contains_percentage(CalculatedStyleValue const&);

template<typename T>
class PercentageOr {
public:
    PercentageOr(T t)
        : m_value(move(t))
    {
    }

    PercentageOr(Percentage percentage)
        : m_value(move(percentage))
    {
    }

    PercentageOr(NonnullRefPtr<CalculatedStyleValue> calculated)
        : m_value(move(calculated))
    {
    }

    virtual ~PercentageOr() = default;

    PercentageOr<T>& operator=(T t)
    {
        m_value = move(t);
        return *this;
    }

    PercentageOr<T>& operator=(Percentage percentage)
    {
        m_value = move(percentage);
        return *this;
    }

    bool is_percentage() const { return m_value.template has<Percentage>(); }
    bool is_calculated() const { return m_value.template has<NonnullRefPtr<CalculatedStyleValue>>(); }

    bool contains_percentage() const
    {
        return m_value.visit(
            [&](T const& t) {
                if (t.is_calculated())
                    return calculated_style_value_contains_percentage(*t.calculated_style_value());
                return false;
            },
            [&](Percentage const&) {
                return true;
            },
            [&](NonnullRefPtr<CalculatedStyleValue> const& calculated) {
                return calculated_style_value_contains_percentage(*calculated);
            });
    }

    Percentage const& percentage() const
    {
        VERIFY(is_percentage());
        return m_value.template get<Percentage>();
    }

    NonnullRefPtr<CalculatedStyleValue> const& calculated() const
    {
        VERIFY(is_calculated());
        return m_value.template get<NonnullRefPtr<CalculatedStyleValue>>();
    }

    virtual T resolve_calculated(NonnullRefPtr<CalculatedStyleValue> const&, [[maybe_unused]] Layout::Node const&, [[maybe_unused]] T const& reference_value) const
    {
        VERIFY_NOT_REACHED();
    }

    T resolved(Layout::Node const& layout_node, T const& reference_value) const
    {
        return m_value.visit(
            [&](T const& t) {
                if (t.is_calculated())
                    return resolve_calculated(t.calculated_style_value(), layout_node, reference_value);
                return t;
            },
            [&](Percentage const& percentage) {
                return reference_value.percentage_of(percentage);
            },
            [&](NonnullRefPtr<CalculatedStyleValue> const& calculated) {
                return resolve_calculated(calculated, layout_node, reference_value);
            });
    }

    DeprecatedString to_deprecated_string() const
    {
        if (is_percentage())
            return m_value.template get<Percentage>().to_deprecated_string();

        return m_value.template get<T>().to_deprecated_string();
    }

    bool operator==(PercentageOr<T> const& other) const
    {
        if (is_calculated())
            return false;
        if (is_percentage() != other.is_percentage())
            return false;
        if (is_percentage())
            return (m_value.template get<Percentage>() == other.m_value.template get<Percentage>());
        return (m_value.template get<T>() == other.m_value.template get<T>());
    }

protected:
    bool is_t() const { return m_value.template has<T>(); }
    T const& get_t() const { return m_value.template get<T>(); }

private:
    Variant<T, Percentage, NonnullRefPtr<CalculatedStyleValue>> m_value;
};

template<typename T>
bool operator==(PercentageOr<T> const& percentage_or, T const& t)
{
    return percentage_or == PercentageOr<T> { t };
}

template<typename T>
bool operator==(T const& t, PercentageOr<T> const& percentage_or)
{
    return t == percentage_or;
}

template<typename T>
bool operator==(PercentageOr<T> const& percentage_or, Percentage const& percentage)
{
    return percentage_or == PercentageOr<T> { percentage };
}

template<typename T>
bool operator==(Percentage const& percentage, PercentageOr<T> const& percentage_or)
{
    return percentage == percentage_or;
}

class AnglePercentage : public PercentageOr<Angle> {
public:
    using PercentageOr<Angle>::PercentageOr;

    bool is_angle() const { return is_t(); }
    Angle const& angle() const { return get_t(); }
    virtual Angle resolve_calculated(NonnullRefPtr<CalculatedStyleValue> const&, Layout::Node const&, Angle const& reference_value) const override;
};

class FrequencyPercentage : public PercentageOr<Frequency> {
public:
    using PercentageOr<Frequency>::PercentageOr;

    bool is_frequency() const { return is_t(); }
    Frequency const& frequency() const { return get_t(); }
    virtual Frequency resolve_calculated(NonnullRefPtr<CalculatedStyleValue> const&, Layout::Node const&, Frequency const& reference_value) const override;
};

class LengthPercentage : public PercentageOr<Length> {
public:
    using PercentageOr<Length>::PercentageOr;

    bool is_auto() const { return is_length() && length().is_auto(); }

    bool is_length() const { return is_t(); }
    Length const& length() const { return get_t(); }
    virtual Length resolve_calculated(NonnullRefPtr<CalculatedStyleValue> const&, Layout::Node const&, Length const& reference_value) const override;
};

class TimePercentage : public PercentageOr<Time> {
public:
    using PercentageOr<Time>::PercentageOr;

    bool is_time() const { return is_t(); }
    Time const& time() const { return get_t(); }
    virtual Time resolve_calculated(NonnullRefPtr<CalculatedStyleValue> const&, Layout::Node const&, Time const& reference_value) const override;
};

struct NumberPercentage : public PercentageOr<Number> {
public:
    using PercentageOr<Number>::PercentageOr;

    bool is_number() const { return is_t(); }
    Number const& number() const { return get_t(); }
};

}

template<>
struct AK::Formatter<Web::CSS::Percentage> : Formatter<StringView> {
    ErrorOr<void> format(FormatBuilder& builder, Web::CSS::Percentage const& percentage)
    {
        return Formatter<StringView>::format(builder, percentage.to_deprecated_string());
    }
};

template<>
struct AK::Formatter<Web::CSS::AnglePercentage> : Formatter<StringView> {
    ErrorOr<void> format(FormatBuilder& builder, Web::CSS::AnglePercentage const& angle_percentage)
    {
        return Formatter<StringView>::format(builder, angle_percentage.to_deprecated_string());
    }
};

template<>
struct AK::Formatter<Web::CSS::FrequencyPercentage> : Formatter<StringView> {
    ErrorOr<void> format(FormatBuilder& builder, Web::CSS::FrequencyPercentage const& frequency_percentage)
    {
        return Formatter<StringView>::format(builder, frequency_percentage.to_deprecated_string());
    }
};

template<>
struct AK::Formatter<Web::CSS::LengthPercentage> : Formatter<StringView> {
    ErrorOr<void> format(FormatBuilder& builder, Web::CSS::LengthPercentage const& length_percentage)
    {
        return Formatter<StringView>::format(builder, length_percentage.to_deprecated_string());
    }
};

template<>
struct AK::Formatter<Web::CSS::TimePercentage> : Formatter<StringView> {
    ErrorOr<void> format(FormatBuilder& builder, Web::CSS::TimePercentage const& time_percentage)
    {
        return Formatter<StringView>::format(builder, time_percentage.to_deprecated_string());
    }
};
