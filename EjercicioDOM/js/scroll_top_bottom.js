

export default function scrollTopBottom(btn) {

    const $scrollBtn = document.querySelector(btn)

    window.addEventListener("scroll", () => {

        let scrollTop = document.documentElement.scrollTop || window.pageYOffset

        if (scrollTop > 600) {
            $scrollBtn.classList.remove("hidden")
        } else {
            $scrollBtn.classList.add("hidden")
        }

    })

    document.addEventListener("click", (e) => {

        if (e.target.matches(btn)) {
            window.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }

    })

}