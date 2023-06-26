
type Hero = {
    id: number
    name: string
    age: number
    isActive: boolean
}

const hero: Hero = {
    id: 1,
    name: 'Andres Giraldo',
    age: 44,
    isActive: false
}


// Al agregar dos veces el simbolo ?? le estamos diciendo que el valor por defecto es true
hero.isActive ?? true