/*
1. Crea una función que reciba un string y retorne el string en mayúsculas.
2. Crea una función que reciba un string y retorne el string en minúsculas.
3. Crear una función que reciba como parámetro 2 números y los reste.
4. Crear una función que reciba como parámetro 2 números y los divida.
5. Crear una función que reciba como parámetro 2 números y los multiplique.
6. Crear una función que reciba un string y devuelva la longitud del string.

Ejemplo
function suma (numero1, numero2) {
return numero1 + numero2
}
const resultado = suma(10, 20)

console.log(resultado) // 30
*/

function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("hola")); // "HOLA"

function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toLowerCase("HOLA")); // "hola"

function resta(numero1, numero2) {
    return numero1 - numero2;
}
const resultadoResta = resta(10, 5);
console.log(resultadoResta); // 5

function division(numero1, numero2) {
    return numero1 / numero2;
}
const resultadoDivision = division(10, 5);
console.log(resultadoDivision); // 2

function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}
const resultadoMultiplicacion = multiplicacion(10, 5);
console.log(resultadoMultiplicacion); // 50

function longitudString(str) {
    return str.length;
}
const resultadoLongitud = longitudString("Hola mundo");
console.log("La longitud es:", resultadoLongitud); // 10