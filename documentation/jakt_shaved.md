# Jakt Quick Reference

## Preprocessor

```jakt
// Comment to end of line
import foo                          // Import foo.jakt
import foo { bar }                  // Selectively import bar from foo
import foo as baz                   // Imported foo becomes baz
import extern c "myfile.h" { ... }  // Import C library from within search path
import extern "vector" { ... }      // Import C++ header "vector"
```

## Literals

```jakt
255, 0o377, 0xff            // Default (32-bit) integers (decimal, octal, hex)
-100i8, 240u8               // 8-bit (char) integers (signed, unsigned)
-2000i16, 30000u16          // 16-bit (short, int) integers (signed, unsigned)
-200000i32, 10000000u32     // 32-bit (long) integers (signed, unsigned)
-1i64, 1u64                 // 64-bit (long long) integers (signed, unsigned)
0.1, 42f32, 123_456.78f64   // Floating point numbers
0b1000000, 0b1011           // Binary literals
b'a'                        // Byte literal
c'a'                        // C character literal
'a'                         // Unicode code point literal
true, false                 // Only valid boolean (bool) states
```

## Declarations

```jakt
let foo = 10                // Immutable variable, inferred type
let foo:u8 = 255            // Immutable variable, type u8
mut foo:i32 = 12345         // Mutable variable, type i32
let b:bool = true           // Boolean variable (immutable), true or false
let x = [1, 2, 3]           // Array with 3 entries (immutable)
let v = [85; 3]             // Array with 3 entries, initialized to 85 (immutable)
mut x: [i32] = []           // Mutable empty array of type i32

enum Apple { GrannySmith }  // Apple is an enum type with a single constructor GrannySmith
enum SimpleWithType {       // Enum constructors can have independent types
    A(i32)
    B(x: u32, y: u32)
}
enum UnderlyingType: i32 {  // Enums can be declared with an underlying numeric type
    Zero
    One = 1
    ItsAllMadeUp = 10
}

let food: Apple = Apple::GrannySmith     // Assign enum value to variable
```

## Arrays

```jakt
mut x: [i32] = [1,2,3]
x[0]                                    // Arrays are zero indexed
x.insert(before_index: 0, value: 0i32)  // Insert before .size or existing index
for y in x {                            //
    println("{}",y)                     // Iteration using the iteration protocols
}                                       //    Iterable<T> and IntoIterator<T>
x.push(10i32)                           // Append to the end
let v = x.pop()                         // Retrieve and remove last entry
let q = x.contains(20i32)               // True/false search
let z = x[2..4]                         // New slice array from x
```

## Control flow

```jakt
{                           
    let x = 4                // Scope of x is from declaration to end of block
}
if x { a }                   // If x is true, evaluate a
else if y { b }              // If not x and y (optional, may be repeated)
else { c }                   // If not x and not y (optional)

mut i = 0
loop {                      // Easy loop
  if i == 5 {
    break
  }
  println("{}", i)          // 0, 1, 2, 3, 4
  i++
}

while x { a }               // Repeat a 0 or more times while x is true


{
  defer { println("b") }    // Execute contents of block upon leaving the lexical scope
  println("a")
}                           // Output is "a\nb\n"

break                       // Jump out of while, do, or for loop, or switch
return x                    // Return x from function to caller
```

## Functions

```jakt
fn f(x: i32, y: i32) -> i64       // f is a function taking two i32s and returning an i64
fn f()                            // f is a function taking no arguments
fn f(a: i32 = 0)                  // f() is equivalent to f(a: 0)

fn f() { statements }         // Function definition, as a block
fn f() -> i32 => 42           // Function definition, short "arrow" form
```

## Expressions

Operators are grouped by precedence, highest first. Unary operators and assignment evaluate right to left. All
others are left to right. Precedence does not affect order of evaluation, which is undefined. There are no run time
checks for arrays out of bounds, invalid pointers, etc.

