// 1. Crea una clase que reciba dos propiedades.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 2. Añade un método a la clase que utilice las propiedades.
    greet() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
    // 4. Añade un método estático a la primera clase.

    static welcome() {
        console.log("Hola, soy un método estático de esta clase")
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función.
let person = new Person("Hernadev", 48);
console.log(person.name);  // Output: Hernadev
console.log(person.age);   // Output: 48
person.greet();            // Output: Hola, mi nombre es Hernadev y tengo 48 años.

// 5. Haz uso del método estático.

Person.welcome()
// 6. Crea una clase que haga uso de herencia.

class Employee extends Person {
    constructor(name, age, job) {
        super(name, age)
        this.job = job
    }

    work() {
        console.log(`${this.name} trabaja como ${this.job}`)
    }
}

let employee = new Employee("Antonio", 49, "Programador")
employee.greet()
employee.work()

// 7. Crea una clase que haga uso de getters y setters.

class Car {
    constructor(brand, model) {
        this._brand = brand
        this._model = model
    }

    get brand() {
        return this._brand
    }

    set brand(newBrand) {
        this._brand = newBrand
    }

    get model() {
        return this._model
    }

    set model(newModel) {
        this._model = newModel
    }
}
// 8. Modifica la clase con getters y setters para que use propiedades privadas.

class PrivateCar {
    #brand
    #model

    constructor(brand, model) {
        this.#brand = brand
        this.#model = model
    }

    get brand() {
        return this.#brand
    }

    set brand(newBrand) {
        this.#brand = newBrand
    }

    get model() {
        return this.#model
    }

    set model(newModel) {
        this.#model = newModel
    }
}
