
// Creando un tipo de un objecto con la propiedad typeof

const address = {
    planet: 'Earth',
    city: 'Atlanta'
}

// Al usar typeof del objeto address lo toma como un tipo 
type Address = typeof address

// Y ademas obliga a usarlo como un tipo
const addressTwitch: Address = {
    planet: 'Earth',
    city: 'Buga'
}