
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {

    let breakPoint = window.matchMedia(mq)

    const responsive = (e) => {
        if (e.matches) {
            document.getElementById(id).innerHTML = desktopContent
        } else {
            document.getElementById(id).innerHTML = mobileContent
        }
    }

    breakPoint.addListener(responsive)
    responsive(breakPoint)
}