/*
Dado los siguientes valores numéricos:

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

1. Imprimir en consola el número mayor de los tres.
2. Imprimir en consola el número menor de los tres.
3. Imprimir en consola si el numero1 es par o impar.
4. Imprimir en consola si el numero2 es par o impar.
5. Imprimir en consola si el numero3 es par o impar.
6. Imprimir en consola si el numero1 es múltiplo de 5.
7. Imprimir en consola si el numero2 es múltiplo de 5.
8. Imprimir en consola si el numero3 es múltiplo de 5.

ejemplo:
const numero1 = 30
const numero2 = 20

if (numero1 > numero2) {
console.log('numero1 es mayor que numero2')
}
*/

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;
const numero4 = 23;

/**
* Mayor de tres números
**/
function mayorDeTres(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
} 
console.log(mayorDeTres(numero1,numero2,numero3)); // 30

// de otra forma
function mayor(a,b,c){
return Math.max(a,b,c);
}
console.log(mayor(numero1,numero2,numero3)); // 30

/**
* Menor de tres números
**/
function menorDeTres(a,b,c){
    if(a<b && a<c){
        return a;
    }else if(b<a && b<c){
        return b;
    }else{
        return c;
    }
} 
console.log(menorDeTres(numero1,numero2,numero3)); // 30

/**
* numero1, numero2, numero3 Par o impar 
*/
function parImpar(a){
    if(a%2==0){
        return 'Par';
    }else{
        return 'Impar';
    }
}
console.log(parImpar(numero1)); // Par
console.log(parImpar(numero2)); // Par
console.log(parImpar(numero3)); // Par
console.log(parImpar(numero4)); // Impar

/**
* numero1, numero2, numero3 múltiplo de 5
**/
function multiploDeCinco(a){
    if(a%5==0){
        return 'Es multiplo de 5';
    }else{
        return 'No es multiplo de 5';
    }
}
console.log(multiploDeCinco(numero1)); // Si
console.log(multiploDeCinco(numero2)); // Si
console.log(multiploDeCinco(numero3)); // Si
console.log(multiploDeCinco(numero4)); // No