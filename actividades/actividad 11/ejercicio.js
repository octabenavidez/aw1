// Funciones de declaración
// Sin retorno de valor
// Escriba un programa con una función con el identificador saludar que, cuando se llame, imprima por consola "¡Hola, bienvenido!".

function saludar() {
    console.log('¡Hola, bienvenido!');
}

saludar()

// Sin retorno de valor
// Escriba un programa con una función con el identificador saludarPersona  que reciba un parámetro “nombre”. Al llamar la función, debe imprimir por consola  un saludo concatenando el nombre a "¡Hola nombre, bienvenido!" con template strings (comilla invertida y uso de ${ }). 
// Por ejemplo: "¡Hola Andrés, bienvenido!".

function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`)
}


saludarPersona('Andres')

// Retorno de valor
// Escribe una función con el identificador esMayorDeEdad que reciba una edad y retorne true si la persona es mayor de edad, o false si es menor, y guarde el valor retornado en una variable. 
// Puede utilizar la lógica vista anteriormente (condicionales).

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}

const federico = esMayorDeEdad(18)
console.log(federico)

// Funciones de flecha
// Realice el mismo programa que el punto 1. c, pero convierta la función a una función flecha.

const esMayorDeEdad2 = (edad) => edad >= 18;

const luis = esMayorDeEdad2(12)
console.log(luis)

// Escriba un programa con una función flecha que reciba dos parámetros, el primero debe ser un número que debemos chequear si es mayor, igual o menor al número pasado como segundo parámetro.
// La función debe imprimir, utilizando template strings, según corresponda: 

// - “El número parámetro1 es menor que parámetro2”
// - “El número parámetro1 es igual que parámetro2”
// - “El número parámetro1 es mayor que parámetro2”

// Utilizar la función dentro de un bucle y pase como primer parámetro el iterador, y elija usted el segundo parámetro para probar si funciona correctamente.

const peleaDeNumeros = (n1, n2) => {
    if (n1 > n2) {
        console.log(`El número ${n1} es mayor que ${n2}`)
    } else if (n1 == n2) {
        console.log(`El número ${n1} es igual que ${n2}`)
    } else {
        console.log(`El número ${n1} es menor que ${n2}`)
    }
}

for (let i = 1; i < 10; i++) {
    peleaDeNumeros(i, 6)
}

// Funciones callback
// Escriba un programa con una función flecha con el identificador operacion que debe recibir tres parámetros, los dos primeros son números y el tercero un callback (función).

// Luego crear dos funciones más que serán pasadas como callback a operacion, una con el identificador suma, y otra con el identificador resta. Cada una recibirá dos parámetros que serán los números pasados desde operacion. Cada función hará el cálculo según corresponda e imprimirá:

// - “El resultado de la suma es resultado”
// - “El resultado de la resta es resultado”

const operacion = (n1, n2, callback) => {
    callback(n1, n2);
};

const suma = (n1, n2) => console.log(`El resultado de la suma es ${n1 + n2}`)
const resta = (n1, n2) => console.log(`El resultado de la resta es ${n1 - n2}`)

operacion(10, 20, suma)
operacion(40, 30, resta)

// Mejore el programa anterior verificando en operacion si los argumentos pasados son realmente números, en caso contrario, escriba por consola: “Debe ingresar solo números.”

const operacionMejorada = (n1, n2, callback) => {

    if (typeof n1 === 'number' && typeof n2 === 'number') {
        callback(n1, n2);
    } else {
        console.log('Debe ingresar solo números')
    }

};

operacionMejorada(10, "20", suma)
operacionMejorada("40", 30, resta)
operacionMejorada(50, 30, resta)
