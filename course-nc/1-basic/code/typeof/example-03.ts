
// Creando un tipo de una funcion con la propiedad typeof & el utility ReturnType

function createAddress() {
    return {
        planet: 'Earth',
        city: 'Atlanta'
    }
}

type Address = ReturnType<typeof createAddress>