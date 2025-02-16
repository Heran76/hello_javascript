// 1. Crea una clase que reciba dos propiedades.
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

// 2. Añade un método a la clase que utilice las propiedades.
greet() {
    console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`)
}
