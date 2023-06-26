
type Hero = {
    readonly id?: number     // optional property
    name: string
    age: number
    isActive?: boolean  // optional property
}

// Use 1
function createHero1( hero: Hero ): Hero {
    const { id, name, age, isActive } = hero

    return { id, name, age, isActive };
}

const thor = createHero1({ id: 1, name: 'Thor', age: 1500, isActive: true })
console.log(`Hero: Name: ${thor.id} Name: ${thor.name} Age: ${thor.age} Status: ${thor.isActive}`)

// El encadenamiento opcional se produce cuando tengo una propiedad opcional o (optional properties) en este caso id
// Lo que sucede es que automaticamente le pone a id el simbolo ?
// Funciona como un condicional, Si id tiene un valor ejecuta esa linea. Si no, no la ejecuta
// Se hace un condicional de forma mas simple y sencilla
thor.id?.toString()