```jakt
T::X                        // Name X defined in class T
N::X                        // Name X defined in namespace N
::X                         // Global name X

t.x                         // Member x of struct or class t
p-> x                       // Member x of struct or class pointed to by p
a[i]                        // i'th element of array a
f(x,y)                      // Call to function f with arguments x and y
T(x,y)                      // Object of class T initialized with x and y
x++                         // Add 1 to x, evaluates to original x (postfix)
x--                         // Subtract 1 from x, evaluates to original x
typeid(x)                   // Type of x
typeid(T)                   // Equals typeid(x) if x is a T
dynamic_cast< T>(x)         // Converts x to a T, checked at run time.
static_cast< T>(x)          // Converts x to a T, not checked
reinterpret_cast< T>(x)     // Interpret bits of x as a T
const_cast< T>(x)           // Converts x to same type T but not const

sizeof x                    // Number of bytes used to represent object x
sizeof(T)                   // Number of bytes to represent type T
++x                         // Add 1 to x, evaluates to new value (prefix)
--x                         // Subtract 1 from x, evaluates to new value
~x                          // Bitwise complement of x
!x                          // true if x is 0, else false (1 or 0 in C)
-x                          // Unary minus
+x                          // Unary plus (default)
&x                          // Address of x
*p                          // Contents of address p (*&x equals x)
new T                       // Address of newly allocated T object
new T(x, y)                 // Address of a T initialized with x, y
new T[x]                    // Address of allocated n-element array of T
delete p                    // Destroy and free object at address p
delete[] p                  // Destroy and free array of objects at p
(T) x                       // Convert x to T (obsolete, use .._cast<T>(x))

x * y                       // Multiply
x / y                       // Divide (integers round toward 0)
x % y                       // Modulo (result has sign of x)

x + y                       // Add, or \&x[y]
x - y                       // Subtract, or number of elements from *x to *y
x << y                      // x shifted y bits to left (x * pow(2, y))
x >> y                      // x shifted y bits to right (x / pow(2, y))

x < y                       // Less than
x <= y                      // Less than or equal to
x > y                       // Greater than
x >= y                      // Greater than or equal to

x & y                       // Bitwise and (3 & 6 is 2)
x ^ y                       // Bitwise exclusive or (3 ^ 6 is 5)
x | y                       // Bitwise or (3 | 6 is 7)
x && y                      // x and then y (evaluates y only if x (not 0))
x || y                      // x or else y (evaluates y only if x is false (0))
x = y                       // Assign y to x, returns new value of x
x += y                      // x = x + y, also -= *= /= <<= >>= &= |= ^=
x ? y : z                   // y if x is true (nonzero), else z
throw x                     // Throw exception, aborts if not caught
x , y                       // evaluates x and y, returns y (seldom used)
```

## Classes

```jakt
class T {                   // A new type
private:                    // Section accessible only to T's member functions
protected:                  // Also accessible to classes derived from T
public:                     // Accessible to all
    int x;                  // Member data
    void f();               // Member function
    void g() {return;}      // Inline member function
    void h() const;         // Does not modify any data members
    int operator+(int y);   // t+y means t.operator+(y)
    int operator-();        // -t means t.operator-()
    T(): x(1) {}            // Constructor with initialization list
    T(const T& t): x(t.x) {}// Copy constructor
    T& operator=(const T& t)
    {x=t.x; return *this; } // Assignment operator
    ~T();                   // Destructor (automatic cleanup routine)
    explicit T(int a);      // Allow t=T(3) but not t=3
    T(float x): T((int)x) {}// Delegate constructor to T(int)
    operator int() const
    {return x;}             // Allows int(t)
    friend void i();        // Global function i() has private access
    friend class U;         // Members of class U have private access
    static int y;           // Data shared by all T objects
    static void l();        // Shared code.  May access y but not x
    class Z {};             // Nested class T::Z
    typedef int V;          // T::V means int
};
void T::f() {               // Code for member function f of class T
    this->x = x;}           // this is address of self (means x=x;)
int T::y = 2;               // Initialization of static member (required)
T::l();                     // Call to static member
T t;                        // Create object t implicit call constructor
t.f();                      // Call method f on object t

struct T {                  // Equivalent to: class T { public:
  virtual void i();         // May be overridden at run time by derived class
  virtual void g()=0; };    // Must be overridden (pure virtual)
class U: public T {         // Derived class U inherits all members of base T
  public:
  void g(int) override; };  // Override method g
class V: private T {};      // Inherited members of T become private
class W: public T, public U {};
                            // Multiple inheritance
class X: public virtual T {};
                            // Classes derived from X have base T directly
```

All classes have a default copy constructor, assignment operator, and destructor, which perform the
corresponding operations on each data member and each base class as shown above. There is also a default no-argument
constructor (required to create arrays) if the class has no constructors. Constructors, assignment, and
destructors do not inherit.

## Templates

```jakt
template <class T> T f(T t);// Overload f for all types
template <class T> class X {// Class with type parameter T
  X(T t); };                // A constructor
template <class T> X<T>::X(T t) {}
                            // Definition of constructor
X<int> x(3);                // An object of type "X of int"
template <class T, class U=T, int n=0>
                            // Template with default parameters
```

## Namespaces

```jakt
namespace N {class T {};}   // Hide name T
N::T t;                     // Use name T in namespace N
using namespace N;          // Make T visible without N::
```

## Strings

```jakt
#include <string>         // Include string (std namespace)
string s1, s2="hello";    // Create strings
s1.size(), s2.size();     // Number of characters: 0, 5
s1 += s2 + ' ' + "world"; // Concatenation
s1 == "hello world"       // Comparison, also <, >, !=, etc.
s1[0];                    // 'h'
s1.substr(m, n);          // Substring of size n starting at s1[m]
s1.c_str();               // Convert to const char*
s1 = to_string(12.05);    // Converts number to string
getline(cin, s);          // Read line ending in '\n'
```

Broad content ideas based on the <a href=https://github.com/mortennobel/cpp-cheatsheet>C++ cheatsheet</a> by Morten Nobel-Jørgensen.
