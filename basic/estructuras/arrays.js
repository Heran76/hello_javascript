//Arrays o Matrices
/*
Vamos a explorar el uso de arrays en Javascript, una extructura de datos
fundamental que permite almacenar multiplies valores en una sola variable
los arrays son muy flexibles y se utilizan para manejar listas de datos 
como números, cadenas de texto o incluso objetos, los arrays te permiten
agregar, eliminar, acceder y modificar elementos fácilmente, con ellos
podrás organizar y manipular colecciones de datos de manera eficiente.
*/
//Declaración
let myArray = []
let myArray2 = new Array()
console.log("*****[Declaración]******")
console.log(myArray)
console.log(myArray2)

//inicialización 
myArray =[4]
myArray2 = new Array(4);
console.log("*****[inicialización]******")
console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)
console.log("*****[inicialización.2]******")
console.log(myArray)
console.log(myArray2)

myArray = ["Antonio", "Heredia", "heran76", 76, true]
myArray2 = new Array("Antonio", "Heredia", "Heran76", 76, true)
console.log("*****[inicialización.3]******")
console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Antonio"
// myArray2[0] = "Heredia"
myArray2[1] = "Heran76"
myArray2[4] = "Heran76"
console.log("*****[inicialización.4]******")
console.log(myArray2)

myArray = []
myArray[2] = "Antonio"
// myArray[0] = "Heran76"
myArray[1] = "Heran76"
console.log("*****[inicialización.5]******")
console.log(myArray)

//Métodos comunes

myArray = []

// push y pop

myArray.push("Antonio")
myArray.push("Heredia")
myArray.push("Heran76")
myArray.push(76)
console.log("*****[Métodos.push]******")
console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()
console.log("*****[Métodos.pop]******")
console.log(myArray)

// shift y unshift
console.log("*****[shift]******")
console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Antonio", "Heran76")
console.log("*****[Unshif]******")
console.log(myArray)

// length
console.log("*****[Legth]******")
console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log("*****[Clear]******")
console.log(myArray)

// slice

myArray = ["Antonio", "Heredia", "Heran76", 76, true]

let myNewArray = myArray.slice(1, 3)
console.log("*****[Slice]******")
console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Antonio", "Heredia", "Morante", 76, true]

myArray.splice(1, 2, "Nueva entrada")
console.log("*****[Splice]******")
console.log(myArray)

