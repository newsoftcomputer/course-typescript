
// FUNCIONES NO PURAS

// Ej1: Funcion no pura
/* 
Esta accediendo a constantes externas que pueden ser modificadas y afectar el entorno

Ejemplo de Acciones, Elementos o Funciones impuras
- Compartir una variable o estado ( Estado en comun - Por eso usar tecnologias con store de estados ).
- Random - Algo que genere un valor aleatorio es inpuro
- Algo que dependa de la fecha
- Al dependiendo del sistema de archivos
*/

let a = 10;
let b = 15;
function sumaInpura1() {
    let resultado = (a + b);
    return resultado;
}
console.log('Funcion no pura - Ejemplo 1 : ', sumaInpura1());


// Ej2: Funcion no pura
// Es inpura por que estamos usando el objeto console que es un objeto global de window
function sumaInpura2(numA, numB) {
    console.log('Funcion no pura - Ejemplo 1 :', numA + numB );
}
sumaInpura2(45, 5);


// Ej3: Funcion no pura
// Es inpura por que estamos usando el objeto random y la salida puede ser valores diferentes simpre que se ejecute
function sumaInpura2(numA, numB) {
    console.log('Funcion no pura - Ejemplo 1 :', numA + numB );
}
sumaInpura2(45, 5);


