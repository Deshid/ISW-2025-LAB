/*
1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como 
nombre, edad y género. Luego, muestra la información de esa persona por la consola.
2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y 
indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, 
imprimir cada propiedad del objeto y el tipo de dato que es.

Ejemplo
Crear un objeto llamado computador y definir sus propiedades, las cuales son:
Teclado
Pantalla
Mouse
Marca
Enciende?
Precio

const computador = {
		teclado: "Redragon Kurama",
		mouse: "Logitech G203",
		marca: "ASUS",
		enciende: true,
		precio: 450000
}

*/

const persona = {
    nombre: "Juanito",
    edad: 30,
    genero: "Masculino"
};
console.log(persona);

const caja = {
    cuadernos: "5",
    lapices: 20,
    papel: 15,
    fotografias: 10,
    estado: "Buen estado"
};

console.log(caja);
console.log(caja.cuadernos, typeof caja.cuadernos);
console.log(caja.lapices, typeof caja.lapices);
console.log(caja.papel, typeof caja.papel);
console.log(caja.fotografias, typeof caja.fotografias);
console.log(caja.estado, typeof caja.estado);
