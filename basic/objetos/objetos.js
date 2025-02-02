//Objects -- objetos
//sintaxis
//objecto_literal
let person = {
    name : "Antonio",
    age: 37,
    alias : "heran76"
}
//acceso propiedad notación o nomenclatura del punto

console.log(person.name)
//notacion corchete
console.log(person["name"])

//modificacion de propiedad
person.name = "Antonio Heredia"
console.log(person.name)

//eleminar propiedad con la palabra reservdada delete acontinuacion nombre obejto y nomenclatura del punto
delete person.age
console.log(person)
//añadir con la nomenclatura del punto
