#include "jakt__prelude__reflection.h"
namespace Jakt {
namespace jakt__prelude__reflection {
namespace Reflect {
ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::Span::debug_description() const { auto builder = DeprecatedStringBuilder::create();TRY(builder.append("Span("sv));{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("start: {}, ", start));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("end: {}, ", end));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("file: \"{}\"", file));
}
TRY(builder.append(")"sv));return builder.to_string(); }
jakt__prelude__reflection::Reflect::Span::Span(size_t a_start, size_t a_end, DeprecatedString a_file): start(move(a_start)), end(move(a_end)), file(move(a_file)){}

ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::VariableDeclaration::debug_description() const { auto builder = DeprecatedStringBuilder::create();TRY(builder.append("VariableDeclaration("sv));{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("name: \"{}\", ", name));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("type: {}, ", type));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("is_mutable: {}", is_mutable));
}
TRY(builder.append(")"sv));return builder.to_string(); }
jakt__prelude__reflection::Reflect::VariableDeclaration::VariableDeclaration(DeprecatedString a_name, NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> a_type, bool a_is_mutable): name(move(a_name)), type(move(a_type)), is_mutable(move(a_is_mutable)){}

ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::Field::debug_description() const { auto builder = DeprecatedStringBuilder::create();TRY(builder.append("Field("sv));{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("variable: {}, ", variable));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("visibility: {}", visibility));
}
TRY(builder.append(")"sv));return builder.to_string(); }
jakt__prelude__reflection::Reflect::Field::Field(jakt__prelude__reflection::Reflect::VariableDeclaration a_variable, jakt__prelude__reflection::Reflect::Visibility a_visibility): variable(move(a_variable)), visibility(move(a_visibility)){}

ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::Method::debug_description() const { auto builder = DeprecatedStringBuilder::create();TRY(builder.append("Method("sv));{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("function: {}, ", function));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("visibility: {}", visibility));
}
TRY(builder.append(")"sv));return builder.to_string(); }
jakt__prelude__reflection::Reflect::Method::Method(jakt__prelude__reflection::Reflect::Function a_function, jakt__prelude__reflection::Reflect::Visibility a_visibility): function(move(a_function)), visibility(move(a_visibility)){}

ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::Record::debug_description() const { auto builder = DeprecatedStringBuilder::create();TRY(builder.append("Record("sv));{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("name: \"{}\", ", name));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("methods: {}, ", methods));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("generic_mappings: {}, ", generic_mappings));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("record_type: {}", record_type));
}
TRY(builder.append(")"sv));return builder.to_string(); }
jakt__prelude__reflection::Reflect::Record::Record(DeprecatedString a_name, JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Method> a_methods, JaktInternal::DynamicArray<JaktInternal::Tuple<DeprecatedString,NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type>>> a_generic_mappings, jakt__prelude__reflection::Reflect::RecordType a_record_type): name(move(a_name)), methods(move(a_methods)), generic_mappings(move(a_generic_mappings)), record_type(move(a_record_type)){}

ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::Function::debug_description() const { auto builder = DeprecatedStringBuilder::create();TRY(builder.append("Function("sv));{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("name: \"{}\", ", name));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("generic_parameters: {}, ", generic_parameters));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("return_type: {}, ", return_type));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("can_throw: {}, ", can_throw));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));TRY(builder.appendff("is_comptime: {}", is_comptime));
}
TRY(builder.append(")"sv));return builder.to_string(); }
jakt__prelude__reflection::Reflect::Function::Function(DeprecatedString a_name, JaktInternal::DynamicArray<DeprecatedString> a_generic_parameters, NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> a_return_type, bool a_can_throw, bool a_is_comptime): name(move(a_name)), generic_parameters(move(a_generic_parameters)), return_type(move(a_return_type)), can_throw(move(a_can_throw)), is_comptime(move(a_is_comptime)){}

ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::Type::debug_description() const {
auto builder = DeprecatedStringBuilder::create();
switch (this->__jakt_init_index()) {case 0 /* Void */: {
return DeprecatedString("Type::Void"sv);
break;}
case 1 /* Bool */: {
return DeprecatedString("Type::Bool"sv);
break;}
case 2 /* U8 */: {
return DeprecatedString("Type::U8"sv);
break;}
case 3 /* U16 */: {
return DeprecatedString("Type::U16"sv);
break;}
case 4 /* U32 */: {
return DeprecatedString("Type::U32"sv);
break;}
case 5 /* U64 */: {
return DeprecatedString("Type::U64"sv);
break;}
case 6 /* I8 */: {
return DeprecatedString("Type::I8"sv);
break;}
case 7 /* I16 */: {
return DeprecatedString("Type::I16"sv);
break;}
case 8 /* I32 */: {
return DeprecatedString("Type::I32"sv);
break;}
case 9 /* I64 */: {
return DeprecatedString("Type::I64"sv);
break;}
case 10 /* F32 */: {
return DeprecatedString("Type::F32"sv);
break;}
case 11 /* F64 */: {
return DeprecatedString("Type::F64"sv);
break;}
case 12 /* Usize */: {
return DeprecatedString("Type::Usize"sv);
break;}
case 13 /* JaktString */: {
return DeprecatedString("Type::JaktString"sv);
break;}
case 14 /* CChar */: {
return DeprecatedString("Type::CChar"sv);
break;}
case 15 /* CInt */: {
return DeprecatedString("Type::CInt"sv);
break;}
case 16 /* Unknown */: {
return DeprecatedString("Type::Unknown"sv);
break;}
case 17 /* Never */: {
return DeprecatedString("Type::Never"sv);
break;}
case 18 /* StructureOrEnum */: {
TRY(builder.append("Type::StructureOrEnum"sv));
[[maybe_unused]] auto const& that = this->as.StructureOrEnum;
TRY(builder.appendff("({})", that.value));
break;}
case 19 /* TypeVariable */: {
TRY(builder.append("Type::TypeVariable"sv));
[[maybe_unused]] auto const& that = this->as.TypeVariable;
TRY(builder.appendff("(\"{}\")", that.value));
break;}
case 20 /* RawPtr */: {
TRY(builder.append("Type::RawPtr"sv));
[[maybe_unused]] auto const& that = this->as.RawPtr;
TRY(builder.appendff("({})", that.value));
break;}
case 21 /* Reference */: {
TRY(builder.append("Type::Reference"sv));
[[maybe_unused]] auto const& that = this->as.Reference;
TRY(builder.appendff("({})", that.value));
break;}
case 22 /* MutableReference */: {
TRY(builder.append("Type::MutableReference"sv));
[[maybe_unused]] auto const& that = this->as.MutableReference;
TRY(builder.appendff("({})", that.value));
break;}
case 23 /* Function */: {
return DeprecatedString("Type::Function"sv);
break;}
}
return builder.to_string();
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::Void(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 1;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::Bool(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 2;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::U8(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 3;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::U16(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 4;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::U32(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 5;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::U64(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 6;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::I8(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 7;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::I16(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 8;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::I32(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 9;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::I64(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 10;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::F32(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 11;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::F64(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 12;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::Usize(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 13;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::JaktString(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 14;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::CChar(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 15;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::CInt(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 16;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::Unknown(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 17;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::Never(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 18;
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::StructureOrEnum(jakt__prelude__reflection::Reflect::Record value){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 19;
new (&__jakt_uninit_enum->as.StructureOrEnum.value) (decltype(value))(move(value));
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::TypeVariable(DeprecatedString value){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 20;
new (&__jakt_uninit_enum->as.TypeVariable.value) (decltype(value))(move(value));
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::RawPtr(NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 21;
new (&__jakt_uninit_enum->as.RawPtr.value) (decltype(value))(move(value));
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::Reference(NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 22;
new (&__jakt_uninit_enum->as.Reference.value) (decltype(value))(move(value));
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::MutableReference(NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> value){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 23;
new (&__jakt_uninit_enum->as.MutableReference.value) (decltype(value))(move(value));
return __jakt_uninit_enum;
}
[[nodiscard]] ErrorOr<NonnullRefPtr<Type>> Type::Function(){
NonnullRefPtr<Type> __jakt_uninit_enum = TRY(adopt_nonnull_ref_or_enomem(new (nothrow) Type));
__jakt_uninit_enum->__jakt_variant_index = 24;
return __jakt_uninit_enum;
}
Type& Type::operator=(Type const &rhs){
{VERIFY(this->__jakt_variant_index != 0 && rhs.__jakt_variant_index != 0);
if (this->__jakt_variant_index != rhs.__jakt_variant_index) {
this->__jakt_destroy_variant();
switch (rhs.__jakt_init_index()) {
case 0 /* Void */:
break;
case 1 /* Bool */:
break;
case 2 /* U8 */:
break;
case 3 /* U16 */:
break;
case 4 /* U32 */:
break;
case 5 /* U64 */:
break;
case 6 /* I8 */:
break;
case 7 /* I16 */:
break;
case 8 /* I32 */:
break;
case 9 /* I64 */:
break;
case 10 /* F32 */:
break;
case 11 /* F64 */:
break;
case 12 /* Usize */:
break;
case 13 /* JaktString */:
break;
case 14 /* CChar */:
break;
case 15 /* CInt */:
break;
case 16 /* Unknown */:
break;
case 17 /* Never */:
break;
case 18 /* StructureOrEnum */:
new (&this->as.StructureOrEnum.value) (decltype(this->as.StructureOrEnum.value))(rhs.as.StructureOrEnum.value);
break;
case 19 /* TypeVariable */:
new (&this->as.TypeVariable.value) (decltype(this->as.TypeVariable.value))(rhs.as.TypeVariable.value);
break;
case 20 /* RawPtr */:
new (&this->as.RawPtr.value) (decltype(this->as.RawPtr.value))(rhs.as.RawPtr.value);
break;
case 21 /* Reference */:
new (&this->as.Reference.value) (decltype(this->as.Reference.value))(rhs.as.Reference.value);
break;
case 22 /* MutableReference */:
new (&this->as.MutableReference.value) (decltype(this->as.MutableReference.value))(rhs.as.MutableReference.value);
break;
case 23 /* Function */:
break;
}
} else {
switch (rhs.__jakt_init_index()) {
case 0 /* Void */:
break;
case 1 /* Bool */:
break;
case 2 /* U8 */:
break;
case 3 /* U16 */:
break;
case 4 /* U32 */:
break;
case 5 /* U64 */:
break;
case 6 /* I8 */:
break;
case 7 /* I16 */:
break;
case 8 /* I32 */:
break;
case 9 /* I64 */:
break;
case 10 /* F32 */:
break;
case 11 /* F64 */:
break;
case 12 /* Usize */:
break;
case 13 /* JaktString */:
break;
case 14 /* CChar */:
break;
case 15 /* CInt */:
break;
case 16 /* Unknown */:
break;
case 17 /* Never */:
break;
case 18 /* StructureOrEnum */:
this->as.StructureOrEnum.value = rhs.as.StructureOrEnum.value;
break;
case 19 /* TypeVariable */:
this->as.TypeVariable.value = rhs.as.TypeVariable.value;
break;
case 20 /* RawPtr */:
this->as.RawPtr.value = rhs.as.RawPtr.value;
break;
case 21 /* Reference */:
this->as.Reference.value = rhs.as.Reference.value;
break;
case 22 /* MutableReference */:
this->as.MutableReference.value = rhs.as.MutableReference.value;
break;
case 23 /* Function */:
break;
}
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
return *this;
}
Type::Type(Type const &rhs){VERIFY(rhs.__jakt_variant_index != 0);
switch (rhs.__jakt_init_index()) {
case 0 /* Void */:
break;
case 1 /* Bool */:
break;
case 2 /* U8 */:
break;
case 3 /* U16 */:
break;
case 4 /* U32 */:
break;
case 5 /* U64 */:
break;
case 6 /* I8 */:
break;
case 7 /* I16 */:
break;
case 8 /* I32 */:
break;
case 9 /* I64 */:
break;
case 10 /* F32 */:
break;
case 11 /* F64 */:
break;
case 12 /* Usize */:
break;
case 13 /* JaktString */:
break;
case 14 /* CChar */:
break;
case 15 /* CInt */:
break;
case 16 /* Unknown */:
break;
case 17 /* Never */:
break;
case 18 /* StructureOrEnum */:
new (&this->as.StructureOrEnum.value) (decltype(this->as.StructureOrEnum.value))(rhs.as.StructureOrEnum.value);
break;
case 19 /* TypeVariable */:
new (&this->as.TypeVariable.value) (decltype(this->as.TypeVariable.value))(rhs.as.TypeVariable.value);
break;
case 20 /* RawPtr */:
new (&this->as.RawPtr.value) (decltype(this->as.RawPtr.value))(rhs.as.RawPtr.value);
break;
case 21 /* Reference */:
new (&this->as.Reference.value) (decltype(this->as.Reference.value))(rhs.as.Reference.value);
break;
case 22 /* MutableReference */:
new (&this->as.MutableReference.value) (decltype(this->as.MutableReference.value))(rhs.as.MutableReference.value);
break;
case 23 /* Function */:
break;
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
Type& Type::operator=(Type &&rhs){
{VERIFY(this->__jakt_variant_index != 0 && rhs.__jakt_variant_index != 0);
if (this->__jakt_variant_index != rhs.__jakt_variant_index) {
this->__jakt_destroy_variant();
switch (rhs.__jakt_init_index()) {
case 0 /* Void */:
break;
case 1 /* Bool */:
break;
case 2 /* U8 */:
break;
case 3 /* U16 */:
break;
case 4 /* U32 */:
break;
case 5 /* U64 */:
break;
case 6 /* I8 */:
break;
case 7 /* I16 */:
break;
case 8 /* I32 */:
break;
case 9 /* I64 */:
break;
case 10 /* F32 */:
break;
case 11 /* F64 */:
break;
case 12 /* Usize */:
break;
case 13 /* JaktString */:
break;
case 14 /* CChar */:
break;
case 15 /* CInt */:
break;
case 16 /* Unknown */:
break;
case 17 /* Never */:
break;
case 18 /* StructureOrEnum */:
new (&this->as.StructureOrEnum.value) (decltype(this->as.StructureOrEnum.value))(move(rhs.as.StructureOrEnum.value));
break;
case 19 /* TypeVariable */:
new (&this->as.TypeVariable.value) (decltype(this->as.TypeVariable.value))(move(rhs.as.TypeVariable.value));
break;
case 20 /* RawPtr */:
new (&this->as.RawPtr.value) (decltype(this->as.RawPtr.value))(move(rhs.as.RawPtr.value));
break;
case 21 /* Reference */:
new (&this->as.Reference.value) (decltype(this->as.Reference.value))(move(rhs.as.Reference.value));
break;
case 22 /* MutableReference */:
new (&this->as.MutableReference.value) (decltype(this->as.MutableReference.value))(move(rhs.as.MutableReference.value));
break;
case 23 /* Function */:
break;
}
} else {
switch (rhs.__jakt_init_index()) {
case 0 /* Void */:
break;
case 1 /* Bool */:
break;
case 2 /* U8 */:
break;
case 3 /* U16 */:
break;
case 4 /* U32 */:
break;
case 5 /* U64 */:
break;
case 6 /* I8 */:
break;
case 7 /* I16 */:
break;
case 8 /* I32 */:
break;
case 9 /* I64 */:
break;
case 10 /* F32 */:
break;
case 11 /* F64 */:
break;
case 12 /* Usize */:
break;
case 13 /* JaktString */:
break;
case 14 /* CChar */:
break;
case 15 /* CInt */:
break;
case 16 /* Unknown */:
break;
case 17 /* Never */:
break;
case 18 /* StructureOrEnum */:
this->as.StructureOrEnum.value = move(rhs.as.StructureOrEnum.value);
break;
case 19 /* TypeVariable */:
this->as.TypeVariable.value = move(rhs.as.TypeVariable.value);
break;
case 20 /* RawPtr */:
this->as.RawPtr.value = move(rhs.as.RawPtr.value);
break;
case 21 /* Reference */:
this->as.Reference.value = move(rhs.as.Reference.value);
break;
case 22 /* MutableReference */:
this->as.MutableReference.value = move(rhs.as.MutableReference.value);
break;
case 23 /* Function */:
break;
}
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
return *this;
}
Type::Type(Type &&rhs){
{VERIFY(rhs.__jakt_variant_index != 0);
switch (rhs.__jakt_init_index()) {
case 0 /* Void */:
break;
case 1 /* Bool */:
break;
case 2 /* U8 */:
break;
case 3 /* U16 */:
break;
case 4 /* U32 */:
break;
case 5 /* U64 */:
break;
case 6 /* I8 */:
break;
case 7 /* I16 */:
break;
case 8 /* I32 */:
break;
case 9 /* I64 */:
break;
case 10 /* F32 */:
break;
case 11 /* F64 */:
break;
case 12 /* Usize */:
break;
case 13 /* JaktString */:
break;
case 14 /* CChar */:
break;
case 15 /* CInt */:
break;
case 16 /* Unknown */:
break;
case 17 /* Never */:
break;
case 18 /* StructureOrEnum */:
new (&this->as.StructureOrEnum.value) (decltype(this->as.StructureOrEnum.value))(move(rhs.as.StructureOrEnum.value));
break;
case 19 /* TypeVariable */:
new (&this->as.TypeVariable.value) (decltype(this->as.TypeVariable.value))(move(rhs.as.TypeVariable.value));
break;
case 20 /* RawPtr */:
new (&this->as.RawPtr.value) (decltype(this->as.RawPtr.value))(move(rhs.as.RawPtr.value));
break;
case 21 /* Reference */:
new (&this->as.Reference.value) (decltype(this->as.Reference.value))(move(rhs.as.Reference.value));
break;
case 22 /* MutableReference */:
new (&this->as.MutableReference.value) (decltype(this->as.MutableReference.value))(move(rhs.as.MutableReference.value));
break;
case 23 /* Function */:
break;
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
}
Type::~Type(){
if (this->__jakt_variant_index == 0) return;
this->__jakt_destroy_variant();
}
void Type::__jakt_destroy_variant() {
switch (this->__jakt_init_index()) {
case 0 /* Void */:break;
case 1 /* Bool */:break;
case 2 /* U8 */:break;
case 3 /* U16 */:break;
case 4 /* U32 */:break;
case 5 /* U64 */:break;
case 6 /* I8 */:break;
case 7 /* I16 */:break;
case 8 /* I32 */:break;
case 9 /* I64 */:break;
case 10 /* F32 */:break;
case 11 /* F64 */:break;
case 12 /* Usize */:break;
case 13 /* JaktString */:break;
case 14 /* CChar */:break;
case 15 /* CInt */:break;
case 16 /* Unknown */:break;
case 17 /* Never */:break;
case 18 /* StructureOrEnum */:this->as.StructureOrEnum.value.~Record();
break;
case 19 /* TypeVariable */:this->as.TypeVariable.value.~DeprecatedString();
break;
case 20 /* RawPtr */:this->as.RawPtr.value.~NonnullRefPtr();
break;
case 21 /* Reference */:this->as.Reference.value.~NonnullRefPtr();
break;
case 22 /* MutableReference */:this->as.MutableReference.value.~NonnullRefPtr();
break;
case 23 /* Function */:break;
}
}
ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::Type::name() const {
{
return ({
    auto&& _jakt_value = ([&]() -> JaktInternal::ExplicitValueOrControlFlow<DeprecatedString, ErrorOr<DeprecatedString>>{
auto&& __jakt_match_variant = *this;
switch(__jakt_match_variant.__jakt_init_index()) {
case 0 /* Void */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("void"sv)));
};/*case end*/
case 1 /* Bool */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("bool"sv)));
};/*case end*/
case 2 /* U8 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("u8"sv)));
};/*case end*/
case 3 /* U16 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("u16"sv)));
};/*case end*/
case 4 /* U32 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("u32"sv)));
};/*case end*/
case 5 /* U64 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("u64"sv)));
};/*case end*/
case 6 /* I8 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("i8"sv)));
};/*case end*/
case 7 /* I16 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("i16"sv)));
};/*case end*/
case 8 /* I32 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("i32"sv)));
};/*case end*/
case 9 /* I64 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("i64"sv)));
};/*case end*/
case 10 /* F32 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("f32"sv)));
};/*case end*/
case 11 /* F64 */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("f64"sv)));
};/*case end*/
case 12 /* Usize */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("usize"sv)));
};/*case end*/
case 13 /* JaktString */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("String"sv)));
};/*case end*/
case 14 /* CChar */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("c_char"sv)));
};/*case end*/
case 15 /* CInt */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("c_int"sv)));
};/*case end*/
case 16 /* Unknown */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("unknown"sv)));
};/*case end*/
case 17 /* Never */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("never"sv)));
};/*case end*/
case 18 /* StructureOrEnum */: {
auto&& __jakt_match_value = __jakt_match_variant.as.StructureOrEnum;jakt__prelude__reflection::Reflect::Record const& record = __jakt_match_value.value;
return JaktInternal::ExplicitValue(TRY((__jakt_format((StringView::from_string_literal("struct {}"sv)),((record).name)))));
};/*case end*/
case 19 /* TypeVariable */: {
auto&& __jakt_match_value = __jakt_match_variant.as.TypeVariable;DeprecatedString const& name = __jakt_match_value.value;
return JaktInternal::ExplicitValue(TRY((__jakt_format((StringView::from_string_literal("{}"sv)),name))));
};/*case end*/
case 20 /* RawPtr */: {
auto&& __jakt_match_value = __jakt_match_variant.as.RawPtr;NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> const& type = __jakt_match_value.value;
return JaktInternal::ExplicitValue(TRY((__jakt_format((StringView::from_string_literal("raw {}"sv)),TRY((((type)->name())))))));
};/*case end*/
case 21 /* Reference */: {
auto&& __jakt_match_value = __jakt_match_variant.as.Reference;NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> const& type = __jakt_match_value.value;
return JaktInternal::ExplicitValue(TRY((__jakt_format((StringView::from_string_literal("& {}"sv)),TRY((((type)->name())))))));
};/*case end*/
case 22 /* MutableReference */: {
auto&& __jakt_match_value = __jakt_match_variant.as.MutableReference;NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> const& type = __jakt_match_value.value;
return JaktInternal::ExplicitValue(TRY((__jakt_format((StringView::from_string_literal("&mut {}"sv)),TRY((((type)->name())))))));
};/*case end*/
case 23 /* Function */: {
return JaktInternal::ExplicitValue(TRY(DeprecatedString::from_utf8("fn"sv)));
};/*case end*/
default: VERIFY_NOT_REACHED();}/*switch end*/
}()
);
    if (_jakt_value.is_return())
        return _jakt_value.release_return();
    _jakt_value.release_value();
});
}
}

ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::RecordType::debug_description() const {
auto builder = DeprecatedStringBuilder::create();
switch (this->__jakt_init_index()) {case 0 /* Struct */: {
TRY(builder.append("RecordType::Struct"sv));
[[maybe_unused]] auto const& that = this->as.Struct;
TRY(builder.append("("sv));
{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("fields: {}", that.fields));
}
TRY(builder.append(")"sv));
break;}
case 1 /* Class */: {
TRY(builder.append("RecordType::Class"sv));
[[maybe_unused]] auto const& that = this->as.Class;
TRY(builder.append("("sv));
{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("fields: {}", that.fields));
}
TRY(builder.append(")"sv));
break;}
case 2 /* SumEnum */: {
TRY(builder.append("RecordType::SumEnum"sv));
[[maybe_unused]] auto const& that = this->as.SumEnum;
TRY(builder.append("("sv));
{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("is_boxed: {}, ", that.is_boxed));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("variants: {}", that.variants));
}
TRY(builder.append(")"sv));
break;}
}
return builder.to_string();
}
[[nodiscard]] RecordType RecordType::Struct(JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields){
RecordType __jakt_uninit_enum;
__jakt_uninit_enum.__jakt_variant_index = 1;
new (&__jakt_uninit_enum.as.Struct.fields) (decltype(fields))(move(fields));
return __jakt_uninit_enum;
}
[[nodiscard]] RecordType RecordType::Class(JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields){
RecordType __jakt_uninit_enum;
__jakt_uninit_enum.__jakt_variant_index = 2;
new (&__jakt_uninit_enum.as.Class.fields) (decltype(fields))(move(fields));
return __jakt_uninit_enum;
}
[[nodiscard]] RecordType RecordType::SumEnum(bool is_boxed, JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::SumEnumVariant> variants){
RecordType __jakt_uninit_enum;
__jakt_uninit_enum.__jakt_variant_index = 3;
new (&__jakt_uninit_enum.as.SumEnum.is_boxed) (decltype(is_boxed))(move(is_boxed));
new (&__jakt_uninit_enum.as.SumEnum.variants) (decltype(variants))(move(variants));
return __jakt_uninit_enum;
}
RecordType& RecordType::operator=(RecordType const &rhs){
{VERIFY(this->__jakt_variant_index != 0 && rhs.__jakt_variant_index != 0);
if (this->__jakt_variant_index != rhs.__jakt_variant_index) {
this->__jakt_destroy_variant();
switch (rhs.__jakt_init_index()) {
case 0 /* Struct */:
new (&this->as.Struct.fields) (decltype(this->as.Struct.fields))(rhs.as.Struct.fields);
break;
case 1 /* Class */:
new (&this->as.Class.fields) (decltype(this->as.Class.fields))(rhs.as.Class.fields);
break;
case 2 /* SumEnum */:
new (&this->as.SumEnum.is_boxed) (decltype(this->as.SumEnum.is_boxed))(rhs.as.SumEnum.is_boxed);
new (&this->as.SumEnum.variants) (decltype(this->as.SumEnum.variants))(rhs.as.SumEnum.variants);
break;
}
} else {
switch (rhs.__jakt_init_index()) {
case 0 /* Struct */:
this->as.Struct.fields = rhs.as.Struct.fields;
break;
case 1 /* Class */:
this->as.Class.fields = rhs.as.Class.fields;
break;
case 2 /* SumEnum */:
this->as.SumEnum.is_boxed = rhs.as.SumEnum.is_boxed;
this->as.SumEnum.variants = rhs.as.SumEnum.variants;
break;
}
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
return *this;
}
RecordType::RecordType(RecordType const &rhs){VERIFY(rhs.__jakt_variant_index != 0);
switch (rhs.__jakt_init_index()) {
case 0 /* Struct */:
new (&this->as.Struct.fields) (decltype(this->as.Struct.fields))(rhs.as.Struct.fields);
break;
case 1 /* Class */:
new (&this->as.Class.fields) (decltype(this->as.Class.fields))(rhs.as.Class.fields);
break;
case 2 /* SumEnum */:
new (&this->as.SumEnum.is_boxed) (decltype(this->as.SumEnum.is_boxed))(rhs.as.SumEnum.is_boxed);
new (&this->as.SumEnum.variants) (decltype(this->as.SumEnum.variants))(rhs.as.SumEnum.variants);
break;
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
RecordType& RecordType::operator=(RecordType &&rhs){
{VERIFY(this->__jakt_variant_index != 0 && rhs.__jakt_variant_index != 0);
if (this->__jakt_variant_index != rhs.__jakt_variant_index) {
this->__jakt_destroy_variant();
switch (rhs.__jakt_init_index()) {
case 0 /* Struct */:
new (&this->as.Struct.fields) (decltype(this->as.Struct.fields))(move(rhs.as.Struct.fields));
break;
case 1 /* Class */:
new (&this->as.Class.fields) (decltype(this->as.Class.fields))(move(rhs.as.Class.fields));
break;
case 2 /* SumEnum */:
new (&this->as.SumEnum.is_boxed) (decltype(this->as.SumEnum.is_boxed))(move(rhs.as.SumEnum.is_boxed));
new (&this->as.SumEnum.variants) (decltype(this->as.SumEnum.variants))(move(rhs.as.SumEnum.variants));
break;
}
} else {
switch (rhs.__jakt_init_index()) {
case 0 /* Struct */:
this->as.Struct.fields = move(rhs.as.Struct.fields);
break;
case 1 /* Class */:
this->as.Class.fields = move(rhs.as.Class.fields);
break;
case 2 /* SumEnum */:
this->as.SumEnum.is_boxed = move(rhs.as.SumEnum.is_boxed);
this->as.SumEnum.variants = move(rhs.as.SumEnum.variants);
break;
}
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
return *this;
}
RecordType::RecordType(RecordType &&rhs){
{VERIFY(rhs.__jakt_variant_index != 0);
switch (rhs.__jakt_init_index()) {
case 0 /* Struct */:
new (&this->as.Struct.fields) (decltype(this->as.Struct.fields))(move(rhs.as.Struct.fields));
break;
case 1 /* Class */:
new (&this->as.Class.fields) (decltype(this->as.Class.fields))(move(rhs.as.Class.fields));
break;
case 2 /* SumEnum */:
new (&this->as.SumEnum.is_boxed) (decltype(this->as.SumEnum.is_boxed))(move(rhs.as.SumEnum.is_boxed));
new (&this->as.SumEnum.variants) (decltype(this->as.SumEnum.variants))(move(rhs.as.SumEnum.variants));
break;
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
}
RecordType::~RecordType(){
if (this->__jakt_variant_index == 0) return;
this->__jakt_destroy_variant();
}
void RecordType::__jakt_destroy_variant() {
switch (this->__jakt_init_index()) {
case 0 /* Struct */:this->as.Struct.fields.~DynamicArray();
break;
case 1 /* Class */:this->as.Class.fields.~DynamicArray();
break;
case 2 /* SumEnum */:this->as.SumEnum.variants.~DynamicArray();
break;
}
}
ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::Visibility::debug_description() const {
auto builder = DeprecatedStringBuilder::create();
switch (this->__jakt_init_index()) {case 0 /* Public */: {
return DeprecatedString("Visibility::Public"sv);
break;}
case 1 /* Private */: {
return DeprecatedString("Visibility::Private"sv);
break;}
}
return builder.to_string();
}
[[nodiscard]] Visibility Visibility::Public(){
Visibility __jakt_uninit_enum;
__jakt_uninit_enum.__jakt_variant_index = 1;
return __jakt_uninit_enum;
}
[[nodiscard]] Visibility Visibility::Private(){
Visibility __jakt_uninit_enum;
__jakt_uninit_enum.__jakt_variant_index = 2;
return __jakt_uninit_enum;
}
Visibility& Visibility::operator=(Visibility const &rhs){
{VERIFY(this->__jakt_variant_index != 0 && rhs.__jakt_variant_index != 0);
if (this->__jakt_variant_index != rhs.__jakt_variant_index) {
this->__jakt_destroy_variant();
switch (rhs.__jakt_init_index()) {
case 0 /* Public */:
break;
case 1 /* Private */:
break;
}
} else {
switch (rhs.__jakt_init_index()) {
case 0 /* Public */:
break;
case 1 /* Private */:
break;
}
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
return *this;
}
Visibility::Visibility(Visibility const &rhs){VERIFY(rhs.__jakt_variant_index != 0);
switch (rhs.__jakt_init_index()) {
case 0 /* Public */:
break;
case 1 /* Private */:
break;
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
Visibility& Visibility::operator=(Visibility &&rhs){
{VERIFY(this->__jakt_variant_index != 0 && rhs.__jakt_variant_index != 0);
if (this->__jakt_variant_index != rhs.__jakt_variant_index) {
this->__jakt_destroy_variant();
switch (rhs.__jakt_init_index()) {
case 0 /* Public */:
break;
case 1 /* Private */:
break;
}
} else {
switch (rhs.__jakt_init_index()) {
case 0 /* Public */:
break;
case 1 /* Private */:
break;
}
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
return *this;
}
Visibility::Visibility(Visibility &&rhs){
{VERIFY(rhs.__jakt_variant_index != 0);
switch (rhs.__jakt_init_index()) {
case 0 /* Public */:
break;
case 1 /* Private */:
break;
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
}
Visibility::~Visibility(){
if (this->__jakt_variant_index == 0) return;
this->__jakt_destroy_variant();
}
void Visibility::__jakt_destroy_variant() {
switch (this->__jakt_init_index()) {
case 0 /* Public */:break;
case 1 /* Private */:break;
}
}
ErrorOr<DeprecatedString> jakt__prelude__reflection::Reflect::SumEnumVariant::debug_description() const {
auto builder = DeprecatedStringBuilder::create();
switch (this->__jakt_init_index()) {case 0 /* StructLike */: {
TRY(builder.append("SumEnumVariant::StructLike"sv));
[[maybe_unused]] auto const& that = this->as.StructLike;
TRY(builder.append("("sv));
{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("name: \"{}\", ", that.name));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("fields: {}", that.fields));
}
TRY(builder.append(")"sv));
break;}
case 1 /* Typed */: {
TRY(builder.append("SumEnumVariant::Typed"sv));
[[maybe_unused]] auto const& that = this->as.Typed;
TRY(builder.append("("sv));
{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("name: \"{}\", ", that.name));
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("type: {}", that.type));
}
TRY(builder.append(")"sv));
break;}
case 2 /* Untyped */: {
TRY(builder.append("SumEnumVariant::Untyped"sv));
[[maybe_unused]] auto const& that = this->as.Untyped;
TRY(builder.append("("sv));
{
JaktInternal::PrettyPrint::ScopedLevelIncrease increase_indent {};
TRY(JaktInternal::PrettyPrint::output_indentation(builder));
TRY(builder.appendff("name: \"{}\"", that.name));
}
TRY(builder.append(")"sv));
break;}
}
return builder.to_string();
}
[[nodiscard]] SumEnumVariant SumEnumVariant::StructLike(DeprecatedString name, JaktInternal::DynamicArray<jakt__prelude__reflection::Reflect::Field> fields){
SumEnumVariant __jakt_uninit_enum;
__jakt_uninit_enum.__jakt_variant_index = 1;
new (&__jakt_uninit_enum.as.StructLike.name) (decltype(name))(move(name));
new (&__jakt_uninit_enum.as.StructLike.fields) (decltype(fields))(move(fields));
return __jakt_uninit_enum;
}
[[nodiscard]] SumEnumVariant SumEnumVariant::Typed(DeprecatedString name, NonnullRefPtr<typename jakt__prelude__reflection::Reflect::Type> type){
SumEnumVariant __jakt_uninit_enum;
__jakt_uninit_enum.__jakt_variant_index = 2;
new (&__jakt_uninit_enum.as.Typed.name) (decltype(name))(move(name));
new (&__jakt_uninit_enum.as.Typed.type) (decltype(type))(move(type));
return __jakt_uninit_enum;
}
[[nodiscard]] SumEnumVariant SumEnumVariant::Untyped(DeprecatedString name){
SumEnumVariant __jakt_uninit_enum;
__jakt_uninit_enum.__jakt_variant_index = 3;
new (&__jakt_uninit_enum.as.Untyped.name) (decltype(name))(move(name));
return __jakt_uninit_enum;
}
SumEnumVariant& SumEnumVariant::operator=(SumEnumVariant const &rhs){
{VERIFY(this->__jakt_variant_index != 0 && rhs.__jakt_variant_index != 0);
if (this->__jakt_variant_index != rhs.__jakt_variant_index) {
this->__jakt_destroy_variant();
switch (rhs.__jakt_init_index()) {
case 0 /* StructLike */:
new (&this->as.StructLike.name) (decltype(this->as.StructLike.name))(rhs.as.StructLike.name);
new (&this->as.StructLike.fields) (decltype(this->as.StructLike.fields))(rhs.as.StructLike.fields);
break;
case 1 /* Typed */:
new (&this->as.Typed.name) (decltype(this->as.Typed.name))(rhs.as.Typed.name);
new (&this->as.Typed.type) (decltype(this->as.Typed.type))(rhs.as.Typed.type);
break;
case 2 /* Untyped */:
new (&this->as.Untyped.name) (decltype(this->as.Untyped.name))(rhs.as.Untyped.name);
break;
}
} else {
switch (rhs.__jakt_init_index()) {
case 0 /* StructLike */:
this->as.StructLike.name = rhs.as.StructLike.name;
this->as.StructLike.fields = rhs.as.StructLike.fields;
break;
case 1 /* Typed */:
this->as.Typed.name = rhs.as.Typed.name;
this->as.Typed.type = rhs.as.Typed.type;
break;
case 2 /* Untyped */:
this->as.Untyped.name = rhs.as.Untyped.name;
break;
}
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
return *this;
}
SumEnumVariant::SumEnumVariant(SumEnumVariant const &rhs){VERIFY(rhs.__jakt_variant_index != 0);
switch (rhs.__jakt_init_index()) {
case 0 /* StructLike */:
new (&this->as.StructLike.name) (decltype(this->as.StructLike.name))(rhs.as.StructLike.name);
new (&this->as.StructLike.fields) (decltype(this->as.StructLike.fields))(rhs.as.StructLike.fields);
break;
case 1 /* Typed */:
new (&this->as.Typed.name) (decltype(this->as.Typed.name))(rhs.as.Typed.name);
new (&this->as.Typed.type) (decltype(this->as.Typed.type))(rhs.as.Typed.type);
break;
case 2 /* Untyped */:
new (&this->as.Untyped.name) (decltype(this->as.Untyped.name))(rhs.as.Untyped.name);
break;
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
SumEnumVariant& SumEnumVariant::operator=(SumEnumVariant &&rhs){
{VERIFY(this->__jakt_variant_index != 0 && rhs.__jakt_variant_index != 0);
if (this->__jakt_variant_index != rhs.__jakt_variant_index) {
this->__jakt_destroy_variant();
switch (rhs.__jakt_init_index()) {
case 0 /* StructLike */:
new (&this->as.StructLike.name) (decltype(this->as.StructLike.name))(move(rhs.as.StructLike.name));
new (&this->as.StructLike.fields) (decltype(this->as.StructLike.fields))(move(rhs.as.StructLike.fields));
break;
case 1 /* Typed */:
new (&this->as.Typed.name) (decltype(this->as.Typed.name))(move(rhs.as.Typed.name));
new (&this->as.Typed.type) (decltype(this->as.Typed.type))(move(rhs.as.Typed.type));
break;
case 2 /* Untyped */:
new (&this->as.Untyped.name) (decltype(this->as.Untyped.name))(move(rhs.as.Untyped.name));
break;
}
} else {
switch (rhs.__jakt_init_index()) {
case 0 /* StructLike */:
this->as.StructLike.name = move(rhs.as.StructLike.name);
this->as.StructLike.fields = move(rhs.as.StructLike.fields);
break;
case 1 /* Typed */:
this->as.Typed.name = move(rhs.as.Typed.name);
this->as.Typed.type = move(rhs.as.Typed.type);
break;
case 2 /* Untyped */:
this->as.Untyped.name = move(rhs.as.Untyped.name);
break;
}
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
return *this;
}
SumEnumVariant::SumEnumVariant(SumEnumVariant &&rhs){
{VERIFY(rhs.__jakt_variant_index != 0);
switch (rhs.__jakt_init_index()) {
case 0 /* StructLike */:
new (&this->as.StructLike.name) (decltype(this->as.StructLike.name))(move(rhs.as.StructLike.name));
new (&this->as.StructLike.fields) (decltype(this->as.StructLike.fields))(move(rhs.as.StructLike.fields));
break;
case 1 /* Typed */:
new (&this->as.Typed.name) (decltype(this->as.Typed.name))(move(rhs.as.Typed.name));
new (&this->as.Typed.type) (decltype(this->as.Typed.type))(move(rhs.as.Typed.type));
break;
case 2 /* Untyped */:
new (&this->as.Untyped.name) (decltype(this->as.Untyped.name))(move(rhs.as.Untyped.name));
break;
}
this->__jakt_variant_index = rhs.__jakt_variant_index;
}
}
SumEnumVariant::~SumEnumVariant(){
if (this->__jakt_variant_index == 0) return;
this->__jakt_destroy_variant();
}
void SumEnumVariant::__jakt_destroy_variant() {
switch (this->__jakt_init_index()) {
case 0 /* StructLike */:this->as.StructLike.name.~DeprecatedString();
this->as.StructLike.fields.~DynamicArray();
break;
case 1 /* Typed */:this->as.Typed.name.~DeprecatedString();
this->as.Typed.type.~NonnullRefPtr();
break;
case 2 /* Untyped */:this->as.Untyped.name.~DeprecatedString();
break;
}
}
}
}
} // namespace Jakt
