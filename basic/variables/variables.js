//variables
/*
En JavaScript, una variable es un contenedor que almacena datos que pueden ser reutilizados o manipulados en el programa. Es como una caja donde guardas algo para usarlo más tarde.

Definición de variables
Las variables se definen usando tres palabras clave principales:

var:

Se usaba en versiones antiguas de JavaScript.
Tiene un alcance global o de función.
No se recomienda usarlo hoy en día porque puede causar problemas de sobreescritura.
javascript
Copiar código
var nombre = "Juan";
let:

Introducida en ES6 (2015).
Tiene un alcance de bloque (solo existe dentro de las llaves {}).
Es la forma moderna y preferida de definir variables que pueden cambiar.
javascript
Copiar código
let edad = 30;
const:

Introducida en ES6 (2015).
Define variables cuyo valor no puede cambiar (constantes).
Ideal para valores que no deben ser modificados.
javascript
Copiar código
const PI = 3.14;
Reglas básicas sobre variables
Nombres válidos:

Deben comenzar con una letra, un guion bajo _ o el signo $.
No pueden usar palabras reservadas (como if, while, etc.).
Asignación:

Puedes asignar valores directamente o inicializarlas vacías (excepto con const).
Tipos de datos comunes: números, cadenas, booleanos, objetos, arreglos, etc.
Ejemplo completo:

javascript
Copiar código
let nombre = "Ana"; // Una variable que puede cambiar
const anioNacimiento = 1995; // Una constante
let edad = 2025 - anioNacimiento; // Operación con variables
*/