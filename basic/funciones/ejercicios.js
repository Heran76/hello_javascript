// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.

function sum(a, b) {
    return a + b
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
console.log("***** Ejercicio 2 *****")
function findMax(numbers) {
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}
// Definimos el array de prueba
const numbers = [3, 7, -2, 10, 5, 1, 8];

// Llamamos a la función y almacenamos el resultado
const maxNumber = findMax(numbers);

// Mostramos el resultado en la consola
console.log(`El mayor número del array es: ${maxNumber}`);
