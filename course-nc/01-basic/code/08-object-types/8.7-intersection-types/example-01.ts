
// Type Hero
type HeroBasic = {
    readonly id: number
    name: string
    age: number
    isActive?: boolean
}

type HeroDetails = {
    married?: boolean
    nationality?: string
}

// Aqui estamos haciendo la extension de tipos
// Estamos creando un tipo con base en otros dos
type Hero = HeroBasic & HeroDetails