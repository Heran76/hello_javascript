// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.

function sum(a, b) {
    return a + b
}
console.log("***** Ejercicio 1 *******")
console.log(sum(70,6))
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

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
function countVowels(str) {
    let vowels = "aeiouáéíóú"
    let count = 0
    let lowerCaseStr = str.toLowerCase()
    for (let char of lowerCaseStr) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
console.log("***** Ejercicio 3 *****")
console.log("Hola ¿Como estas? tiene "+ countVowels("Hola, ¿cómo estás?")+" vocoles"); // 6
console.log(countVowels("Programación"));      // 5
console.log(countVowels("12345"));             // 0
console.log(countVowels("HELLO"));             // 2



// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con el strings en mayúsculas.
function toUpperCaserArray(strings){
    let upperCaseStrings = []
    for(let i = 0; i < strings.length; i++){
        upperCaseStrings.push(strings[i].toUpperCase());
        return upperCaseStrings
    }
}
let strings = ["holacaracola"];
console.log("***** Ejercicio 4 *****");
console.log(toUpperCaserArray(strings));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.
function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false + " No es un número primo"
        }
    }
    return true + " Número primo"
}
console.log("***** Ejercicio 5 *****");
let num = 4;
console.log("El número introducido es "+isPrime(num));