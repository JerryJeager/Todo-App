const bodyTheme = document.querySelector(".body-bg")
const selectTheme = document.querySelector(".theme")
const todoBackgroundImage = document.querySelector(".todo-img")
const lightTheme = document.querySelector(".light-theme")
const darkTheme = document.querySelector(".dark-theme")

lightTheme.addEventListener("click", () => {
    lightTheme.style.display = "none"
    darkTheme.style.display = "block"
    bodyTheme.classList.add("body-bg2")
    todoBackgroundImage.classList.add("todo-img2")
})
darkTheme.addEventListener("click", () => {
    darkTheme.style.display = "none"
    lightTheme.style.display = "block"
    bodyTheme.classList.remove("body-bg2")
    todoBackgroundImage.classList.remove("todo-img2")
})

