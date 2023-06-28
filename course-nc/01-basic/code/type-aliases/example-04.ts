
// Type ID Crypto
type IDCrypto = `${string}-${string}-${string}-${string}-${string}`

// Type Hero
type Hero = {
    readonly id: IDCrypto
    name: string
    age: number
    isActive?: boolean
}

// Use 1
let hero: Hero = {
    id: crypto.randomUUID(),
    name: 'Marco',
    age: 4,
} 

// Use 2
let x = hero.isActive = true


// Use 3
function createHero1( hero: Hero ): Hero {
    const { id, name, age, isActive } = hero

    return { id, name, age, isActive };
}

const thor = createHero1({ id: crypto.randomUUID(), name: 'Thor', age: 1500, isActive: true })
console.log(`Hero: Name: ${thor.name} Age: ${thor.age} Status: ${thor.isActive}`)


// Use 2
function createHero2( id: IDCrypto, name: string, age: number, isActive: boolean ): Hero {
    return { id, name, age, isActive }
}

const captainAmerica = createHero2( crypto.randomUUID(), 'Captain America', 200, true )
console.log(`Hero: ID: ${captainAmerica.id} Name: ${captainAmerica.name} Age: ${captainAmerica.age} Status: ${captainAmerica.isActive}`)

