#pragma once
#include "__unified_forward.h"
namespace Jakt {
namespace jakt__prelude__reflection {
namespace Reflect {
struct VariableDeclaration {
  public:
public: DeprecatedString name;public: NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> type;public: bool is_mutable;public: VariableDeclaration(DeprecatedString a_name, NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> a_type, bool a_is_mutable);

public: ErrorOr<DeprecatedString> debug_description() const;
};struct SumEnumVariant {
u8 __jakt_variant_index = 0;
union VariantData {
u8 __jakt_uninit_value;
struct {
DeprecatedString name;
JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields;
} StructLike;
struct {
DeprecatedString name;
NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> type;
} Typed;
struct {
DeprecatedString name;
} Untyped;
constexpr VariantData() {}
~VariantData() {}
} as;
constexpr u8 __jakt_init_index() const noexcept { return __jakt_variant_index - 1; }ErrorOr<DeprecatedString> debug_description() const;
[[nodiscard]] static SumEnumVariant StructLike(DeprecatedString name, JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields);
[[nodiscard]] static SumEnumVariant Typed(DeprecatedString name, NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> type);
[[nodiscard]] static SumEnumVariant Untyped(DeprecatedString name);
~SumEnumVariant();
SumEnumVariant& operator=(SumEnumVariant const &);
SumEnumVariant& operator=(SumEnumVariant &&);
SumEnumVariant(SumEnumVariant const&);
SumEnumVariant(SumEnumVariant &&);
private: void __jakt_destroy_variant();
public:
private:
SumEnumVariant() {};
};
struct RecordType {
u8 __jakt_variant_index = 0;
union VariantData {
u8 __jakt_uninit_value;
struct {
JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields;
} Struct;
struct {
JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields;
} Class;
struct {
bool is_boxed;
JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::SumEnumVariant> variants;
} SumEnum;
constexpr VariantData() {}
~VariantData() {}
} as;
constexpr u8 __jakt_init_index() const noexcept { return __jakt_variant_index - 1; }ErrorOr<DeprecatedString> debug_description() const;
[[nodiscard]] static RecordType Struct(JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields);
[[nodiscard]] static RecordType Class(JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields);
[[nodiscard]] static RecordType SumEnum(bool is_boxed, JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::SumEnumVariant> variants);
~RecordType();
RecordType& operator=(RecordType const &);
RecordType& operator=(RecordType &&);
RecordType(RecordType const&);
RecordType(RecordType &&);
private: void __jakt_destroy_variant();
public:
private:
RecordType() {};
};
struct Record {
  public:
public: DeprecatedString name;public: JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Method> methods;public: JaktInternal::DynamicArray<JaktInternal::Tuple<DeprecatedString,NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type>>> generic_mappings;public: jakt__prelude__reflection::Reflect::RecordType record_type;public: Record(DeprecatedString a_name, JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Method> a_methods, JaktInternal::DynamicArray<JaktInternal::Tuple<DeprecatedString,NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type>>> a_generic_mappings, jakt__prelude__reflection::Reflect::RecordType a_record_type);

public: ErrorOr<DeprecatedString> debug_description() const;
};struct Type: public RefCounted<Type> {
u8 __jakt_variant_index = 0;
union VariantData {
u8 __jakt_uninit_value;
struct {
jakt__prelude__reflection::Reflect::Record value;
} StructureOrEnum;
struct {
DeprecatedString value;
} TypeVariable;
struct {
NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value;
} RawPtr;
struct {
NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value;
} Reference;
struct {
NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value;
} MutableReference;
constexpr VariantData() {}
~VariantData() {}
} as;
constexpr u8 __jakt_init_index() const noexcept { return __jakt_variant_index - 1; }ErrorOr<DeprecatedString> debug_description() const;
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> Void();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> Bool();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> U8();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> U16();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> U32();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> U64();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> I8();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> I16();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> I32();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> I64();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> F32();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> F64();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> Usize();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> JaktString();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> CChar();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> CInt();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> Unknown();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> Never();
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> StructureOrEnum(jakt__prelude__reflection::Reflect::Record value);
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> TypeVariable(DeprecatedString value);
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> RawPtr(NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value);
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> Reference(NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value);
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> MutableReference(NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value);
[[nodiscard]] static ErrorOr<NonnullRefPtr<Type>> Function();
~Type();
Type& operator=(Type const &);
Type& operator=(Type &&);
Type(Type const&);
Type(Type &&);
private: void __jakt_destroy_variant();
public:
ErrorOr<DeprecatedString> name() const;
private:
Type() {};
};
struct Span {
  public:
public: size_t start;public: size_t end;public: DeprecatedString file;public: Span(size_t a_start, size_t a_end, DeprecatedString a_file);

public: ErrorOr<DeprecatedString> debug_description() const;
};struct Visibility {
u8 __jakt_variant_index = 0;
union VariantData {
u8 __jakt_uninit_value;
constexpr VariantData() {}
~VariantData() {}
} as;
constexpr u8 __jakt_init_index() const noexcept { return __jakt_variant_index - 1; }ErrorOr<DeprecatedString> debug_description() const;
[[nodiscard]] static Visibility Public();
[[nodiscard]] static Visibility Private();
~Visibility();
Visibility& operator=(Visibility const &);
Visibility& operator=(Visibility &&);
Visibility(Visibility const&);
Visibility(Visibility &&);
private: void __jakt_destroy_variant();
public:
private:
Visibility() {};
};
struct Field {
  public:
public: jakt__prelude__reflection::Reflect::VariableDeclaration variable;public: jakt__prelude__reflection::Reflect::Visibility visibility;public: Field(jakt__prelude__reflection::Reflect::VariableDeclaration a_variable, jakt__prelude__reflection::Reflect::Visibility a_visibility);

public: ErrorOr<DeprecatedString> debug_description() const;
};struct Function {
  public:
public: DeprecatedString name;public: JaktInternal::DynamicArray<DeprecatedString> generic_parameters;public: NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> return_type;public: bool can_throw;public: bool is_comptime;public: Function(DeprecatedString a_name, JaktInternal::DynamicArray<DeprecatedString> a_generic_parameters, NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> a_return_type, bool a_can_throw, bool a_is_comptime);

public: ErrorOr<DeprecatedString> debug_description() const;
};struct Method {
  public:
public: jakt__prelude__reflection::Reflect::Function function;public: jakt__prelude__reflection::Reflect::Visibility visibility;public: Method(jakt__prelude__reflection::Reflect::Function a_function, jakt__prelude__reflection::Reflect::Visibility a_visibility);

public: ErrorOr<DeprecatedString> debug_description() const;
};}
}
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::VariableDeclaration> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::VariableDeclaration const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::SumEnumVariant> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::SumEnumVariant const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::RecordType> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::RecordType const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::Record> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::Record const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::Type> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::Type const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::Span> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::Span const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::Visibility> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::Visibility const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::Field> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::Field const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::Function> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::Function const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
template<>struct Jakt::Formatter<Jakt::jakt__prelude__reflection::Reflect::Method> : Jakt::Formatter<Jakt::StringView>{
Jakt::ErrorOr<void> format(Jakt::FormatBuilder& builder, Jakt::jakt__prelude__reflection::Reflect::Method const& value) {
JaktInternal::PrettyPrint::ScopedEnable pretty_print_enable { m_alternative_form };Jakt::ErrorOr<void> format_error = Jakt::Formatter<Jakt::StringView>::format(builder, MUST(value.debug_description()));return format_error;}
};
namespace Jakt {
} // namespace Jakt
