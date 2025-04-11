const fijo = 15; //valor que no cambia durante la ejecución
console.log(typeof fijo); //number
let cambiante="hola";
console.log(typeof cambiante); //string
cambiante="chao"; //cambia el valor de la variable
console.log(typeof cambiante);
cambiante=40; 
console.log(typeof cambiante);

const nulo=false; //no tiene valor
console.log(typeof nulo); //boolean

const palabra=`fijo vale ${fijo}`;
console.log(palabra);   //template string, permite interpolar variables dentro de un string

const estudiante={ //objeto
    nombre:"Juanito", //propiedades del objeto
    edad:20,
    carrera:"Ingenieria",
    materias:["matematica","fisica","quimica"],
    calificaciones:{
        fisica:5,
        quimica:4.5,
        matematica:3.8
    }
}
console.log(estudiante);
console.log(estudiante.carrera);

const array=[1,2,3];
console.log(array);
array.push(4);
console.log(array);
array.pop(); //elimina el último elemento
console.log(array);
array.shift(); //elimina el primer elemento
console.log(array);
array.unshift(0); //agrega un elemento al principio
console.log(array);
array.splice(1,1); //elimina el segundo elemento
console.log(array);
array.splice(1,0,2); //agrega el 2 en la segunda posición
console.log(array);

const arr=["a","j","d"];
console.log(arr);
arr.sort(); //ordena el array
console.log(arr);
arr.reverse(); //invierte el array

const fecha=new Date(); //fecha actual
console.log(fecha);

function suma(a,b){
    return a+b;
}
console.log(suma(5,4));

const suma2=(a,b)=>a+b; //función flecha
console.log(suma2(7,6))

if(true){
    console.log("es verdadero")
}else{
    console.log("es falso")
}

try{
    console.log("intento")
}catch(e){
    console.log("error")
}finally{
    console.log("siempre se ejecuta")
}

for(let i=0;i<5;i++){
    console.log(i)
}
i=0;
while(i<5){
    console.log(i);
    i++;
}

do{
    console.log("siempre")
    break; //rompe el ciclo 
}while(true)

let a=[1,2,3];
console.log(a);
a.forEach((elemento)=>{
    console.log(elemento+1); //suma 1 a cada elemento
});
console.log(a.map((elemento)=>elemento+1)); //suma 1 a cada elemento y devuelve un nuevo array

/* Callback */

// Definimos una función principal que toma una función de callback como argumento
function ejecutardespuesdedossegundos(callback) {
    // Simulamos un retraso de 2 segundos usando setTimeout
    setTimeout(() => {
        // Llamamos a la función de callback después de 2 segundos
        callback();
    }, 2000); // 2000 milisegundos = 2 segundos
}
// Definimos una función de callback que se ejecutará después del retraso
function miCallback() {
    console.log("¡Hola! Esto se ejecuta después de 2 segundos.");
}
// Llamamos a la función principal y pasamos la función de callback como argumento
ejecutardespuesdedossegundos(miCallback);
