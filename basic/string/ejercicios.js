//ejercicios String
// 1. Concatena dos cadenas de texto.
let string1 = "Hello";
let string2 = "World";
let concatenated = string1 + " " + string2;
console.log("*** Ejercicio 1 ****")
console.log(concatenated)

// 2. Muestra la longitud de una cadena de texto.

let mystring = "Hello World"
console.log("*** Ejercicio 2 ****")
console.log(mystring.length)

// 3. Muestra el primer y últtimo caracter de un string.
console.log("*** Ejercicio 3 ****")
console.log(mystring[0])
console.log(mystring[mystring.length - 1])
// 4. Convierte a mayásculas y minúsculas un string.
console.log("*** Ejercicio 4 ****")
console.log(mystring.toUpperCase())
console.log(mystring.toLowerCase())

// 5. Crea una cadena de texto en varias lí­neas.

let multilineString = `Esta una
cadena de texto
creada en
varias líneas`
console.log("*** Ejercicio 5 ****")
console.log(multilineString)
// 6. Interpola el valor de una variable en un string.

let language = "JavaScript"
let interpolatedString = `Estoy aprendiendo ${language}`
console.log("*** Ejercicio 6 ****")
console.log(interpolatedString)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

let stringWithSpaces = "Mi nombre es Antonio Heredia"
let stringWithHyphens = stringWithSpaces.replace(/ /g, "-")
console.log("*** Ejercicio 7 ****")
console.log(stringWithHyphens)

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

let sentence = "Me gusta programar en JavaScript"
console.log("*** Ejercicio 8 ****")
console.log(sentence.includes("JavaScript"))

// 9. Comprueba si dos strings son iguales.

let string3 = "hola"
let string4 = 'hola'
console.log("*** Ejercicio 9 ****")
console.log(string3 === string4)

