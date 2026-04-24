const API = 'https://dummyjson.com/products'

// obteniendo el ID que se pasa de
// una página a otra

// window.location.search - la barra de busqueda
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

// obtener el producto
const getProduct = async () => {
    const consulta = await fetch(`${API}/${id}`)
    // https://dummyjson.com/products/3
    const data = await consulta.json()

    console.log(data)

    return data
}

const renderSingleProduct = async () => {
    const product = await getProduct()

    const singleProductImage = document.getElementById('singleProductImage')
    const singleProductDescription = document.getElementById("singleProductDescription")
    singleProductImage.src = product.thumbnail

    const name = document.createElement('h1')
    name.textContent = `${product.title}`

    const rating = document.createElement('p')
    rating.textContent = `⭐ ${product.rating}`

    const price = document.createElement('p')
    price.textContent = `$ ${product.price}`

    singleProductDescription.appendChild(name)
    singleProductDescription.appendChild(rating)
    product.tags.forEach((str) => {
        const tags = document.createElement('p')
        tags.textContent = str
        singleProductDescription.appendChild(tags)
    })

    singleProductDescription.appendChild(price)
}

renderSingleProduct()

// laboratorio 14 - 2do lab del módulo 4
// Agregar un botón que permita ir al siguiente producto
// Agregar un botón que permita ir al anterior producto

// Si estoy en el primer producto, no me debería mostrar
// un botón para ir al anterior. porque ya no hay

// Agrgegar las reseñas.
// Las reseñas son un bloque que contiene el correo
// del usuario, y el comentario