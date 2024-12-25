#ifdef _WIN32
extern "C" __cdecl int SetConsoleOutputCP(unsigned int code_page);
#endif
#include "git.h"
namespace Jakt {
namespace git {
ErrorOr<ByteString> commit_hash() {
{
ByteString const hash = ByteString::from_utf8_without_validation("2e73b8333a1fa56f1368c7748306585751a8c536"sv);
return hash;
}
}

}
} // namespace Jakt
