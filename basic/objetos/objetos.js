//Objects -- 
/*
Los objetos son extructuras de datos que permiten almacenar valores como
pares clave : valor, lo que te permite representar entidades complejas y organizar
información de manera más clara. En javascript, casi todo es un objeto o se puede
tratar como un objeto. lo que convierte a este concepot en una pieza clave del lenguaje
los objetos nos permiten modelar datos del mundo real, asi como contener tanto propiedad valor como metedos ( funciones)

*/
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
//añadir con la nomenclatura del 
person.email = "heran76@gmail.com"
person["age"] = 37 //aqui hemos utilizado corchetes para añadir
console.log(person)

//Métodos (funciones)
let person2 = {
    age : 49,
    name: "Marcos",
    walk : function(){
        console.log(`${this.name}`)
        console.log("La persona camina")
    }
}

person2.walk();
// Anidación de objetos

let person3 = {
    name: "Heran",
    age: 48,

    alias: "heranDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 3,
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()
// Igualdad de objetos

let person4 = {
    name: "Antonio Heredia",
    alias: "Heran76",
    email: "Herandev@gmail.com",
    age: 49
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

//iteración
for(let i in person4){
    console.log(i+": "+person4[i])
}
