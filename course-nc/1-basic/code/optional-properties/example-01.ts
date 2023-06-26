
type Hero = {
    //readonly id: number,
    name: string,
    age: number,
    isActive?: boolean  // Agrego el simbolo ? para decirle que este tipo es opcional
}

// Use 1
// En este caso no uso isActive y no muestra error
function createHero1( hero: Hero ): Hero {
    const { name, age } = hero

    return { name, age };
}


// Use 2
// En este caso si lo uso
function createHero2(name: string, age: number, isActive: boolean): Hero {
    return { name, age, isActive }
}

const captainAmerica = createHero2('Captain America', 200, true)
console.log(`Hero: Name: ${captainAmerica.name} Age: ${captainAmerica.age} Status: ${captainAmerica.isActive}`)