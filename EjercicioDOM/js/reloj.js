const doc = document

export function digitalClock(clock, btnPlay, btnStop) {

    //Para guardar la funcion que colocara el reloj
    //Se usara en btnPlay y btnStop para acceder al reloj que creemos
    let clockTempo

    //Eventos de click en los botones del reloj
    doc.addEventListener("click", (e) => {

        //Si el usuario da click en el boton Play se muestra el reloj dentro del div con #reloj
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let watch = new Date().toLocaleTimeString();
                doc.querySelector(clock).innerHTML = `<h3>${watch}</h3>`
            }, 1000);

            //Deshabilitamos el reloj
            e.target.disabled = true

        }

        //Si el usuario da click en el boton Desactivar se remueve el setInterval anterior
        //y se vuelve a habilitar el boton de play
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo)
            doc.querySelector(btnPlay).disabled = false
        }

    })
}

export function alarm(sound, btnPlay, btnStop) {

    //Creamos un elemento audio
    const $audio = doc.createElement("audio")
    $audio.src = sound //Le insertamos el audio

    //alarmTempo guarda la funcion que controla la repeticion de la alarma cada segundo
    let alarmTempo

    doc.addEventListener("click", (e) => {

        //Si el usuario da click en el boton play reproducimos una alarma
        if (e.target.matches(btnPlay)) {

            //Funcion para hacer sonar la alarma en 2 seg
            alarmTempo = setTimeout(() => {
                //Reproducimos el audio
                $audio.play()
            }, 2000);

            //Deshabilitamos el boton play
            e.target.disabled = true;

        }

        if (e.target.matches(btnStop)) {

            //Cancelamos el TimeOut
            clearTimeout(alarmTempo);
            //Pausamos el audio
            $audio.pause();
            //Ponemos el audio en el segundo 0
            $audio.currentTime = 0
            //Buscamos el boton play y lo habilitamos
            doc.querySelector(btnPlay).disabled = false

        }
    })



}