export function countdown(countdown, date, message) {


    let interval = setInterval(() => {

        //Obtenemos la fecha y restamos la fecha ingresada
        let now = new Date().getTime()
        let distance = date - now

        //Calculos para los dias, horas, minutos y segundos
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(distance / (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        //Mostramos el resultado en el elemento
        const element = document.getElementById(countdown)
        console.log(element)
        element.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        //Si la cuenta llega a cero
        if (distance < 0) {
            clearInterval(interval)
            element.innerHTML = message
        }

    }, 1000)



}