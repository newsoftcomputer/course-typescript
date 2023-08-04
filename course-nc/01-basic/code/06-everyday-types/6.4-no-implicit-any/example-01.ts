
/*
In some cases where no type annotations are present, TypeScript will fall back to a 
type of any for a variable when it cannot infer the type.

This can cause some errors to be missed, for example:
*/

function fn(s) {
    // No error?
    console.log(s.subtr(3));
}
fn(42);

// Turning on noImplicitAny however TypeScript will issue an error whenever it would have inferred any:

function fn(s) {
    Parameter 's' implicitly has an 'any' type.
      console.log(s.subtr(3));
}