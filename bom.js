
//Clase 79: BOM - 11 de Julio del 2021
const $btnAbrir = document.getElementById("abrir-ventana")
const $btnCerrar = document.getElementById("cerrar-ventana")
const $btnImprimir = document.getElementById("imprimir-ventana")

let ventana

$btnAbrir.addEventListener("click", () => {
    ventana = window.open("https://bimmaniacos.com")
})

$btnCerrar.addEventListener("click", () => {
    ventana.close()
})

$btnImprimir.addEventListener("click", () => {
    window.print()
})