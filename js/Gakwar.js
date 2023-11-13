class info {
    constructor(price, Name,) {
        this.price = price;
        this.Name = Name;
    }
}
let monthly = new info(["1.00", "4.90", "6.90"],
    "Monthly")
let annualy = new info(["19.00", "49.00", "69.00"],
    "Annualy")

let btns = document.querySelectorAll(".btn")
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        btns.forEach((btn) => {
            btn.classList.remove("active")
        })
        e.currentTarget.classList.add("active");
        check(e.currentTarget)
    })
})
let Cards = document.querySelectorAll(".plan_Card")
let Prices = document.querySelectorAll(".plan_Name h3")
let plan_Type = document.querySelectorAll(".plan_Type")

function check(btn) {
    for (let i = 0; i < btns.length; i++) {
        if (btn.dataset.id === "Monthly") {
            price(monthly)

        } else if (btn.dataset.id === "Annually") {
            price(annualy)
        }
    }
}
function type(obj) {
    for (let i = 0; i < plan_Type.length; i++) {
        plan_Type[i].innerHTML = obj["Name"]
    }
}
function price(obj) {
    for (let i = 0; i < Prices.length; i++) {
        Prices[i].innerHTML = `$${obj["price"][i]}`
    }
    type(obj)
}
price(monthly)

let questions = document.querySelectorAll(".question")
let icons = document.querySelectorAll(".Icon")
let parags = document.querySelectorAll(".des")
icons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        if (!icon.classList.contains("rotate")) {
            icon.classList.add("rotate")
            e.currentTarget.parentElement.nextElementSibling.classList.remove("hide")
        } else {
            icon.classList.remove("rotate")
            e.currentTarget.parentElement.nextElementSibling.classList.add("hide")
        }
    })
})

