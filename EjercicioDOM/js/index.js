import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import { countdown } from "./cuenta_regresiva.js";
import scrollTopBottom from "./scroll_top_bottom.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_de_dispositivos.js";
import networkStatus from "./deteccion_de_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busqueda.js";
import draw from "./sorteo.js";

const doc = document

doc.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("./assets/Nani.mp3", "#activar-alarma", "#desactivar-alarma")
    countdown("countdown", new Date("Jan 5, 2022 15:37:25"), "AL FIN :D")
    scrollTopBottom(".scroll-top-btn")
    responsiveMedia(
        "youtube",
        "(min-width : 1024px)",
        `<a href = "https://youtu.be/vxKBHX9Datw" target="blank", rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/vxKBHX9Datw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    )
    responsiveMedia(
        "gmaps",
        "(min-width : 1024px)",
        `<a href = "https://goo.gl/maps/goc3e3ZF8zRwZsrQ7" target="blank", rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32332.752710337634!2d139.75502439353485!3d35.673417616948726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2zVG9raW8sIEphcMOzbg!5e0!3m2!1ses-419!2smx!4v1626630928142!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    )
    responsiveTester("responsive-tester")
    userDeviceInfo("user-agent")
    webCam("webcam")
    getGeolocation("geolocation")
    searchFilter(".card-filter", "card")
    draw("#winner-btn", ".player")
})

doc.addEventListener("keydown", (e) => {
    shortcuts(e)
    moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")
networkStatus()