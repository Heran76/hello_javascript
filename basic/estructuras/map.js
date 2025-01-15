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

