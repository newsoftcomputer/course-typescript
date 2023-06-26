
type HeroProperties = {
    isActive: boolean,
    addresss: {
        planet: string,
        city: string,
    }
}

const addressHero: HeroProperties['addresss'] = {
    planet: 'Earth',
    city: 'Atlanta'
}