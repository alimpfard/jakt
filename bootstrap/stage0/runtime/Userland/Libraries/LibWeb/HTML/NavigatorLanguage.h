/*
 * Copyright (c) 2022, Andrew Kaster <akaster@serenityos.org>
 *
 * SPDX-License-Identifier: BSD-2-Clause
 */

#pragma once

#include <AK/DeprecatedString.h>
#include <AK/Vector.h>

namespace Web::HTML {

class NavigatorLanguageMixin {
public:
    // https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-language
    DeprecatedString language() const { return m_current_preferred_languages[0]; }

    // https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-languages
    // FIXME: The same object must be returned until the user agent needs to return different values, or values in a
    //        different order.
    Vector<DeprecatedString> languages() const { return m_current_preferred_languages; }

protected:
    Vector<DeprecatedString> m_current_preferred_languages = { "en-US" };
};

}
