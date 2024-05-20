const products = []
const apiURL = 'https://fakestoreapi.com/products'

const sectionTemplate = document.querySelector('#section-template')
const cardTemplate = document.querySelector('#card-template')
const main = document.querySelector('main')

const searchBar = document.querySelector('input[type="search"]')
const form = document.querySelector('form')

async function loadProductsData(section, categoryName){
    const res = await fetch(`${apiURL}/category/${categoryName}`)
    const data = await res.json()

    for (let i = 0; i < data.length; i++){
        const card = cardTemplate.content.cloneNode(true).children[0]
        const productImg = card.querySelector('.product-img')
        const productName = card.querySelector('.product-name')
        const productPrice = card.querySelector('.product-price')

        productImg.src = data[i].image
        productName.textContent = data[i].title
        productPrice.textContent = `${Math.round(Number(data[i].price) * 46.64)}`

        section.querySelector('.cards-container').appendChild(card)
        products.push(data[i])
    }
    main.appendChild(section)
}

fetch(`${apiURL}/categories`)
.then(res => res.json())
.then(categories => {
    for (let i = 0; i < categories.length; i++){
        const section = sectionTemplate.content.cloneNode(true).children[0]
        section.querySelector('h2').textContent = `Best Sellers in ${categories[i]}`
        loadProductsData(section, categories[i])
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // let value = searchBar.value.toLowerCase()
    // for (let i = 0; i < products.length; i++){
    //     const isVisible = products[i].title.toLowerCase().includes(value) || products[i].description.toLowerCase().includes(value)
    //     if (isVisible){
    //         console.log(products[i])
    //     }
    // }
    // searchBar.value = ''
})