
//Funcion para agregar atajas de teclado
const doc = document
let x = 0
let y = 0

export function moveBall(e, ball, stage) {

    //Constantes de la bola y el escenario
    const $ball = doc.querySelector(ball)
    const $stage = doc.querySelector(stage)

    let limitBall = $ball.getBoundingClientRect()
    let limitStage = $stage.getBoundingClientRect()

    //Dependiendo de que direccion eligen se mueve la bola
    switch (e.keyCode) {

        //Mover a la derecha
        case 37:
            if (limitBall.left > limitStage.left) {
                e.preventDefault()
                x--
            }
            break

        //Mover arriba
        case 38:
            if (limitBall.top > limitStage.top) {
                e.preventDefault()
                y--
            }
            break

        //Mover a la izquiera
        case 39:
            if (limitBall.right < limitStage.right) {
                e.preventDefault()
                x++
            }
            break

        //Mover abajo
        case 40:
            if (limitBall.bottom < limitStage.bottom) {
                e.preventDefault()
                y++
            }
            break

        default:
            break;

    }

    //Movemos la bola
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`

}


export function shortcuts(e) {

    console.log(e.key)
    console.log(e.type)
    console.log(e)

    if (e.key === "a") {
        alert("Hey! Que estas haciendo?")
    }

    if (e.key === "p") {
        prompt("Que hay de nuevo? Cuentame de ti:")
    }

    if (e.key === "c") {
        confirm("Puto se aceptas. Te la comes si cancelas")
    }

}

