// 1. Crea una clase que reciba dos propiedades.
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

// 2. AÃ±ade un método a la clase que utilice las propiedades.

       greet() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} aÃ±os`)
    }

    // 4. Añade un método estático a la primera clase.

    static welcome() {
        console.log("Hola, soy un método estático de esta clase")
    }
}
