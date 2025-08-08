//Set
/*
Un SET es una estructura de datos que te permite almacenar valores únicos
a diferencia de los arrays, un set admite duplicados, lo que lo hace ideal
para casos donde necesites garanatizar que todos los elementos de una colección
sean distintos.
*/
//declaración
let mySet = new Set()

console.log(mySet)
// Inicialización

mySet = new Set(["Antonio", "Heredia", "Heran76", 76, true, "heran76@gmail.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://portfolioantonioheredia.netlify.app/")

console.log(mySet)

mySet.delete("https://portfolioantonioheredia.netlify.app/")

console.log(mySet)

console.log(mySet.delete("Antonio"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Heredia"))
console.log(mySet.has("Antonio"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("heran76@gmail.com")
//mySet.add("heran76@gmail.com")
//.add("heran76@gmail.com")
//mySet.add("heran76@gmail.com")
console.log(mySet)
