/*
Dado los siguientes valores numéricos:
const numero1 = 20;
const numero2 = 40;
​
Se debe hacer lo siguiente:
Suma (+): Suma numero1 y numero2. Muestra el resultado por consola.
Resta (-): Resta numero1 y numero2. Muestra el resultado por consola.
Multiplicación (*): Multiplica numero1 y numero2. Muestra el resultado por consola.
División (/): Divide numero1 y numero2. Muestra el resultado por consola.
Modulo (%):  Saca el modulo entre numero2 y numero1. Muestra el resultado por consola. 
*/

const numero1 = 20;
const numero2 = 40;
/**
* Suma
**/
function suma(a,b){
    return a+b;
}
console.log(suma(numero1,numero2));

/**
* Resta
**/
function resta(a,b){
    return a-b;
}
console.log(resta(numero1,numero2));

/**
* Multiplicación
**/
function multiplicacion(a,b){
    return a*b;
}
console.log(multiplicacion(numero1,numero2));

/**
* División
**/
function division(a,b){
    return a/b;
}
console.log(division(numero1,numero2));

/**
* Modulo
**/
function modulo(a,b){
    return a%b;
}
console.log(modulo(numero1,numero2));