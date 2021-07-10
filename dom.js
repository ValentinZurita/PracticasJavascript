//Clase 62: Query Selector - 9 de Julio del 2021

console.log(document.querySelector("menu"))
console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("a").length)
console.log(document.querySelectorAll("a").forEach(element => {
    console.log(element)
}))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])
console.log(document.querySelectorAll("#menu li"))


//Clase 63: DOM Atributos - 9 de Julio del 2021
document.documentElement.lang = "es"
console.log(document.documentElement.lang)

document.documentElement.setAttribute("lang", "es-MX")

const $linkDom = document.querySelector(".link-dom")
$linkDom.setAttribute("target", "_blank")
$linkDom.setAttribute("reel", "noopener")
$linkDom.setAttribute("href", "https://google.com")

console.log($linkDom.hasAttribute("reel"))
console.log($linkDom.removeAttribute("reel"))
console.log($linkDom.hasAttribute("reel"))

//Data description
console.log($linkDom.getAttribute("data-description"))
console.log($linkDom.dataset)
console.log($linkDom.dataset.description)
$linkDom.setAttribute("data-id", "Modelo de objeto del documento")
$linkDom.dataset.id = "5"

//Clase 64: Estilos y Varibles CSS - 9 de Julio del 2021
console.log($linkDom.style)
$linkDom.style.setProperty("text-decoration", "none")
$linkDom.style.setProperty("display", "block")
$linkDom.style.width = "50%"
$linkDom.style.textAlign = "center"
$linkDom.style.marginLeft = "auto"
$linkDom.style.marginRight = "auto"
$linkDom.style.padding = "1rem"
$linkDom.style.borderRadius = ".5rem"


console.log($linkDom.style.backGroundColor)

//Variables CSS
const $html = document.documentElement
const $body = document.body

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor = getComputedStyle($html).getPropertyValue("--pink-color")

console.log(varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor


//Clase 65: Clases CSS - 9 de Julio del 2021

