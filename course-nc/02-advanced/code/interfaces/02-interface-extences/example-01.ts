
// EXTENCES INTERFACE 

// Interface IceCream
interface IceCream {
    flavor: string
    scoops: number
    instructions?: string
}

// Extences Interface
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry'
    nuts?: boolean
    whippedCream?: boolean
    instructions?: string
}

// Way of use 1
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true,
}
 
console.log(myIceCream.flavor);

// Way of use 2
function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
 }
 
 console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));


