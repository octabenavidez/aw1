// Metodos de arreglos

const numeros = [1, 2, 3, 4, 5];
const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Marta", edad: 30 },
    { nombre: "Juan", edad: 15 },
];

// ─── forEach → itera el array, no devuelve nada ───────────────────────────────
numeros.forEach(function(numero) {
    console.log(numero);
});

// ─── map → transforma cada elemento y devuelve un nuevo array ─────────────────
const dobles = numeros.map(numero => numero * 2);
console.log("map - dobles:", dobles); // [2, 4, 6, 8, 10]

const nombres = personas.map(persona => persona.nombre);
console.log("map - nombres:", nombres); // ["Ana", "Luis", "Marta", "Juan"]

// ─── filter → devuelve un nuevo array con los elementos que cumplen la condición
const mayores = personas.filter(persona => persona.edad >= 18);
console.log("filter - mayores de edad:", mayores);

const pares = numeros.filter(numero => numero % 2 === 0);
console.log("filter - pares:", pares); // [2, 4]

// ─── find → devuelve el PRIMER elemento que cumple la condición (o undefined) ─
const primerMayor = personas.find(persona => persona.edad >= 18);
console.log("find - primer mayor de edad:", primerMayor); // { nombre: "Ana", edad: 22 }

// ─── findIndex → devuelve el ÍNDICE del primer elemento que cumple la condición
const indice = personas.findIndex(persona => persona.nombre === "Marta");
console.log("findIndex - índice de Marta:", indice); // 2

// ─── reduce → acumula los valores en un único resultado ───────────────────────
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("reduce - suma total:", suma); // 15

const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("reduce - suma de edades:", totalEdades);

// ─── some → devuelve true si AL MENOS UN elemento cumple la condición ─────────
const hayMenores = personas.some(persona => persona.edad < 18);
console.log("some - ¿hay menores?:", hayMenores); // true

// ─── every → devuelve true si TODOS los elementos cumplen la condición ─────────
const todosMayores = personas.every(persona => persona.edad >= 18);
console.log("every - ¿todos son mayores?:", todosMayores); // false

// ─── includes → devuelve true si el array contiene el valor exacto ────────────
console.log("includes - ¿incluye 3?:", numeros.includes(3)); // true
console.log("includes - ¿incluye 9?:", numeros.includes(9)); // false

// ─── sort → ordena el array (modifica el original) ────────────────────────────
const frutas = ["banana", "manzana", "cereza", "durazno"];
frutas.sort();
console.log("sort - frutas ordenadas:", frutas);

// Para números se necesita una función comparadora
const desordenados = [40, 1, 5, 200, 20];
desordenados.sort((a, b) => a - b); // ascendente
console.log("sort - números ascendente:", desordenados);

desordenados.sort((a, b) => b - a); // descendente
console.log("sort - números descendente:", desordenados);

// ─── flat → aplana arrays anidados ───────────────────────────────────────────
const anidado = [1, [2, 3], [4, [5, 6]]];
console.log("flat - nivel 1:", anidado.flat());    // [1, 2, 3, 4, [5, 6]]
console.log("flat - nivel 2:", anidado.flat(2));   // [1, 2, 3, 4, 5, 6]

// ─── flatMap → map + flat(1) en una sola operación ──────────────────────────
const frases = ["hola mundo", "como estas"];
const palabras = frases.flatMap(frase => frase.split(" "));
console.log("flatMap - palabras:", palabras); // ["hola", "mundo", "como", "estas"]
