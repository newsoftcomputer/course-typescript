
function createAddress() {
    return {
        planet: 'Earth',
        city: 'Atlanta'
    }
}

type Address = ReturnType<typeof createAddress>