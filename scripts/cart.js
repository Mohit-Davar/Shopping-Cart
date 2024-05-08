//Generating Starting HTML for Cart
const Cart = document.querySelector('.card-container')
function generateCart(id, name, price, qty) {
    return (
        Cart.innerHTML = Cart.innerHTML + `
        <div class="card" id="${id}">
        <div class="cross" onclick="handleClearClick(event)">X</div>
        <div class="photo"></div>
        <div class="text">
            <div class="title">
                <div class="name">${name}</div>
                <div class="price">$ ${price}</div>
            </div>
            <div class="qty">
                <div class="decrement" onclick="decrement('${id}')">-</div>
                <div class="qty-value">${qty}</div>
                <div class="increment" onclick="increment('${id}')">+</div>
            </div>
            <div class="cost">
                $ ${qty * price}
            </div>
        </div>
    </div>`
    )
}

//Adding Values to Each Card
function generateValue() {
    Items.forEach(item => {
        if (item.qty != 0) {
            generateCart(item.id, item.name, item.value, item.qty)
            //Accessing Card
            const element = document.getElementById(item.id)
            //Adding Image
            const image = element.querySelector(".photo")
            image.style.backgroundImage = `url(${item.src})`
        }
    })
}
generateValue()


// Clearing Cart Functionality
function clearCartHtml(item) {
    TotalItems = TotalItems - item.qty
    updateCartIconCounter()

    totalBill = totalBill - (item.qty * item.value)
    updateTotalBillHTML()

    item.qty = 0;
    Cart.innerHTML = ""

    generateValue()
    saveToLocalStorage(item)
}

//Adding Cross Click 
function handleClearClick(ev) {
    let id = ev.target.parentElement.id
    Items.forEach(item => {
        if (id == item.id) {
            clearCartHtml(item)
        }
    })
}


//Adding Clear Cart Button Click
document.querySelector("main .buttons .clear").addEventListener("click", clearCart)
function clearCart() {
    Items.forEach(item => {
        clearCartHtml(item)
    })

}
