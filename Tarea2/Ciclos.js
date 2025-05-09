/*
1. Imprimir en consola los números del 1 al 10.
2. Imprimir en consola los números del 10 al 1.
3. Imprimir en consola los números del 1 al 10 pero solo los pares.
4. Imprimir en consola los números del 1 al 10 pero solo los impares.
5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.

Ejemplo
for (let i = 0; i < 10; i++) {
console.log(i)
}

En consola:
0
1
2
...
9
*/

/**
* Imprimir en consola los números del 1 al 10.  
**/
i=0;
while(i<11){
    console.log(i);
    i++;
}

// otra forma
for(let i=1;i<11;i++){
    console.log(i);
}

/**
* Imprimir en consola los números del 10 al 1.
**/
for(let i=10;i>0;i--){
    console.log(i);
}

/**
* Imprimir en consola los números del 1 al 10 pero solo los pares.
**/
for(let i=1;i<11;i++){
    if(i%2==0){
        console.log(i);
    }
}

/**
* Imprimir en consola los números del 1 al 10 pero solo los impares.
**/
for(let i=1;i<11;i++){
    if(i%2!=0){
        console.log(i);
    }
}

/**
* Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
**/
for(let i=1;i<11;i++){
    if(i%3==0){
        console.log(i);
    }
}

/**
* Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
**/
for(let i=1;i<11;i++){
    if(i%5==0){
        console.log(i);
    }
}

/**
* Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
**/
for(let i=1;i<11;i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}

/**
* Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
**/
for(let i=1;i<11;i++){
    if(i%3==0 || i%5==0){
        console.log(i);
    }
}