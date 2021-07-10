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

//$body.style.backgroundColor = varDarkColor
//$body.style.color = varYellowColor


//Clase 65: Clases CSS - 9 de Julio del 2021
const $card = document.querySelector(".card")

console.log($card) // La clase CSS
console.log($card.className) // El nombre de la clase en String
console.log($card.classList) // Lista de las clases css
$card.classList.toggle("rotate-45") // Gira el elemento 
$card.classList.add("opacity-80", "sepia") // Aplica filtro y opacidad
$card.classList.toggle("rotate-45") // Lo vuelve a girar


//Clase 66: DOM y Texto HTML - 9 de Julio del 2021
const $whatisDOM = document.getElementById("que-es")
let text = `<p> Chupate esa </p>`

$whatisDOM.innerText = text
$whatisDOM.textContent = text
$whatisDOM.innerHTML = text


//Clase 67: Recorriendo el DOM - 9 de Julio del 2021
const $cards = document.querySelector(".cards")

console.log($cards.children)
console.log($cards.parentElement)
console.log($cards.firstChild)
console.log($cards.firstElementChild)
console.log($cards.previousSibling)
console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)
console.log($cards.closest("body"))
console.log($cards.children[3].closest("section"))


//Clase 68: DOM Creando Elementos - 9 de Julio del 2021
//Crearemos una tarjeta nueva
const $figure = document.createElement("figure") // Creamos la figura
const $img = document.createElement("img") // Creamos la imagen
const $figcaption = document.createElement("figcaption") // Creamos el figcaption
const $figcaptionText = document.createTextNode("Animals") // Texto que ira en la tarjeta

//Agregamos los atributos
$img.setAttribute("src", "https://placeimg.com/200/200/animals")
$img.setAttribute("alt", "Animals")
$figure.classList.add("card")

//Agregar las constantes a la figura
$figure.appendChild($img)
$figure.appendChild($figcaption)
//Agregar la figura a la cartas
$cards.appendChild($figure)

//Otra forma
const $figure2 = document.createElement("figure")
$figure.innerHTML = `
    <img src = "https://placeimg.com/200/200/people"></img>
    <figcaption>People</figcaption>`

//Creacion dinamica
const estaciones = ["Primavera", "Veranos", "Otoño", "Invierno"]
const $ul = document.createElement("ul")

document.body.appendChild($ul)

estaciones.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el
    $ul.appendChild($li)
})

//Insercion Por fragmento - forma optima
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayi",
    "Junio",
    "Julio",
    "Agosto",
    "Septimebre",
    "Octubre",
    "Noviembre",
    "Diciembre",
]

const $ul3 = document.createElement("ul")
const $fragmente = document.createDocumentFragment

meses.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el
    $fragmente.appendChild($li)
})

document.write(<h3>Meses del Año</h3>)
$ul3.appendChild($fragmente)
document.body.appendChild($ul3)