//Total Items

let TotalItems = localStorage.getItem("TI") || 0
const counter = document.querySelector("nav .logo .counter")
function updateCartIconCounter() {
    counter.innerHTML = TotalItems
}
updateCartIconCounter()




//Saving To Local Storage

function saveToLocalStorage(item) {
    localStorage.setItem(`${item.id}`, String(item.qty))
    localStorage.setItem("TI", String(TotalItems))
}





//Total Bill

//total bill declaration
let totalBill = 0
//Displaying Total Bill initially
function displayingTotalBillHTML() {
    document.querySelector("main .heading").innerHTML = `Total Bill : ${totalBill}`
}
displayingTotalBillHTML()
Items.forEach(item => {
    totalBill = totalBill + (item.qty * item.value)
    if (document.querySelector("main .heading")) {
        displayingTotalBillHTML()
    }
})





//Updating All values in Html
function updateTotalBillHTML() {
    document.querySelector("main .heading").innerHTML = `Total Bill : ${totalBill}`
}
function updateBill(item,sign) {
    totalBill = totalBill + sign*(item.value)
    if (document.querySelector("main .heading")) {
        updateTotalBillHTML()
    }

}
function updateHTML(item, element , sign) {
    //updating values in card
    element.querySelector(".text .qty .qty-value").innerHTML = item.qty
    updateCartIconCounter()
    if (element.querySelector(".text .cost")) {
        element.querySelector(".text .cost").innerHTML = `$ ${item.qty * item.value}`
    }
    //updating value of Total Bill
    updateBill(item ,sign)
    saveToLocalStorage(item)
}





//Adding Incrementing amd Decrementing Facility

function increment(id) {
    const element = document.getElementById(`${id}`)
    Items.forEach(item => {
        if (item.id === id) {
            item.qty++
            TotalItems++
            updateHTML(item, element ,1)
        }
    })
}
function decrement(id) {
    const element = document.getElementById(`${id}`)
    Items.forEach(item => {
        if (item.id === id) {
            if (item.qty > 0) {
                item.qty--
                TotalItems--
                updateHTML(item, element,-1)
            }
        }
    })
}
