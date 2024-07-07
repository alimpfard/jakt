# Jakt Language Reference

## Operators

| Operator                           | Description |
|    ---                             |:------------|
| -- Arithmetic --                   |             |
| [`+`](#add)                        | Addition    |
| [`-`](#subtract)                   | Subtraction |
| [`*`](#multiply)                   | Multiplication |
| [`/`](#divide)                     | Division    |
| [`%`](#modulo)                     | Modulo      |
| -- Comparison --                   |             |
| [`==`](#equal)                     | Equality    |
| [`!=`](#not-equal)                 | Inequality  |
| [`<`](#less-than)                  | Less than   |
| [`>`](#greater-than)               | Greater than |
| [`<=`](#less-than-or-equal)        | Less than or equal |
| [`>=`](#greater-than-or-equal)     | Greater than or equal |
| -- Logical --                      |             |
| [`not`](#logical-not)               | Logical Not |
| [`and`](#logical-and)               | Logical And |
| [`or`](#logical-or)                 | Logical Or  |
| -- Bitwise --                      |             |
| [`&`](#bitwise-and)                | Bitwise And |
| [`\|`](#bitwise-or)                | Bitwise Or  |
| [`^`](#bitwise-xor)                | Bitwise Xor |
| [`~`](#bitwise-neg)                | Bitwise Negation |
| [`<<`](#bitwise-shift-left)        | Bitwise Shift Left |
| [`>>`](#bitwise-shift-right)       | Bitwise Shift Right |
| -- Assignment --                   |             |
| [`=`](#assign)                     | Assignment  |
| [`+=`](#add-assign)                | Add and Assign |
| [`-=`](#subtract-assign)           | Subtract and Assign |
| [`*=`](#multiply-assign)           | Multiply and Assign |
| [`/=`](#divide-assign)             | Divide and Assign |
| [`%=`](#modulo-assign)             | Modulo and Assign |
| [`&=`](#bitwise-and-assign)        | Bitwise And Assign |
| [`\|=`](#bitwise-or-assign)        | Bitwise Or Assign |
| [`^=`](#bitwise-xor-assign)        | Bitwise Xor Assign |
| [`<<=`](#bitwise-shift-left-assign) | Bitwise Shift Left Assign |
| [`>>=`](#bitwise-shift-right-assign) | Bitwise Shift Right Assign |
| [`?=`](#null-coalescing-assign)    | Null-coalescing Assign |
| -- Other --                        |             |
| [`??`](#null-coalescing)           | Null-coalescing |
| [`reflect`](#reflect)              | Static Reflection |
| [`is`](#is)                        | Concrete type check |
| [`as`](#as)                        | Explicit type cast |
| [`..`](#range)                     | Range  |
| [`[]`](#index)                   | Indexing operator  |
| [`.`](#member-access)              | Member access |
| [`.[]`](#comptime-index)           | Comptime Indexing operator |

### Arithmetic

#### Add

The `+` operator can be used for addition of two values.
This operator corresponds to the `Add` and `ThrowingAdd` traits, and is defined for all types that implement these traits.

The operation may throw if the selected implementation is `ThrowingAdd`.

By default, the `Add` trait is implemented for all numeric types, and Strings.
The default implementation of `Add` for Integral types uses checked arithmetic, and will assert that the result fits within the type's range.
Floating-point types use the standard unchecked arithmetic rules.

```jakt
let x = 10 + 20 // x is now 30
let y = 10.0 + 20.0 // y is now 30.0
let z = "Hello, " + "World!" // z is now "Hello, World!"
```

Implementations of the `Add` trait can be provided for custom types:
```jakt
struct Point implements(Add<Point, Point>) {
    x: i32
    y: i32

    fn add(this, anon other: Point) -> Point {
        return Point(x: .x + other.x, y: .y + other.y)
    }
}

let a = Point(x: 1, y: 2)
let b = Point(x: 3, y: 4)
let c = a + b // c is now Point(x: 4, y: 6)
```

#### Subtract

The `-` operator can be used for subtraction of two values.
This operator corresponds to the `Sub` and `ThrowingSub` traits, and is defined for all types that implement these traits.

The operation may throw if the selected implementation is `ThrowingSub`.

By default, the `Sub` trait is implemented for all numeric types.
The default implementation of `Sub` for Integral types uses checked arithmetic, and will assert that the result fits within the type's range.
Floating-point types use the standard unchecked arithmetic rules.

```jakt
let x = 20 - 10 // x is now 10
let y = 20.0 - 10.0 // y is now 10.0
```

Implementations of the `Sub` trait can be provided for custom types:
```jakt
struct Point implements(Sub<Point, Point>) {
    x: i32
    y: i32

    fn sub(this, anon other: Point) -> Point {
        return Point(x: .x - other.x, y: .y - other.y)
    }
}

let a = Point(x: 3, y: 4)
let b = Point(x: 1, y: 2)
let c = a - b // c is now Point(x: 2, y: 2)
```

#### Multiply

The `*` operator can be used for multiplication of two values.
This operator corresponds to the `Multiply` and `ThrowingMultiply` traits, and is defined for all types that implement these traits.

The operation may throw if the selected implementation is `ThrowingMultiply`.

By default, the `Multiply` trait is implemented for all numeric types.
The default implementation of `Multiply` for Integral types uses checked arithmetic, and will assert that the result fits within the type's range.
Floating-point types use the standard unchecked arithmetic rules.

```jakt
let x = 10 * 20 // x is now 200
let y = 10.0 * 20.0 // y is now 200.0
```

Implementations of the `Multiply` trait can be provided for custom types:
```jakt
struct Point implements(Multiply<i32, Point>) {
    x: i32
    y: i32

    fn mul(this, anon v: i32) -> Point {
        return Point(x: .x * v, y: .y * v)
    }
}

let a = Point(x: 3, y: 4)
let b = a * 2 // b is now Point(x: 6, y: 8)
```

#### Divide

The `/` operator can be used for division of two values.
This operator corresponds to the `Divide` and `ThrowingDivide` traits, and is defined for all types that implement these traits.

The operation may throw if the selected implementation is `ThrowingDivide`.

By default, the `Divide` trait is implemented for all numeric types.
The default implementation of `Divide` for Integral types uses checked arithmetic, and will assert that the result fits within the type's range.
Floating-point types use the standard unchecked arithmetic rules.

```jakt
let x = 20 / 10 // x is now 2
let y = 20.0 / 10.0 // y is now 2.0
```

Implementations of the `Divide` trait can be provided for custom types:
```jakt
struct Point implements(Divide<i32, Point>) {
    x: i32
    y: i32

    fn div(this, anon v: i32) -> Point {
        return Point(x: .x / v, y: .y / v)
    }
}

let a = Point(x: 6, y: 8)
let b = a / 2 // b is now Point(x: 3, y: 4)
```

#### Modulo

The `%` operator can be used to calculate the remainder of a division operation.
This operator corresponds to the `Modulo` and `ThrowingModulo` traits, and is defined for all types that implement these traits.

The operation may throw if the selected implementation is `ThrowingModulo`.

By default, the `Modulo` trait is implemented for all numeric types.
The default implementation of `Modulo` for Integral types uses checked arithmetic, and will assert that the result fits within the type's range.
Floating-point types use the standard unchecked arithmetic rules.

```jakt
let x = 20 % 10 // x is now 0
```

Implementations of the `Modulo` trait can be provided for custom types:
```jakt
struct Point implements(Modulo<i32, Point>) {
    x: i32
    y: i32

    fn mod(this, anon v: i32) -> Point {
        return Point(x: .x % v, y: .y % v)
    }
}

let a = Point(x: 6, y: 8)
let b = a % 3 // b is now Point(x: 0, y: 2)
```

### Comparison

#### Equality

Equality is defined based on the `Equal` trait, which at minimum requires the `equals` method to be implemented, and is defined for all primitive types which can have a value.

##### Equal

The `==` operator can be used to compare two values for equality.
This operator corresponds to the `equals` method of the `Equal` trait, and is defined for all types that implement this trait.

```jakt
let x = 10 == 10 // x is now true
let y = 10.0 == 10.0 // y is now true
let z = "Hello" == "World" // z is now false
```

Implementations of the `Equal` trait can be provided for custom types:
```jakt
struct Point implements(Equal<Point>) {
    x: i32
    y: i32

    fn equals(this, anon other: Point) -> bool {
        return .x == other.x && .y == other.y
    }
}

let a = Point(x: 1, y: 2)
let b = Point(x: 1, y: 2)
let c = a == b // c is now true
```

##### Not Equal

The `!=` operator can be used to compare two values for inequality.
This operator corresponds to the `not_equals` method of the `Equal` trait, and is defined for all types that implement this trait.

This operator is by default implemented as the negation of the `equals` method.

```jakt
let x = 10 != 20 // x is now true
let y = 10.0 != 20.0 // y is now true
let z = "Hello" != "World" // z is now true
```

#### Ordering

Jakt only assumes and requires partial ordering, using the `Compare` trait.
The `Compare` trait requires the `compare` method to be implemented, and is defined for all numeric types.

Comparison operators are defined based on the `Ordering` enum, which has the typical `Less`, `Equal`, and `Greater` variants.

This trait is defined for Integral, Floating-point, and String types by default.

Implementations of the `Compare` trait can be provided for custom types:
```jakt
struct Point implements(Compare<Point>) {
    x: i32
    y: i32

    fn compare(this, anon other: Point) -> Ordering {
        if .x == other.x and .y == other.y {
            return Ordering::Equal
        }
        if .x < other.x or (.x == other.x and .y < other.y) {
            return Ordering::Less
        }
        return Ordering::Greater
    }
}
```

##### Less Than

The `<` operator can be used to compare two values for less-than ordering.
This operator corresponds to the `Greater` return value from the `compare` method of the `Compare` trait, and is defined for all types that implement this trait.

```jakt
let x = 10 < 20 // x is now true
let y = 10.0 < 20.0 // y is now true
```

This operator can also be used to compare custom types:
```jakt
// Using the custom Point type from #Ordering above
let a = Point(x: 1, y: 2)
let b = Point(x: 3, y: 4)
let c = a < b // c is now true
```

##### Greater Than

The `>` operator can be used to compare two values for greater-than ordering.
This operator corresponds to the `Less` return value from the `compare` method of the `Compare` trait, and is defined for all types that implement this trait.

```jakt
let x = 20 > 10 // x is now true
let y = 20.0 > 10.0 // y is now true
```

This operator can also be used to compare custom types:
```jakt
// Using the custom Point type from #Ordering above
let a = Point(x: 3, y: 4)
let b = Point(x: 1, y: 2)
let c = a > b // c is now true
```

##### Less Than or Equal

The `<=` operator can be used to compare two values for less-than-or-equal ordering.
This operator corresponds to the `Greater` or `Equal` return value from the `compare` method of the `Compare` trait, and is defined for all types that implement this trait.

```jakt
let x = 10 <= 20 // x is now true
let y = 10.0 <= 20.0 // y is now true
```

This operator can also be used to compare custom types:
```jakt
// Using the custom Point type from #Ordering above
let a = Point(x: 1, y: 2)
let b = Point(x: 3, y: 4)
let c = a <= b // c is now true
```

##### Greater Than or Equal

The `>=` operator can be used to compare two values for greater-than-or-equal ordering.
This operator corresponds to the `Less` or `Equal` return value from the `compare` method of the `Compare` trait, and is defined for all types that implement this trait.

```jakt
let x = 20 >= 10 // x is now true
let y = 20.0 >= 10.0 // y is now true
```

This operator can also be used to compare custom types:
```jakt
// Using the custom Point type from #Ordering above
let a = Point(x: 3, y: 4)
let b = Point(x: 1, y: 2)
let c = a >= b // c is now true
```

### Logical

The logical operators are currently not defined by traits, and are implemented as built-in operators consuming and producing boolean values (`bool`).

#### Logical Not

The `not` operator can be used to negate a boolean value.

```jakt
let x = not true // x is now false
let y = not false // y is now true
```

#### Logical And

The `and` operator can be used to perform a logical AND operation on two boolean values.

```jakt
let x = true and true // x is now true
let y = true and false // y is now false
```

#### Logical Or

The `or` operator can be used to perform a logical OR operation on two boolean values.

```jakt
let x = true or true // x is now true
let y = true or false // y is now true
```

### Bitwise

The bitwise operators are currently not defined by traits, and are implemented as built-in operators consuming and producing integer values.

#### Bitwise And

The `&` operator can be used to perform a bitwise AND operation on two integer values.

```jakt
let x = 0b1010 & 0b1100 // x is now 0b1000
```

#### Bitwise Or

The `|` operator can be used to perform a bitwise OR operation on two integer values.

```jakt
let x = 0b1010 | 0b1100 // x is now 0b1110
```

#### Bitwise Xor

The `^` operator can be used to perform a bitwise XOR operation on two integer values.

```jakt
let x = 0b1010 ^ 0b1100 // x is now 0b0110
```

#### Bitwise Negation

The `~` operator can be used to perform a bitwise NOT operation on an integer value.

```jakt
let x = ~0b1010 // x is now 0b0101
```

#### Bitwise Shift Left

The `<<` operator can be used to perform a bitwise shift left operation on an integer value.

```jakt
let x = 0b1010 << 2 // x is now 0b101000
```

#### Bitwise Shift Right

The `>>` operator can be used to perform a bitwise shift right operation on an integer value.

```jakt
let x = 0b1010 >> 2 // x is now 0b10
```

### Assignment

All assignment operators except `=` and `?=` are defined by traits similar to the operators they represent (e.g. `+=` corresponds to `AddAssign`, and has a `ThrowingAddAssign` counterpart).

#### Assign

The `=` operator can be used to assign a value to a variable.

```jakt
let x = 10
mut y = 20
y = x // y is now 10
```

#### Add Assign

The `+=` operator can be used to reassign a variable with the sum of its current value and another value.

```jakt
mut x = 10
x += 20 // x is now 30
```

This operator can be used to add and assign custom types:
```jakt
struct Point implements(AddAssign<Point>) {
    x: i32
    y: i32

    fn add_assign(mut this, anon other: Point) {
        .x += other.x
        .y += other.y
    }
}

mut a = Point(x: 1, y: 2)
let b = Point(x: 3, y: 4)
a += b // a is now Point(x: 4, y: 6)
```

#### Subtract Assign

The `-=` operator can be used to reassign a variable with the difference of its current value and another value.

```jakt
mut x = 20
x -= 10 // x is now 10
```

This operator can be used to subtract and assign custom types:
```jakt
struct Point implements(SubAssign<Point>) {
    x: i32
    y: i32

    fn subtract_assign(mut this, anon other: Point) {
        .x -= other.x
        .y -= other.y
    }
}

mut a = Point(x: 3, y: 4)
let b = Point(x: 1, y: 2)
a -= b // a is now Point(x: 2, y: 2)
```

#### Multiply Assign

The `*=` operator can be used to reassign a variable with the product of its current value and another value.

```jakt
mut x = 10
x *= 20 // x is now 200
```

This operator can be used to multiply and assign custom types:
```jakt
struct Point implements(MulAssign<i32>) {
    x: i32
    y: i32

    fn multiply_assign(mut this, anon v: i32) {
        .x *= v
        .y *= v
    }
}

mut a = Point(x: 3, y: 4)
a *= 2 // a is now Point(x: 6, y: 8)
```

#### Divide Assign

The `/=` operator can be used to reassign a variable with the quotient of its current value and another value.

```jakt
mut x = 20
x /= 10 // x is now 2
```

This operator can be used to divide and assign custom types:
```jakt
struct Point implements(DivAssign<i32>) {
    x: i32
    y: i32

    fn divide_assign(mut this, anon v: i32) {
        .x /= v
        .y /= v
    }
}

mut a = Point(x: 6, y: 8)
a /= 2 // a is now Point(x: 3, y: 4)
```

#### Modulo Assign

The `%=` operator can be used to reassign a variable with the remainder of its current value and another value.

```jakt
mut x = 20
x %= 10 // x is now 0
```

This operator can be used to calculate the modulo and assign to custom types:
```jakt
struct Point implements(ModuloAssign<i32>) {
    x: i32
    y: i32

    fn modulo_assign(mut this, anon v: i32) {
        .x %= v
        .y %= v
    }
}

mut a = Point(x: 6, y: 8)
a %= 3 // a is now Point(x: 0, y: 2)
```

#### Bitwise And Assign

The `&=` operator can be used to reassign a variable with the bitwise AND of its current value and another value.

```jakt
mut x = 0b1010
x &= 0b1100 // x is now 0b1000
```

This operator can be used to perform a bitwise AND and assign to custom types:
```jakt
struct Point implements(BitwiseAndAssign<i32>) {
    x: i32
    y: i32

    fn bitwise_and_assign(mut this, anon v: i32) {
        .x &= v
        .y &= v
    }
}

mut a = Point(x: 3, y: 4)
a &= 2 // a is now Point(x: 2, y: 0)
```

#### Bitwise Or Assign

The `|=` operator can be used to reassign a variable with the bitwise OR of its current value and another value.

```jakt
mut x = 0b1010
x |= 0b1100 // x is now 0b1110
```

This operator can be used to perform a bitwise OR and assign to custom types:
```jakt
struct Point implements(BitwiseOrAssign<i32>) {
    x: i32
    y: i32

    fn bitwise_or_assign(mut this, anon v: i32) {
        .x |= v
        .y |= v
    }
}

mut a = Point(x: 3, y: 4)
a |= 2 // a is now Point(x: 3, y: 6)
```

#### Bitwise Xor Assign

The `^=` operator can be used to reassign a variable with the bitwise XOR of its current value and another value.

```jakt
mut x = 0b1010
x ^= 0b1100 // x is now 0b0110
```

This operator can be used to perform a bitwise XOR and assign to custom types:
```jakt
struct Point implements(BitwiseXorAssign<i32>) {
    x: i32
    y: i32

    fn bitwise_xor_assign(mut this, anon v: i32) {
        .x ^= v
        .y ^= v
    }
}

mut a = Point(x: 3, y: 4)
a ^= 2 // a is now Point(x: 1, y: 6)
```

#### Bitwise Shift Left Assign

The `<<=` operator can be used to reassign a variable with the bitwise shift left of its current value by another value.

```jakt
mut x = 0b1010
x <<= 2 // x is now 0b101000
```

This operator can be used to perform a bitwise shift left and assign to custom types:
```jakt
struct Point implements(BitwiseShiftLeftAssign<i32>) {
    x: i32
    y: i32

    fn bitwise_shift_left_assign(mut this, anon v: i32) {
        .x <<= v
        .y <<= v
    }
}

mut a = Point(x: 3, y: 4)
a <<= 2 // a is now Point(x: 12, y: 16)
```

#### Bitwise Shift Right Assign

The `>>=` operator can be used to reassign a variable with the bitwise shift right of its current value by another value.

```jakt
mut x = 0b1010
x >>= 2 // x is now 0b10
```

This operator can be used to perform a bitwise shift right and assign to custom types:
```jakt
struct Point implements(BitwiseShiftRightAssign<i32>) {
    x: i32
    y: i32

    fn bitwise_shift_right_assign(mut this, anon v: i32) {
        .x >>= v
        .y >>= v
    }
}

mut a = Point(x: 3, y: 4)
a >>= 2 // a is now Point(x: 0, y: 1)
```

#### Null Coalescing Assign

The `?=` operator can be used to assign a value to a variable if the variable is `None`.

```jakt
mut x: i32? = None
x ?= 10 // x is now 10
```

### Other

#### Null Coalescing

The `??` operator can be used to unwrap an optional value with a default value if the optional is `None`.

```jakt
let x: i32? = None
let y = x ?? 5 // y is now 5
```

#### Reflect

The `reflect` operator can be used in a comptime context to get a description of a given type.

This operator results in a [`Reflect::Type`](standard-library.md#reflect-type) value that can be used to get information about the type.

Note that static reflection is still a work in progress, and the API is subject to change.

```jakt
let x = reflect i32 // x is now Reflect::Type::I32
```

#### Is

The `is` operator has two uses:
1. To check if an enum value is of a specific variant, and to extract its fields if it is.
2. To check if an instance of a class is of a specific concrete type.

```jakt
// (1)
enum Foo { A, B(i32) }

let x: Foo = magic()
if x is B(y) {
    println("x is B with value {}", y)
}

// (2)
class Base {}
class Derived1: Base {}
class Derived2: Base {}

let x: Base = magic()
if x is Derived1 {
    println("x is Derived1")
} else if x is Derived2 {
    println("x is Derived2")
}
```

Note that the first variant of the `is` operator can also be used on `Optional` types with variants `None` and `Some(value)`.

#### As

The `as` operator can be used to explicitly cast a value to a different type.
There are two forms of the `as` operator:
- `as!` can be used to perform a checked cast, which will assert if the cast fails; it can also be used to provide a type context for type inference.
- `as?` can be used to perform a checked cast that returns an optional value if the cast fails.

```jakt
let x: i32 = 10
let y = x as! i64 // y is now 10i64

let z: i32 = -10
let w = z as? u32 // w is now None
```

#### Range

The `..` operator can be used to create a range of values, either end of the range can be omitted (to create an open range).

```jakt
let x = 1..10 // x is now a range from 1 to 10
for i in x {
    println(i)
}
```

#### Index

The `[]` operator can be used to access elements of a collection by index.

```jakt
let x = [1, 2, 3]
let y = x[1] // y is now 2
```

This operator is currently not defined by a trait, and is implemented as a built-in operator, as such it is not extensible (at the moment).

#### Member Access

The `.` operator can be used to access members of a struct, class or tuple.

```jakt
struct Point {
    x: i32
    y: i32
}

let p = Point(x: 1, y: 2)
let x = p.x // x is now 1
```

This operator cannot be overloaded, and is not defined by a trait.

#### Comptime Index

The `.[]` operator can be used to perform member access using a comptime value.

```jakt
struct Point {
    x: i32
    y: i32
}

let p = Point(x: 1, y: 2)
let x = p.["x"] // x is now 1
```

This operator can only perform member access and tuple indexing, and cannot be overloaded.
