
/*
The Symbol Type
JavaScript added a primitive type in ES6: the symbol. 
Different from other primitive types, the symbol type does not have a literal form.

- Un Symbol es de uso privado e interno en el desarrollo

- Generalmente se usan como caracteristicas de objectos o como una propiedad

- No se usa new para declarar, Se usa su constructor Symbol()

- Los Symbols nos permiten crear idenficadores unicos o de referencia

- Se pueden usar de manera global

- Seles le puede asignar etiquetas Symbol('etiqueta-01') y ser llamadas desde esta

- Aceptan Numbers Or String en sus etiquetas

- Evitan coliciones entre propiedades de objectos

- Como buena practica se deben crear como constantes (Por nunca deben cambiar)
*/


// Whitout Symbols
let id1 = 'Hola'
let id2 = 'Hola'
console.log(id1 === id2) // out: true

// Los Symbols crean identificadores unicos y si los comparamos entre ellos nunca son iguales
console.log(Symbol() === Symbol()); // out: false

// Symbols
const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2) // out: false

// Symbols with labels
const s3 = Symbol('s-s3')
console.log(s3) // out: s-s3



