
//Generating Starting HTMl for Shop
const shop = document.querySelector('main')
function generateShop(id, name, description, price, qty) {
    return (shop.innerHTML = shop.innerHTML + `
    <div class="card" id=${id}>
    <div class="photo">
    </div>
    <div class="text">
        <div class="item-name">
        ${name}
        </div>
        <div class="description">
        ${description}
        </div>
        <div class="price">
            <div class="value">$ ${price}</div>
            <div class="qty">
                <div class="decrement" onclick="decrement('${id}')">-</div>
                <div class="qty-value">${qty}</div>
                <div class="increment" onclick="increment('${id}')">+</div>
            </div>
        </div>
    </div>
</div>
    `)
}

//Adding Values to Each Card
Items.forEach(item => {
    generateShop(item.id, item.name, item.description, item.value, item.qty)
    //Accessing Card
    const element = document.getElementById(item.id)
    //Adding Image
    const image = element.querySelector(".photo")
    image.style.backgroundImage = `url(${item.src})`
})
