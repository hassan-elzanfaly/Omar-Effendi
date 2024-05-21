import {categories} from './data.js'

const sectionTemplate = document.querySelector('#section-template')
const cardTemplate = document.querySelector('#card-template')
const main = document.querySelector('main')

const searchBar = document.querySelector('input[type="search"]')
const form = document.querySelector('form')

const products = []

for (let i = 0; i < categories.length; i++){
    const section = sectionTemplate.content.cloneNode(true).children[0]
    section.querySelector('h2').textContent = `Best Sellers in ${categories[i].name}`

    const data = categories[i].products
    
    for (let i = 0; i < data.length; i++){
        const card = cardTemplate.content.cloneNode(true).children[0]
        const productImg = card.querySelector('.product-img')
        const productName = card.querySelector('.product-name')
        const productPrice = card.querySelector('.product-price')

        productImg.src = data[i].img
        productName.textContent = data[i].title
        productPrice.textContent = data[i].price

        section.querySelector('.cards-container').appendChild(card)
        products.push(data[i])
    }
    main.appendChild(section)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
})