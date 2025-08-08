// Strings (cadenas de texto)

// Concatenación

let myName = "Antonio"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// MÃ©todos comunes

console.log(greeting.toUpperCase()) // MayÃºsculas
console.log(greeting.toLowerCase()) // MinÃºsculas
console.log(greeting.indexOf("Hola")) // Ãndice
console.log(greeting.indexOf("Antonio"))
console.log(greeting.indexOf("Heredia"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Antonio"))
console.log(greeting.includes("Heredia"))
console.log(greeting.slice(0, 10)) // SecciÃ³n
console.log(greeting.replace("Antonio", "Heredia")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias lÃ­neas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "A.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)
