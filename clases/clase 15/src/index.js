

const persona = {
    nombre: 'Octavio',
    edad: 20,
    estudia: true,
    redes: [
        'instagram',
        'tiktok',
        'x'
    ],
    otros: {
        mascotas: 3,
        tieneNovia: false
    }
};

console.log(persona.otros.mascotas)

// ACTIVIDAD 10
// EJERCICIO 1A 
const edad = 23;

if (edad >= 18) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// EJERCICIO 1B
const num = 10;

if (num % 2 == 0) {
    console.log('Es par');
} else {
    console.log('Es impar');
}

// EJERCICIO 1C
const nota = 7;
let estado = '';

if (nota < 4) {
    estado = 'Reprobado';
} else if (nota >= 4 && nota <= 7) {
    estado = 'Aprobado';
} else if (nota > 7 && nota <= 10) {
    estado = 'Excelente';
} else {
    estado = 'Nota inválida';
}

console.log(estado);

// EJERCICIO 2A

for (i = 1; i <= 10; i++) {
    console.log(i)
}

// EJERCICIO 2B

for (i = 10; i >= 1; i--) {
    console.log(i)
}

// EJERCICIO 2C

for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + ' Es par')
    } else {
        console.log(i + ' Es impar')
    }
}

// EJERCICIO 2D

for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} es par`)
    } else {
        console.log(`${i} es impar`)
    }
}