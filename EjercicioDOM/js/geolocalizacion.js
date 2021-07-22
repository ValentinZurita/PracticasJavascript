
export default function getGeolocation(id) {

    const $id = document.getElementById(id)

    const options = {
        enableHighAccuracy : true,
        timeout : 5000,
        maximumAge : 0
    }

    const succes = (position) => {
        let coords = position.coords
        console.log(position);

        $id.innerHTML =
            `<p>Tu posicion actual es:</p>
             <ul>
                 <li>Latitud: <b>${coords.latitude}</b></li>
                 <li>Longitud: <b>${coords.longitude}</b></li>
                 <li>Precisión: <b>${coords.accuracy}</b> metros</li>
             </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">
                Ver en Google Maps
            </a>`
    }

    const error = (error) => {
        $id.innerHTML =
            `<p><mark>Error: ${error.code}: ${error.message}</mark></p>`
        console.log(error)
    }

    navigator.geolocation.getCurrentPosition(succes, error, options)
};