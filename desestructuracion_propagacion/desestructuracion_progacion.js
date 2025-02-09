/*
La desestructuración en JavaScript es una sintaxis que permite extraer valores de arrays o propiedades de objetos en variables individuales de manera más concisa.

Ejemplos:
Arrays:

javascript
Copy
const numeros = [1, 2, 3];
const [a, b, c] = numeros;
console.log(a); // 1
console.log(b); // 2
Objetos:

javascript
Copy
const persona = { nombre: 'Juan', edad: 30 };
const { nombre, edad } = persona;
console.log(nombre); // 'Juan'
console.log(edad); // 30
Es útil para simplificar el acceso a datos en estructuras complejas.
*/
let myArray = [1, 2, 3, 4]

let person = {
    name: "Antonio",
    age: 37,
    alias: "Herandev"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// DesestructuraciÃ³n

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)