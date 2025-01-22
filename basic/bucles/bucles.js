//bucles o loops
/*
los bucles permiten recorrer colecciones de datos, realizar
tareas repetitivas y ejecutar acciones hasta que se cumplan
una condición especifica. Con los buclues, puedes automatizar
tareas repetitivas.ahorrando tiempo y evitando código redundante
básicamente, permiten ejecutar un bloque de codigo repetidamente
*/
for (let i = 0; i <=5; i++){
    console.log("Hello World")
}
console.log("*********************")

const numbers = [1,2,3,4,5]

for (let i = 0; i < numbers.length; i++){
    console.log(`Elemento : ${numbers[i]}`)
}
// while

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito
// while(true) {
// }

// do while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of

let myArray = [1, 2, 3, 4]

let mySet = new Set(["Antonio", "Heredia", "Heran76", 48, true, "heran76@gmail.com"])

let myMap = new Map([
    ["name", "Antonio"],
    ["email", "Heran76@gmail.com"],
    ["age", 48]
])

let myString = "¡Hola, JavaScript!"

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}
// break y continue
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}