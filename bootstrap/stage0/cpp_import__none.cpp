#include "cpp_import__none.h"
#include "jakt__prelude__reflection.h"
#include "jakt__prelude__prelude.h"
#include "jakt__libc__io.h"
#include "jakt__arguments.h"
#include "jakt__file_iterator.h"
#include "jakt__path.h"
#include "jakt__platform.h"
#include "jakt__platform__unknown_fs.h"
namespace Jakt {
namespace cpp_import__none {
ErrorOr<DeprecatedString> cpp_import__none::CppImportProcessor::debug_description() const { auto builder = DeprecatedStringBuilder::create();TRY(builder.append("CppImportProcessor("sv));{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
}
TRY(builder.append(")"sv));return builder.to_string(); }
cpp_import__none::CppImportProcessor cpp_import__none::CppImportProcessor::create() {
{
return cpp_import__none::CppImportProcessor();
}
}

ErrorOr<ids::ScopeId> cpp_import__none::CppImportProcessor::process_cpp_import(NonnullRefPtr<types::CheckedProgram>& program,jakt__path::Path const import_path,ids::ScopeId const scope_id,bool const is_c,JaktInternal::Dictionary<DeprecatedString,DeprecatedString> const defines) {
{
return Error::__jakt_from_string_literal((StringView::from_string_literal("Not implemented"sv)));
}
}

cpp_import__none::CppImportProcessor::CppImportProcessor(){}

}
} // namespace Jakt
