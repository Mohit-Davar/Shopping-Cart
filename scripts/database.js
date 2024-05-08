//Declaring Class Item
class Item {

    constructor(name, description, value, src) {
        this.name = name
        this.description = description
        this.value = value
        this.src = src
        this.id = name.replace(/\s+/g, "")
        this.qty = localStorage.getItem(`${this.id}`) || 0
    }
}
//Database of Different Items
const Items = [
    new Item("Casual Shirt", "Lorem ipsum dolor sit amet consectetur adipisicing.", 45, './Images/img-1.jpg'),
    new Item("Office Shirt", "Lorem ipsum dolor sit amet consectetur adipisicing.", 100, './Images/img-2.jpg'),
    new Item("T Shirt", "Lorem ipsum dolor sit amet consectetur adipisicing.", 25, './Images/img-3.jpg'),
    new Item("Mens Suit", "Lorem ipsum dolor sit amet consectetur adipisicing.", 300, './Images/img-4.jpg'),
    new Item("Mens Tie", "Lorem ipsum dolor sit amet consectetur adipisicing.", 25, './Images/img-5.png'),
    new Item("Casual Shoes", "Lorem ipsum dolor sit amet consectetur adipisicing.", 200, './Images/img-6.png'),
    new Item("Black Suit", "Lorem ipsum dolor sit amet consectetur adipisicing.", 450, './Images/img-7.png'),
    new Item("Polo Shirt", "Lorem ipsum dolor sit amet consectetur adipisicing.", 45, './Images/img-8.png'),
    new Item("Denim Shirt", "Lorem ipsum dolor sit amet consectetur adipisicing.", 85, './Images/img-9.png'),
    new Item("Denim Pants", "Lorem ipsum dolor sit amet consectetur adipisicing.", 120, './Images/img-10.png'),
    new Item("Basic Cap", "Lorem ipsum dolor sit amet consectetur adipisicing.", 35, './Images/img-11.png'),
    new Item("Leather Boots", "Lorem ipsum dolor sit amet consectetur adipisicing.", 350, './Images/img-12.png'),
]