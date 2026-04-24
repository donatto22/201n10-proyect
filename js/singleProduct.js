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
    singleProductImage.src = product.thumbnail
}

renderSingleProduct()