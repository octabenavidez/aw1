
const renderizadoProductos = (contenedor, productos) => {
    let productosHTML = ``;

    productos.forEach((producto) => {
        productosHTML += `
            <article>
                <h3>${producto.nombre}</h3>
                <picture>
                    <img src="${producto.imagen}" alt="${producto.descripcion}">
                    <p>
                        ${producto.descripcion}
                    </p>
                </picture>
                <ul>
                    <li>${producto.talles.join(', ')}</li>
                    <li>$${producto.precio}</li>
                </ul>
                <button class="boton-agregar" data-id="${producto.id}">
                    Agregar al carrito
                </button>
            </article>
        `;
    });

    contenedor.innerHTML = productosHTML;
};

function filtrarProducto(productos, precioMaximo) {
    const productosFiltrados = productos.filter((producto) => producto.precio < precioMaximo);
    return productosFiltrados;
}

export { renderizadoProductos, filtrarProducto };
