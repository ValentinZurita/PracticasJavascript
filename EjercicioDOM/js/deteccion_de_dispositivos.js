
export default function userDeviceInfo(id) {

    const $id = document.getElementById(id)

    //Objeto para detectar que tipo de cel usa
    const isMobile = {
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
        any: function () {
            return (this.android() || this.ios())
        }
    };

    //Objeto para detectar que sistema operativo usa
    const isDesktop = {
        linux: () => navigator.userAgent.match(/linux/i),
        mac: () => navigator.userAgent.match(/mac os/i),
        windows: () => navigator.userAgent.match(/windows nt/i),
        any: function () {
            return (this.linux() || this.mac() || this.windows())
        }
    };

    //Objeto para detectar que navegador usa
    const isBrowser = {
        chrome: () => navigator.userAgent.match(/chrome/i),
        safari: () => navigator.userAgent.match(/safari/i),
        firefox: () => navigator.userAgent.match(/firefox/i),
        opera: () => navigator.userAgent.match(/opera|opera mini/i),
        internetExplorer: () => navigator.userAgent.match(/msie|iemobile/i),
        edge: () => navigator.userAgent.match(/edge/i),
        any: function () {
            return (
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera() ||
                this.internetExplorer() ||
                this.edge()
            )
        },
    };

    //Contenido del div
    $id.innerHTML = `
    <ul>
        <li>User agent: <b>${navigator.userAgent}</b></li>
        <li>phone or desktop?: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;

    //Contenido exclusivo
    if (isBrowser.any()) {
        $id.innerHTML += `<p>Este contenido es exclusivo de ${isBrowser.any()}</p>`;
    }

}