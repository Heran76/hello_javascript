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