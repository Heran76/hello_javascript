//ejercicios
// 1. Crea un objeto con 3 propiedades.

let person = {
    name: "Antonio",
    age: 49,
    job: "Desarrollador"
}

// 2. Accede y muestra su valor.

console.log(person.name)

// 3. Agrega una nueva propiedad.

person.country = "España"
console.log(person.country)

// 4. Elimina una de las 3 primeras propiedades.

delete person.job
console.log(person)

// 5. Agrega una funciÃ³n e invÃ³cala.

person.greet = function () {
    console.log("Hola, mi nombre es " + this.name)
}
person.greet()

// 6. Itera las propiedades del objeto.

for (let key in person) {
    console.log(key + ": " + person[key])
}

// 7. Crea un objeto anidado.

let company = {
    name: "Antonio",
    address: {
        country: "Jaén",
        street: "Calle Herandev",
        number: 0
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas.

console.log(company.address.country)
console.log(company.address.street)
console.log(company.address.number)

// Con un bucle

for (let key in company.address) {
    console.log(key + ": " + company.address[key])
}

// 9. Comprueba si los dos objetos creados son iguales.

let person2 = {
    name: "Heredia",
    age: 49,
    country: "España"
}

let person3 = {
    name: "Morante",
    age: 37,
    country: "España"
}

console.log(person2 === person3) // false: las referencias no son iguales

function areObjectsEqual(obj1, obj2) {

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    // Comprobamos si tienen el mismo nÃºmero de propiedades
    if (keys1.length !== keys2.length) {
        return false
    }

    // Comprobamos si cada propiedad tiene el mismo valor
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

console.log(areObjectsEqual(person2, person3))


// 10. Comprueba si dos propiedades diferentes son iguales.

let isSameAgeAndCountry = person2.age === person3.country
console.log(isSameAgeAndCountry) 