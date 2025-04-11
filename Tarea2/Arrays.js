/*
1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los 
números del array.
2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de 
todos los números del array.
3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que 
contenga los mismos strings pero con todas las letras en mayúsculas.
4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que 
contenga solo los números pares.

Ejemplo

const numeros = [1, 2, 3, 4, 5]
// Agregar un elemento al final del arreglo
numeros.push(6)
console.log(numeros) // [1, 2, 3, 4, 5, 6]

// Eliminar el ultimo elemento del arreglo
numeros.pop()
console.log(numeros) // [0, 1, 2, 3, 4, 5]}
*/

const numeros = [1, 2, 3, 4, 5]
const numeros2= [6, 7, 8, 9, 10]

function sumaArray(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}
const resultadoSuma = sumaArray(numeros)
console.log(resultadoSuma) // 15

function promedioArray(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma / array.length
}

const resultadoPromedio = promedioArray(numeros)
console.log(resultadoPromedio) // 3
function toUpperCaseArray(array) {
    let nuevoArreglo = []
    for (let i = 0; i < array.length; i++) {
        nuevoArreglo.push(array[i].toUpperCase())
    }
    return nuevoArreglo
}

const arregloStrings = ["hola", "mundo", "javascript"]
const resultadoUpper = toUpperCaseArray(arregloStrings)
console.log(resultadoUpper) // ["HOLA", "MUNDO", "JAVASCRIPT"]


function pares(array) {
    let nuevoArreglo = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            nuevoArreglo.push(array[i])
        }
    }
    return nuevoArreglo
}
const resultadoPares = pares(numeros.concat(numeros2))
console.log(resultadoPares) // [2, 4, 6, 8, 10]