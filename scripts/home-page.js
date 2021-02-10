window.addEventListener("DOMContentLoaded", () => {
    document
        .querySelector(".fa-search")
        .addEventListener("click", e => {
            document
                .querySelectorAll(".masthead__search")
                .forEach(ele => {
                    ele.classList.remove("masthead__search--hidden");
                })
    })
})
