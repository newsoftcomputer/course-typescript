
/*
PURE FUNTIONS

    - Las funciones puras son usadas en el paradigma funcional
    - Dada la misma entrada siempre devuelve la misma salida
*/

// Funcion pura
/*
Es pura porque no esta accediendo a variables fuera de su metodo o funcion y no se esta usando 
objetos globales de window dentro de ella
*/
function sumaPura(num1, num2) { 
    let resultado = num1 + num2;
    return resultado;
}
console.log(`Funcion pura - Ejemplo 1: ${sumaPura(987, 6846)}`)