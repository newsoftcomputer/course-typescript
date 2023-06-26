
// Type Hero

type Hero = {
    //readonly id: number,
    name: string,
    age: number,
    isActive: boolean
}



// Use 1
function createHero1( hero: Hero ): Hero {
    const { name, age, isActive } = hero

    return { name, age, isActive };
}

const thor = createHero1({ name: 'Thor', age: 1500, isActive: true })
console.log(`Hero: Name: ${thor.name} Age: ${thor.age} Status: ${thor.isActive}`)


// Use 2
function createHero2(name: string, age: number, isActive: boolean): Hero {
    return { name, age, isActive }
}

const captainAmerica = createHero2('Captain America', 200, true)
console.log(`Hero: Name: ${captainAmerica.name} Age: ${captainAmerica.age} Status: ${captainAmerica.isActive}`)

