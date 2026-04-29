let productos = []

// export const addProductToLocalStorage = (product) => {
//     if (localStorage.getItem('productos')) {
//         productos = JSON.parse(localStorage.getItem('productos'))
//     }

//     if (productos.length > 0) {
//         productos.forEach(p => {
//             if (p.product.id == product.id) {
//                 p.cantidad += 1
//             } else {
//                 const objeto = {
//                     product, cantidad: 1
//                 }

//                 productos.push(objeto)
//             }
//         })
//     } else {
//         const objeto = {
//             product, cantidad: 1
//         }

//         productos.push(objeto)
//     }

//     localStorage.setItem('productos', JSON.stringify(productos))
// }

export const addProductToLocalStorage = (product) => {
    productos.push(product)

    localStorage.setItem('productos', JSON.stringify(productos))
}

const renderProductsFromLocalStorage = () => {
    const productoscarrito = document.querySelector('#productosCarrito')

    if (!productoscarrito) {
        return
    }

    const productos = JSON.parse(localStorage.getItem('productos'))

    productos.forEach((product, index) => {
        const titulo = document.createElement('h3')
        titulo.textContent = product.title

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
        bloque.appendChild(eliminarBotton)

        productoscarrito.appendChild(bloque)
    })
}

renderProductsFromLocalStorage()