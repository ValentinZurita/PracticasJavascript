
export default function slider() {

    //Los botones de nuestro slide y todas las slides del slider
    const $nextBtn = document.querySelector(".slider-btns.next")
    const $prevBtn = document.querySelector(".slider-btns.prev")
    const $slides = document.querySelectorAll(".slider-slide")

    //Servira como contador para nuestro slider
    let i = 0

    //Evento que se activa al dar click en alguno de los botones del slider
    document.addEventListener("click", (e) => {

        //Si damos click en el boton siguiente
        if (e.target === $prevBtn) {

            //Prevenimos el comportamiento default
            //Para evitar que # nos lleve al principio de la pagina
            e.preventDefault();

            //Vamos a la slide actual que es la activa y la removemos
            $slides[i].classList.remove("active")

            //Como vamos hacia atras quitamos 1 a la cuenta
            i--

            //Si i es menos a cero quiere decir que llegamos a la primera imagen
            //En ese caso igualamos i a el valor de la ultima para mostrarla
            if (i < 0) {
                i = $slides.length - 1
            }

            //Agregamos la clase active para mostrar la slide
            $slides[i].classList.add("active")

        }

        //Si damos click en el boton next
        if (e.target === $nextBtn) {

            //Prevenimos el comportamiento default
            e.preventDefault()

            //Nos ubicamos en la slide actual y removemos la clase active para ocultarla
            $slides[i].classList.remove("active")

            //Agregamos a i 1 para ir al indice de la siguiente slide
            i++

            //Si el valor de i es mayor a el numero de slides quiere decir que llegamos a la ultima
            //En ese caso reseteamos el valor de i a 0 para mostrar la primera slide
            if (i >= $slides.length) {
                i = 0
            }

            //Agregamos la clase active para mostrar la slide
            $slides[i].classList.add("active")

        }

    })

}