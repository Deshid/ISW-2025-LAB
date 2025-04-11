/* 
Dado los siguientes valores numéricos:

const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

1. Muestre por consola si el numero1 es mayor o igual que numero2.
2. Muestre por consola si el numero1 es menor o igual que numero2.
3. Muestre por consola si el numero1 es menor que numero3.
4. Muestre por consola si el numero3 es menor que numero2.
5. Muestre por consola si el numero3 es estrictamente diferente que numero1.
6. Muestre por consola si el numero1 es estrictamente igual al numero2.

💡 Recordar que es diferente `==` y `===` .
*/

const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

/**
* Mayor o igual que
**/
function mayorIgualQue(a,b){
    return a>=b;
}
console.log(mayorIgualQue(numero1,numero2)); // falso

/**
* Menor o igual que
**/
function MenorIgualQue(a,b){
    return a<=b;
}
console.log(MenorIgualQue(numero1,numero2)); // true

/**
* Menor que
**/
function MenorQue(a,b){
    return a<b;
}
console.log(MenorQue(numero1,numero2)); // true

/**
* Mayor que
**/
function MayorQue(a,b){
    return a>b;
}
console.log(MayorQue(numero1,numero2)); // falso

/**
* Estrictamente Diferente
**/
function Diferente(a,b){
    return a!=b;
}
console.log(Diferente(numero1,numero2)); // true

/**
* Estrictamente Igual
**/
function Igual(a,b){
    return a===b;
}
console.log(Igual(numero1,numero2)); // falso