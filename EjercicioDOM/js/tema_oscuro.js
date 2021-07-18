
export default function darkTheme(btn, darkClass) {

    const $themeButton = document.querySelector(btn)
    const $selectors = document.querySelectorAll("[data-dark]")

    let moon = "🌙"
    let sun = "☀️"

    const darkMode = () => {

        $selectors.forEach(el => {
            el.classList.add(darkClass)
        })

        $themeButton.textContent = sun

        localStorage.setItem("theme", "dark")

    }

    const lightMode = () => {

        $selectors.forEach(el => {
            el.classList.remove(darkClass)
        })

        $themeButton.textContent = moon

        localStorage.setItem("theme", "light")

    }

    document.addEventListener("click", e => {

        if (e.target.matches(btn)) {

            if ($themeButton.textContent === moon) {
                darkMode()
            } else {
                lightMode()
            }

        }
    })

    document.addEventListener("DOMContentLoaded", (e) => {

        if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "light")
        if (localStorage.getItem("theme") === "dark") darkMode()
        if (localStorage.getItem("theme") === "light") lightMode()

    })

}