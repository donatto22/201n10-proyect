const API = 'https://dummyjson.com/products'

// obteniendo los productos
const getProducts = async () => {
    const consulta = await fetch(API)
    const datos = await consulta.json()
    console.log(datos)
    return datos
}

// obteniendo el lugar donde vamos a colocar los productos
const productsList = document.querySelector('#productsList')

// creando el producto
const createProduct = (product) => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')

    const productImage = document.createElement('img')
    productImage.classList.add('productImage')
    productImage.src = product.thumbnail

    // descripción del producto
    const productDescription = document.createElement('div')

    const name = document.createElement('a')
    name.textContent = product.title
    name.href = `./pages/singleProduct.html?id=${product.id}`

    const category = document.createElement('div')
    category.classList.add('productCategory')
    category.textContent = `${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`

    const price = document.createElement('p')
    price.textContent = `$ ${product.price}`

    const addToCartButton = document.createElement('button')
    addToCartButton.textContent = 'Añadir al carrito'

    // agregandop la descripción
    productDescription.appendChild(name)
    productDescription.appendChild(category)
    productDescription.appendChild(price)
    productDescription.appendChild(addToCartButton)

    // llenamos el div del producto
    productDiv.appendChild(productImage)
    productDiv.appendChild(productDescription)

    return productDiv
}

// colocando el producto en la lista
const renderProducts = async () => {
    const data = await getProducts()

    data.products.forEach(producto => {
        const productDiv = createProduct(producto)
        productsList.appendChild(productDiv)
    })
}

renderProducts()