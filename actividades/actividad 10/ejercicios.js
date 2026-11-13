// Estructuras de control CONDICIONALES
// Utilizando la estructura de control if, else if o else

// Escriba un programa que verifique si la variable edad, definida con un número entero, es mayor o igual a 18. Si lo es, imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad"
function esMayor(edad) {
    if (edad >= 18) {
        console.log('Es mayor de edad')
    } else {
        console.log('Es menor de edad')
    }
}

esMayor(20)

// Escriba un programa que verifique si la variable numero es par o impar. Si es par, imprime "El número es par", de lo contrario, imprime "El número es impar"
function esPar(numero) {
    if (numero % 2 == 0) {
        console.log('El número es par')
    } else {
        console.log('El número es impar')
    }
}

esPar(5)

// Escriba un programa que compruebe la variable nota y escriba por consola si es "Aprobado", "Reprobado", o "Excelente" según los siguientes criterios:
//  - Menor a 4: "Reprobado"
// - Entre 4 y 7: "Aprobado"
// - Mayor a 7: "Excelente"
function consultarNota(nota) {
    if (nota > 7) {
        console.log('Excelente')
    } else if (nota >= 4 && nota <= 70) {
        console.log('Aprobado');
    } else {
        console.log('Reprobado')
    }
}

consultarNota(5)
consultarNota(2)
consultarNota(9)

// Estructuras de control BUCLES
// Utilizando la estructura de control for


// Escriba un programa que imprima los números del 1 al 10 usando un bucle for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Escriba un programa que imprima los números del 10 al 1 en orden descendente usando un bucle for
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// Escriba un programa que utilice un bucle for (20 iteraciones comenzando con let i = 0) y combinarlo  con condicionales para saber si la variable declarada en el bucle es par o impar. Si es par, imprime "El número es par", de lo contrario imprime "El número es impar" (utilizar operación de módulo)


// Modifique el programa del punto anterior, y concatena con template literals el número a lo que se imprime por consola, por ejemplo: "El número 3 es impar"

// Hice de una lo que pedia el ejercicio que le seguia al planteamiento del bucle 
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`)
    }
}

