
// Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:

class Base {
    k = 4;
}
   

class Derived extends Base {
    constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
      console.log(this.k);
    // 'super' must be called before accessing 'this' in the constructor of a derived class.
      super();
    }
}

// Forgetting to call super is an easy mistake to make in JavaScript, but TypeScript will tell you when it’s necessary.