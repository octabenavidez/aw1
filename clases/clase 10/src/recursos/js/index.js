//import productos from './productos.js'
import { productosMascotas } from './productos.js'
import { renderizadoProductos, filtrarProducto } from './funciones.js'

// Función que carga el carrito guardado en localStorage
// Si no hay nada guardado, devuelve un array vacío []
// localStorage.getItem() busca el valor usando la clave 'carrito'
// JSON.parse() convierte el texto guardado de vuelta a un array de objetos
const cargarCarrito = () => {
    const guardado = localStorage.getItem('carrito') // busca en localStorage con la clave 'carrito'
    return guardado ? JSON.parse(guardado) : [] // si existe lo convierte a array, si no devuelve []
}

// Función que guarda el carrito en localStorage
// localStorage.setItem() guarda un valor con una clave
// JSON.stringify() convierte el array de objetos a texto para poder guardarlo
const guardarCarrito = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito)) // convierte el array a texto y lo guarda con la clave 'carrito'
}

// Inicializa el carrito leyendo lo que haya guardado en localStorage
// Así el carrito no se pierde cuando el usuario recarga la página
const productosSeleccionados = cargarCarrito()

const contenedorProductos = document.getElementById('contenedor-productos');
const botonEvento = document.getElementById('evento-boton');
const dialogo = document.getElementById('dialogo');
const contador = document.getElementById('contador');
const filtro = document.getElementById('filtro');

// Muestra en pantalla la cantidad de productos que ya había en el carrito al cargar la página
contador.textContent = productosSeleccionados.length;

renderizadoProductos(contenedorProductos, productosMascotas)


filtro.addEventListener('input', (evento) => {
    const productosMenos10mil = filtrarProducto(productosMascotas, parseInt(filtro.value))
    renderizadoProductos(contenedorProductos, productosMenos10mil)
})

// Eventos

// Ponemos a escuchar el boton
botonEvento.addEventListener('click', (evento) => { //e evt event
    // console.log(evento)
    // dialogo.show()
    dialogo.showModal()
})

const botonesProductos = contenedorProductos.querySelectorAll('.boton-agregar')
// console.log(botonesProductos)
botonesProductos.forEach((boton) => {
    // cuerpo del callback de forEach
    boton.addEventListener('click', (evento) => {
        // Cuerpo del callback del Evento
        const idProducto = parseInt(boton.dataset.id) // obtiene el id del producto desde el atributo data-id del botón

        // Busca el objeto completo del producto en el array usando su id
        const producto = productosMascotas.find((p) => p.id === idProducto)

        // Agrega el objeto del producto al array del carrito
        productosSeleccionados.push(producto)

        // Guarda el carrito actualizado en localStorage para que no se pierda
        guardarCarrito(productosSeleccionados)

        // Actualiza el número del contador visible en la pantalla
        contador.textContent = productosSeleccionados.length

        console.log('Se agrego producto ' + idProducto, productosSeleccionados)
    })
})

