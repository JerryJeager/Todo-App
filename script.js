const bodyTheme = document.querySelector(".body-bg")
const selectTheme = document.querySelector(".theme")
const todoBackgroundImage = document.querySelector(".todo-img")
const lightTheme = document.querySelector(".light-theme")
const darkTheme = document.querySelector(".dark-theme")
const enterTodo = document.querySelector(".input-btn")
const newTodo = document.querySelector(".type-todo")
const inputTodoBg = document.querySelector(".input-todo")
const todoList = document.querySelector(".todo-content")
const displayTodoListItems = document.querySelector(".display-todo")
const todoBg = document.querySelector(".todo")
const todoArr = []

let darkMode = true
lightTheme.addEventListener("click", () => {
    darkMode = false
    lightTheme.style.display = "none"
    darkTheme.style.display = "block"
    bodyTheme.classList.add("body-bg2")
    todoBackgroundImage.classList.add("todo-img2")
    inputTodoBg.classList.add("input-todo2")
    newTodo.classList.add("type-todo2")
    displayTodoListItems.classList.add("display-todo2")
    // todoBg.classList.add("todo2")
})
darkTheme.addEventListener("click", () => {
    darkMode = true
    darkTheme.style.display = "none"
    lightTheme.style.display = "block"
    bodyTheme.classList.remove("body-bg2")
    todoBackgroundImage.classList.remove("todo-img2")
    inputTodoBg.classList.remove("input-todo2")
    newTodo.classList.remove("type-todo2")
    displayTodoListItems.classList.remove("display-todo2")
    // todoBg.classList.remove("todo2")
})
enterTodo.addEventListener("click", () => {
    if(darkMode == true){
        displayTodoListItems.style.border = "2px solid var(--very-dark-desaturated-blue)"
    }else{
        displayTodoListItems.style.border = "2px solid hsl(0, 0%, 100%)"
    }
    
    displayTodoList()
    // deleteTodo()
})

function displayTodoList() {
    let todoParse = ""
    if (newTodo.value !== "") {
        todoArr.push(newTodo.value)
        localStorage.setItem("todo", JSON.stringify(todoArr))
        newTodo.value = ""
        for (let i = 0; i < todoArr.length; i++) {
            todoParse += `
            <div class="todo">
                <div class="check-todo">
                    <button type="submit" class="check-btn"></button>
                    
                    <div class="new-todo">
                        <p class="todo-content">${todoArr[i]}</p>
                    </div>
                </div>
                <div class="del-todo">
                    <img src="./images/icon-cross.svg" alt="delete- button" class="del-btn">
                </div>
            </div>
            `
            todoArr.pop()
        }
        displayTodoListItems.innerHTML += todoParse
        checkTodo()
    }
}

function checkTodo() {
    const checkTodo = document.querySelectorAll(".check-btn")
    checkTodo.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.style.border = "none"
            btn.classList.add("checked-btn")
            btn.innerHTML = `<img src="./images/icon-check.svg" alt="">`
            btn.parentElement.querySelector('p').classList.add("checked-todo")
        })
    })
    // Deleting a todo
    const delTodoBtn = document.querySelectorAll(".del-todo")
    delTodoBtn.forEach(del => {
        del.addEventListener("click", () => {
            console.log("clicked")
            console.log(del.parentElement)
            del.parentElement.classList.add("deleted")
        })
    })
}