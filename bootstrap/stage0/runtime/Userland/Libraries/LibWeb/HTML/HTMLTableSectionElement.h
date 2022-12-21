/*
 * Copyright (c) 2020, the SerenityOS developers.
 * Copyright (c) 2022, Andreas Kling <kling@serenityos.org>
 *
 * SPDX-License-Identifier: BSD-2-Clause
 */

#pragma once

#include <LibWeb/HTML/HTMLElement.h>

namespace Web::HTML {

class HTMLTableSectionElement final : public HTMLElement {
    WEB_PLATFORM_OBJECT(HTMLTableSectionElement, HTMLElement);

public:
    virtual ~HTMLTableSectionElement() override;

    JS::NonnullGCPtr<DOM::HTMLCollection> rows() const;
    WebIDL::ExceptionOr<JS::NonnullGCPtr<HTMLTableRowElement>> insert_row(long index);
    WebIDL::ExceptionOr<void> delete_row(long index);

private:
    HTMLTableSectionElement(DOM::Document&, DOM::QualifiedName);

    virtual void visit_edges(Cell::Visitor&) override;

    JS::GCPtr<DOM::HTMLCollection> mutable m_rows;
};

}
