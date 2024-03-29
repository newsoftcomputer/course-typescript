
# DATA TYPES

# Basic Types

    - For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support the same types as you would expect in JavaScript, with an extra enumeration type thrown in to help things along.

<br>



## Boolean
    - The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.

    let isDone: boolean = false;Try

<br>


## Number

    As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;Try

<br>


## String

    Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.

    let color: string = "blue";
    color = 'red';Try
    You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.

    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.

    I'll be ${age + 1} years old next month.`;Try
    This is equivalent to declaring sentence like so:

    let sentence: string =
    "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";Try

<br>

## Array

    TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

    let list: number[] = [1, 2, 3];Try
    The second way uses a generic array type, Array<elemType>:

    let list: Array<number> = [1, 2, 3];Try

<br>


## Tuple
    
    - Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    x = [10, "hello"]; // Error
    Type 'number' is not assignable to type 'string'.
    Type 'string' is not assignable to type 'number'.
    Try
    When accessing an element with a known index, the correct type is retrieved:

    // OK
    console.log(x[0].substring(1));

    console.log(x[1].substring(1));
    Property 'substring' does not exist on type 'number'.
    Try
    Accessing an element outside the set of known indices fails with an error:

    x[3] = "world";
    Tuple type '[string, number]' of length '2' has no element at index '3'.

    console.log(x[5].toString());
    Object is possibly 'undefined'.
    Tuple type '[string, number]' of length '2' has no element at index '5'.
    Try

<br>


## Enum
    
    - A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

    enum Color {
    Red,
    Green,
    Blue,
    }
    let c: Color = Color.Green;Try
    By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:

    enum Color {
    Red = 1,
    Green,
    Blue,
    }
    let c: Color = Color.Green;Try
    Or, even manually set all the values in the enum:

    enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
    }
    let c: Color = Color.Green;Try
    A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:

    enum Color {
    Red = 1,
    Green,
    Blue,
    }
    let colorName: string = Color[2];

    // Displays 'Green'
    console.log(colorName);Try

<br>


## Unknown
    
    - We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API. In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.

    let notSure: unknown = 4;
    notSure = "maybe a string instead";

    // OK, definitely a boolean
    notSure = false;Try
    If you have a variable with an unknown type, you can narrow it to something more specific by doing typeof checks, comparison checks, or more advanced type guards that will be discussed in a later chapter:

    declare const maybe: unknown;
    // 'maybe' could be a string, object, boolean, undefined, or other types
    const aNumber: number = maybe;
    Type 'unknown' is not assignable to type 'number'.

    if (maybe === true) {
    // TypeScript knows that maybe is a boolean now
    const aBoolean: boolean = maybe;
    // So, it cannot be a string
    const aString: string = maybe;
    Type 'boolean' is not assignable to type 'string'.
    }

    if (typeof maybe === "string") {
    // TypeScript knows that maybe is a string
    const aString: string = maybe;
    // So, it cannot be a boolean
    const aBoolean: boolean = maybe;
    Type 'string' is not assignable to type 'boolean'.
    }Try

<br>


## Any

    - In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type:

    declare function getValue(key: string): any;
    // OK, return value of 'getValue' is not checked
    const str: string = getValue("myString");Try
    The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.

    Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist. These properties include functions and TypeScript will not check their existence or type:

    let looselyTyped: any = 4;
    // OK, ifItExists might exist at runtime
    looselyTyped.ifItExists();
    // OK, toFixed exists (but the compiler doesn't check)
    looselyTyped.toFixed();

    let strictlyTyped: unknown = 4;
    strictlyTyped.toFixed();
    Object is of type 'unknown'.
    Try
    The any will continue to propagate through your objects:

    let looselyTyped: any = {};
    let d = looselyTyped.a.b.c.d;
    //  ^ = let d: anyTry
    After all, remember that all the convenience of any comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.

<br>


## Void

    - void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

    function warnUser(): void {
    console.log("This is my warning message");
    }Try
    Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:

    let unusable: void = undefined;
    // OK if `--strictNullChecks` is not given
    unusable = null;Try

<br>


## Null and Undefined
    
    - In TypeScript, both undefined and null actually have their types named undefined and null respectively. Much like void, they’re not extremely useful on their own:

    // Not much else we can assign to these variables!
    let u: undefined = undefined;
    let n: null = null;Try
    By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.

    However, when using the --strictNullChecks flag, null and undefined are only assignable to unknown, any and their respective types (the one exception being that undefined is also assignable to void). This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined.

    Union types are an advanced topic that we’ll cover in a later chapter.

    As a note: we encourage the use of --strictNullChecks when possible, but for the purposes of this handbook, we will assume it is turned off.

<br>


## Never

    The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.

    The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

    Some examples of functions returning never:

    // Function returning never must not have a reachable end point
    function error(message: string): never {
    throw new Error(message);
    }

    // Inferred return type is never
    function fail() {
    return error("Something failed");
    }

    // Function returning never must not have a reachable end point
    function infiniteLoop(): never {
    while (true) {}
    }Try

<br>


## Object

    - Object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.

    With object type, APIs like Object.create can be better represented. For example:

    declare function create(o: object | null): void;

    // OK
    create({ prop: 0 });
    create(null);

    create(42);
    Argument of type '42' is not assignable to parameter of type 'object | null'.
    create("string");
    Argument of type '"string"' is not assignable to parameter of type 'object | null'.
    create(false);
    Argument of type 'false' is not assignable to parameter of type 'object | null'.
    create(undefined);
    Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
    Try
    Generally, you won’t need to use this.

<br>


## Type assertions
    
    - Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually, this will happen when you know the type of some entity could be more specific than its current type.

    Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data. It has no runtime impact and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

    Type assertions have two forms.

    One is the as-syntax:

    let someValue: unknown = "this is a string";

    let strLength: number = (someValue as string).length;Try
    The other version is the “angle-bracket” syntax:

    let someValue: unknown = "this is a string";

    let strLength: number = (<string>someValue).length;Try
    The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.

    A note about let
    You may have noticed that so far, we’ve been using the let keyword instead of JavaScript’s var keyword which you might be more familiar with. The let keyword is actually a newer JavaScript construct that TypeScript makes available. You can read in the Handbook Reference on Variable Declarations more about how let and const fix a lot of the problems with var.

    About Number, String, Boolean, Symbol and Object
    It can be tempting to think that the types Number, String, Boolean, Symbol, or Object are the same as the lowercase versions recommended above. These types do not refer to the language primitives however, and almost never should be used as a type.

    function reverse(s: String): String {
    return s.split("").reverse().join("");
    }

    reverse("hello world");Try
    Instead, use the types number, string, boolean, object and symbol.

    function reverse(s: string): string {
    return s.split("").reverse().join("");
    }

    reverse("hello world");




