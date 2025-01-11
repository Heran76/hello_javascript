//Ejercicios Condicionales

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Antonio";
if(myName == "Antonio"){
    console.log("Ejercicio 1")
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.
let user = "admin"
let password = "1234"
if(user==="admin"&&password==="1234"){
    console.log("Ejercicio 2")
    console.log("Acceso perdmitido")
}else{
    console.log("Ejercicio 2")
    console.log("Acceso denegado")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.
let number = 3
if(number > 0){
    console.log(`el ${number} es positivo`)
}else if(number < 0){
    console.log("El numero es negativo")
}else{
    console.log("El numero es cero")
}
