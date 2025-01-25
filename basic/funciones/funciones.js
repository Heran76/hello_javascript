// funciones
/*
Las funciones nos permiten agrupar bloques de código reutilizables, aquellos
que nos ayudan a realizar tareas especificas de manera eficiente y organizada. 
Así podremos escribir código modular, maás limpio y fácil de mantener
*/

function myFun(){
    console.log("Hello Fuction")
}
myFun()
console.log("**********")
for(let i = 0; i<5; i++){
    myFun()
}

//con parámetros

function  myfuname(name){
    console.log(`Hello, ${name}`);
}
myfuname("Antonio")

// funciones anónimas hay qye asignarla a una constante o variable

const myfun2 = function(name){
    console.log(`Hello, &{name}`)
}
myfun2("Antonio Heredia") //atraves del valor de la variable accedemeos

//Arrow funciones
const myfun3 = (name)=>{
 console.log(`Hello ${name}`)
}
myfun3("Antonio Heredia Morante")

//Parámetros
function sum(a,b){
    console.log(a+b)
}
sum(40,2)
sum(42) //error NAN
sum() //error NAN
const myFunc4 = (name) => console.log(`Hola, ${name}!`)
myFunc4("Antonio Heredia")

function defaultsum(a=0,b=0){
    console.log(a+b);
}
// por defecto
defaultsum();
defaultsum(76);
defaultsum(70,6);
defaultsum(b=5);

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach

let myArray = [1, 2, 3, 4]

let mySet = new Set(["Antonio", "Heredia", "Heran76", 76, true, "Heran76@gmail.com"])

let myMap = new Map([
    ["name", "Antonio"],
    ["email", "Antonio heredia"],
    ["age", 76]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))