/*
Maps:
 Un Map es una extructura de datos que te permite almacenar pares clave-valor
 Las claves pueden ser de cualquier tipo, esto hace que los Maps sean muy flexibles
 y robustos.
*/
//Declaración
let myMap = new Map();
console.log(myMap)

//inicialización

myMap = new Map([
["Nombre", "Antonio"],
["Correo","heran76@gmail.com"],
["Edad", 48]
])
console.log(myMap)

//Métodos y propiedades
//SET con set podemos añadir nuevo campo:valor ó midificar el valor de un campo
myMap.set("alias","Heran76")
myMap.set("Nombre","Antonio Heredia")
console.log(myMap)

//get con el método get muestra el valor de la key que le pasamos por parámetro, si no exite muestra undifine
console.log("*****[get]*****") 
console.log(myMap.get("Nombre"))
console.log(myMap.get("apellidos"))

//has devuelve true si la clave existe y false si no exite
console.log("******[has]******")
console.log(myMap.has("apellido"))
console.log(myMap.get("edad"))

//delete
myMap.delete("Correo")
console.log("*****[delete]*****")
console.log(myMap)

//claves, valores y entradas
console.log("*****[claves, valores, entradas]******")
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

//Tamaño size
console.log("*****[size]******")
console.log(myMap.size)
// borrar 

myMap.clear() 
console.log("*****[Borrar]*****")
console.log(myMap)
