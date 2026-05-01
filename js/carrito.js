let productos = []

export const addProductToLocalStorage = (product) => {
    const productosAlmacenados = localStorage.getItem('productos')

    let productos = []

    if (productosAlmacenados) {
        productos = JSON.parse(productosAlmacenados)
    } else {
        productos = []
    }

    // buscar si el producto que vamos a agregar ya existe
    const productoExistente = productos.find(p => p.product.id == product.id)

    if (productoExistente) {
        productoExistente.cantidad += 1
    } else {
        productos.push({ product, cantidad: 1 })
    }

    localStorage.setItem('productos', JSON.stringify(productos))
}

const removeProductFromLocalStorage = (product) => {
    const productosAlmacenados = localStorage.getItem('productos')

    let productos = []

    if (productosAlmacenados) {
        productos = JSON.parse(productosAlmacenados)
    } else {
        productos = []
    }

    // buscar si el producto que vamos a agregar ya existe
    const productoExistente = productos.find(p => p.product.id == product.id)

    if (productoExistente) {
        if (productoExistente.cantidad > 1) {
            productoExistente.cantidad -= 1
        } else {
            productos.splice(productos.indexOf(productoExistente), 1)
        }
    }

    localStorage.setItem('productos', JSON.stringify(productos))
}

const renderProductsFromLocalStorage = () => {
    const productoscarrito = document.querySelector('#productosCarrito')

    if (!productoscarrito) {
        return
    }

    const productos = JSON.parse(localStorage.getItem('productos'))

    productos.forEach((objeto, index) => {
        const titulo = document.createElement('h3')
        titulo.textContent = objeto.product.title

        const cantidad = document.createElement('p')
        cantidad.textContent = `Cantidad: ${objeto.cantidad}`

        const botonAgregar = document.createElement('button')
        botonAgregar.textContent = '+'

        botonAgregar.addEventListener('click', () => {
            addProductToLocalStorage(objeto.product)

            productoscarrito.textContent = ''
            renderProductsFromLocalStorage()
        })

        // ----
        const botonEliminar = document.createElement('button')
        botonEliminar.textContent = '-'

        botonEliminar.addEventListener('click', () => {
            removeProductFromLocalStorage(objeto.product)

            productoscarrito.textContent = ''
            renderProductsFromLocalStorage()
        })

        const eliminarBotton = document.createElement('button')
        eliminarBotton.textContent = 'Eliminar'

        eliminarBotton.addEventListener('click', () => {
            productos.splice(index, 1)

            localStorage.setItem('productos', JSON.stringify(productos))

            productoscarrito.textContent = ''
            renderProductsFromLocalStorage()
        })

        const bloque = document.createElement('div')

        bloque.appendChild(titulo)
        bloque.appendChild(cantidad)
        bloque.appendChild(botonAgregar)
        bloque.appendChild(botonEliminar)
        bloque.appendChild(eliminarBotton)

        productoscarrito.appendChild(bloque)
    })
}

renderProductsFromLocalStorage()

// Laboratorio 16
// Agregar el precio total del producto a cada producto
// Agregar una suma total