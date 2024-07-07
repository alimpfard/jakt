# Jakt Language Reference

## Basics - Syntax

### Comments

Comments can only be single-line, preceded by `//`; they span the rest of the line.

```jakt
// This is a comment
```

### Variables

Variables can be mutable or immutable; which are declared with the `mut` and `let` keywords, respectively.
A variable declaration may include an optional type annotation, which is separated from the variable name by a colon.

```jakt
let x: i32 = 5
mut y = 10
```

All variables must be initialized in the declaration statement, and the type of the variable is inferred from both the type annotation (if available) and the value assigned to it.

```jakt
let x = 5 // in the absence of a type annotation, x is inferred to be of type i64
let y: i32 = 10 // y is explicitly declared to be of type i32, thus the value 10 is also an i32
```

### Constants

Currently there is no way to declare a constant value, a [`comptime` function](functions.md#comptime-functions) can be used to achieve the same effect.

```jakt
comptime pi() => 3.14159f64

let x = pi() // the call to pi() is equivalent to a constant value of 3.14159 of type f64
```

### Statement Termination

Statements are terminated at the end of a line, provided that the statement would be complete at that point.
Optionally, a semicolon can be used to explicitly terminate a statement.

```jakt
mut x = 5 +
    6 // the statement ends here.
println("{}", x); x = 10
```

### Numeric Literals

Numeric literals can be written in the decimal, hexadecimal, octal, or binary format (bases 10, 16, 8, or 2).
Such literals are normally contextually typed, but can be explicitly typed by appending a [type suffix](#numeric-type-suffixes).

```jakt
let x = 10 // decimal, i64
let y = 0x10 // hexadecimal, i64
let z = 0o10u32 // octal, u32
let w = 0b10i8 // binary, i8
```

#### Numeric Type Suffixes

The currently supported numeric type suffixes are as follows:

- `i<N>`: signed integer of `<N>` bits, where N is a power of two, and 8 ≤ N ≤ 64.
- `u<N>`: unsigned integer of `<N>` bits, where N is a power of two, and 8 ≤ N ≤ 64.
- `uz`: unsigned integer of the same size as the target architecture's pointer size, i.e., `usize`.
- `f32`: 32-bit floating-point number.
- `f64`: 64-bit floating-point number.

These suffixes correspond to the primitive numeric types in Jakt (see [Primitive Types](#primitive-types)).
If a numeric literal is not explicitly typed, the type is inferred from the context in which it is used, the default type when no further information is available is `i64` for integers and `f64` for floating-point numbers.

### Numeric Type Conversion

Numeric type conversion can be performed using the `as` keyword, followed by one of `!` or `?` to indicate whether the conversion is expected to always succeed or not, respectively.
In the case of a failed conversion, the program will assert if the `as!` operator is used, or return `None` if the `as?` operator is used.

```jakt
let x: i32 = 10
let y = x as! i64 // y is now 10 of type i64, this conversion is guaranteed to succeed
let z = x as? i8 // z is now 10 of type Optional<i8>, the conversion may fail if the input value is out of range for i8.
let w = x as! f32 // Similar story for floating-point numbers.
```

## Basics - Types

### Primitive Types

The primitive types in Jakt are as follows:

- Primitive Integer Types:
  - `i8`, `i16`, `i32`, `i64`: signed integers of 8, 16, 32, and 64 bits, respectively.
  - `u8`, `u16`, `u32`, `u64`: unsigned integers of 8, 16, 32, and 64 bits, respectively.
  - `usize`: unsigned integer of the same size as the target architecture's pointer size.
- Primitive Floating-Point Types:
    - `f32`: 32-bit floating-point number.
    - `f64`: 64-bit floating-point number.
- `bool`: Boolean type, with values `true` and `false`.
- `c_char`: C character type, equivalent to `char` in C.
- `c_int`: C integer type, equivalent to `int` in C.
- `never`: The type of expressions that never evaluate to a value, used to indicate that a function never returns; this type has no members.
- `void`: The type of expressions that evaluate to nothing, used to indicate that a function returns nothing.

### Compound Types

#### Tuples

Tuples are ordered collections of elements of different types, and are declared using parentheses.
Note that the empty tuple `()` can be named as a type, but there is currently no syntax for creating an instance of it.

```jakt
let x = (1, 2, 3) // x is a tuple of type (i64, i64, i64)
let y: (i32, f64) = (10, 3.14)
```

Members of a tuple can be accessed using the `.` operator, followed by the zero-based index of the member.

```jakt
let x = (1, 2, 3)
let y = x.0 // y is now 1
let z = x.2 // z is now 3
```

#### Optionals

An optional type is a type that can either hold a value of a given type or no value at all.
Optional types can be created using the `?` suffix, or by using the `Optional<T>` generic type.
Values of the contained type (`T`) can be implicitly cast to the optional type. Values can also be created using the special `None` and `Some` constructors.

```jakt
let x: i32? = 10 // x is an optional i32 with the value 10
let y: Optional<i32> = None // y is an optional i32 with no value
let z = Some(5) // z is an optional i64 with the value 5
```

##### Unwrapping Optionals

Optionals can be unwrapped using the `!` operator, which will assert if the optional is `None`.

```jakt
let x: i32? = 10
let y = x! // y is now 10i32
```

##### Providing Default Values

Optionals can be unwrapped with a default value using the `??` operator.

```jakt
let x: i32? = None
let y = x ?? 5 // y is now 5i32
```

##### Optional Chaining

Methods and members of optional types can be accessed using the `?.` operator, which will return `None` if the optional is `None`, or `Some(...)` if the optional has a value.

```jakt
let x: (i32, i32)? = (1, 2)
let y = x?.0 // y is now Some(1)

let z: (i32, i32)? = None
let w = z?.0 // w is now None
```

#### Arrays

Arrays in Jakt are dynamically allocated vectors, and are declared using square brackets. Alternatively, the `Array<T>` generic type can be used.

```jakt
let x = [1, 2, 3] // x is an array of type [i64]
let y: [i32] = [10, 20, 30] // type annotation can be used to specify the type of the array elements
```

Members of an array can be accessed using the `[]` operator, please refer to the [Arrays section in the Standard Library Prelude](standard-library.md#array) for more information.

```jakt
let x = [1, 2, 3]
let y = x[0] // y is now 1
```

#### Dictionaries

Dictionaries in Jakt are key-value pairs, and are declared using the `[K:V]` syntax, where `K` and `V` are the types of the keys and values, respectively. Alternatively, the `Dictionary<K, V>` generic type can be used.

```jakt
let x = [1:2, 3:4] // x is a dictionary of type [i64:i64]
```

Members of a dictionary can be accessed using the `[]` operator, please refer to the [Dictionaries section in the Standard Library Prelude](standard-library.md#dictionary) for more information.

```jakt
let x = [1:2, 3:4]
let y = x[1] // y is now 2
```

#### Sets

Sets are ordered collections of unique elements, and are declared using the `{T}` syntax. Alternatively, the `Set<T>` generic type can be used.

```jakt
let x = {1, 2, 3} // x is a set of type {i64}
```

Please refer to the [Sets section in the Standard Library Prelude](standard-library.md#set) for more information.

#### References and Pointers

References (`&T`) can be created using the `&` (and `&mut`) operator, the compiler will ensure that the reference does not outlive the value it points to. Note that this check does not fully extend to functions/types imported from external code (e.g., C/C++ functions) yet, unless the imported entity declares how the references it receives are managed (see [`stores_arguments` in the Entity Attributes section](entity-attributes.md#stores_arguments)).
References will normally be automatically dereferenced when the usage is unambiguous, but can be explicitly dereferenced using the `*` operator; this is a safe operation as references cannot be null.

```jakt
mut x = SomeObject()
let y = &x // y is an immutable reference to x
let z = &mut x // z is a mutable reference to x

z.field = 10 // this is allowed because z is a mutable reference, and modifies x
let w = *y // w now contains a copy of x
```

Pointers (`raw T`) can be created using the `&raw` operator, and are not subject to the same lifetime checks as references; as such, dereferencing a pointer is an unsafe operation, and must be done within an `unsafe` block or expression.

```jakt
let x = SomeObject()
let y = &raw x // y is a pointer to x, this is allowed in safe code

let z = unsafe *y // z now contains a copy of x

unsafe { (*y).field = 10 } // note that this is invalid, as `x` is not a mutable object, as such, accesses through `y` are also into an immutable object.
```

For creating null pointers, please refer to the [`null<T>` function in the Standard Library](standard-library.md#null).
