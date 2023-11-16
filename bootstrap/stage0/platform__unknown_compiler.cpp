#include "platform__unknown_compiler.h"
#include "jakt__prelude__reflection.h"
#include "jakt__prelude__prelude.h"
#include "jakt__libc__io.h"
#include "jakt__arguments.h"
#include "jakt__file_iterator.h"
#include "jakt__path.h"
#include "jakt__platform.h"
#include "jakt__platform__unknown_fs.h"
namespace Jakt {
namespace platform__unknown_compiler {
ErrorOr<JaktInternal::DynamicArray<DeprecatedString>> run_compiler(DeprecatedString const cxx_compiler_path,DeprecatedString const cpp_filename,DeprecatedString const output_filename,DeprecatedString const runtime_path,JaktInternal::DynamicArray<DeprecatedString> const extra_include_paths,JaktInternal::DynamicArray<DeprecatedString> const extra_lib_paths,JaktInternal::DynamicArray<DeprecatedString> const extra_link_libs,bool const optimize,JaktInternal::DynamicArray<DeprecatedString> const extra_compiler_flags,bool const use_ccache) {
{
warnln((StringView::from_string_literal("UNIMPLEMENTED: run_compiler(cxx_compiler_path: {}, cpp_filename: {}, output_filename: {}, runtime_path: {}, extra_include_paths: {}, extra_lib_paths: {}, extra_link_libs: {}, optimize: {}, extra_compiler_flags: {})"sv)),cxx_compiler_path,cpp_filename,output_filename,runtime_path,extra_include_paths,extra_lib_paths,extra_link_libs,optimize,extra_compiler_flags);
return Error::from_errno(static_cast<i32>(38));
}
}

}
} // namespace Jakt
