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