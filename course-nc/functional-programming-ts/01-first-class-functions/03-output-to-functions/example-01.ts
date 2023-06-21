
// LAS FUNCIONES PUEDN RETORNAR O DAR SALIDA A OTRAS FUNCIONES

// Adaptado de la presentacion de Anjana Vakil
// Learning Funcional Programing with Javascript
// @ JSUncof 2016
// https://youtu.be/e-5obm1G_FY?t=9m24s



// Ejemplo calificador Adjetivo Sustantivo
function crearCalificador (adjetivo) {
    return function (sustantivo) {
        return `${adjetivo} ${sustantivo}`
    }
}

let calificativoSuper = crearCalificador('super')

let amigo = calificativoSuper('amigo')
console.log(amigo)

let pianista = calificativoSuper('pianista')
console.log(pianista)



// Ejemplo calificador Adjetivo Sustantivo simplificado y con arrow functions
const nounAdjective = (adjetivo) => {
    return (sustantivo) => `${adjetivo} ${sustantivo}`
}

const qualitySuper = nounAdjective('super') 

const friend = qualitySuper('friend')
console.info(friend)

const pianoMen = qualitySuper('Piano Men')
console.log(pianoMen)

