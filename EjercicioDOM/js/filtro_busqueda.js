export default function searchFilter(input, selector) {

    //Listener al documento cuando el usuario termina de teclear algo en el input
    document.addEventListener("keyup", (e) => {
        if (e.target.matches(input)) {

            //Seleccionamos todos las figuras (cartas) y comparamos con su figcaption pasandolo 
            //a minuscala, despues agregamos o quitamos la clase para quitarlo del dom o ponerlo
            document.querySelectorAll(selector).forEach((el) =>
                el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.remove("filter")
                    : el.classList.add("filter")
            );

            //Si el usuario teclea escape ponemos el valor en "" para que aparezcan todas las cartas
            if (e.key === "Escape") {
                e.target.value = ""
            }
        }
    })

}