function myfunc(){
    console.log("Hola caracola")
}

myfunc()
console.log("******")
for(let i = 0; i < 5; i++){
myfunc()
}

function myFuctionParamets(name){
    console.log("********")
    console.log(`Hola, ${name}`)
} 

myFuctionParamets("Antonio")

//Parametros
function suma(a, b){
    console.log("*****Suma******")
    console.log("La suma es  : "+(a+b))
}
suma(40,2)