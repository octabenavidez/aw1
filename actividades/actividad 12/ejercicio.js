// Arreglos
// Escriba un programa que solicite a un usuario la carga de 5 números a través de un método prompt() que se irán incluyendo en un arreglo con el método push(). 
// Utilizar un bucle for para repetir el proceso 5 veces, y una vez terminado el bucle, imprimir el arreglo en consola.  
// Recomendación: crear el arreglo fuera del bucle primero.

const numeros = []

function cargaNumeros() {
    for (let i = 1; i <= 5; i++) {
        const input = prompt(`Ingrese el número ${i}:`)

        numeros.push(Number(input))
    }

    console.log(numeros)
}

// cargaNumeros()

// Modifique el programa del punto anterior, para que incluya un condicional para guardar en el arreglo solo los números impares.

const numerosImpares = []

function cargaNumerosImpares() {
    for (let i = 1; i <= 5; i++) {
        const input = prompt(`Ingrese el número ${i}:`)

        if (Number(input) % 2 !== 0) {
            numerosImpares.push(Number(input))
        }
    }

    console.log(numerosImpares)
}

// cargaNumerosPares()

// Escriba un programa que contenga un arreglo de nombres de 4 frutas (pera, manzana, banana, durazno), y utilizando el método forEach() (ver doc) sobre el mismo arreglo, convierta a MAYÚSCULAS los nombres (ver documentación). Una vez terminado el proceso, escriba por consola el arreglo.

const frutas = ['pera', 'manzana', 'banana', 'durazno']

// frutas.forEach((fruta, index) => {
//     frutas[index] = fruta.toUpperCase()
// });

console.log(frutas)

// Modifique el programa del punto anterior, y en lugar de utilizar el forEach(), utilice el método no destructivo map() (ver doc) para crear un nuevo arreglo.

const frutasMayus = frutas.map(fruta => fruta.toUpperCase())

console.log(frutasMayus)

// Modifique el programa del punto c, y en lugar de utilizar el forEach(), utilice el método no destructivo filter() (ver doc) para crear un nuevo arreglo solo con las frutas que contengan “na” en su nombre. Utilice el método de Strings includes() (ver doc) con un condicional.

const frutasFiltro = frutas.filter(fruta => fruta.includes('na'))

console.log(frutasFiltro);

// Objetos
// Cree un programa que contenga un objeto con datos ficticios de un producto de indumentaria: 
// - nombre
// - precio
// - stock
// - talles: [s,m,l]

const remera = {
    nombre: 'remera polo',
    precio: 500,
    stock: 10,
    talles: ['S', 'M', 'L']
}

// Cree un programa que contenga un arreglo de 4 objetos con datos ficticios de productos de indumentaria:
// - nombre
// - precio
// - stock
// - talles: [s,m,l]

// Recorra el arreglo de objetos con forEach() e imprima por consola solo los que tienen un stock menor a 5 (procure tener variedad de stock para que se cumpla la condición en algún momento) 

const prendas = [
    {
        nombre: 'pantalon',
        precio: 200,
        stock: 22,
        talles: ['S', 'M', 'L']
    },
    {
        nombre: 'blusa',
        precio: 100,
        stock: 2,
        talles: ['S', 'M', 'L']
    },
    {
        nombre: 'campera',
        precio: 2000,
        stock: 1,
        talles: ['S', 'M', 'L']
    },
    {
        nombre: 'zapatillas',
        precio: 50,
        stock: 12,
        talles: ['S', 'M', 'L']
    }
]

prendas.forEach(prenda => {
    if (prenda.stock < 5) {
        console.log(prenda)
    }
});

// Escriba un programa que re-utilice el arreglo del punto b. y use map() para crear un nuevo arreglo que contenga los mismos productos pero con un descuento en el precio de un 10%.
// Imprima por consola en nuevo arreglo.

const prendasConDescuento = prendas.map(prenda => ({
    ...prenda,
    precio: prenda.precio * 0.90
}));

console.log(prendasConDescuento)

// Escriba un programa que re-utilice el arreglo del punto b. y use filter() para crear un nuevo arreglo que contenga solo los productos cuyo stock sea mayor a 10  (procure tener variedad de stock para que se cumpla la condición en algún momento) .
// Imprima por consola en nuevo arreglo.

const prendasConMuchoStock = prendas.filter(prenda => prenda.stock > 10)

console.log(prendasConMuchoStock)

