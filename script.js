const theme = document.querySelector(".theme")
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
const todoText = document.querySelectorAll(".todo-content")
const todoArr = []
let todoNum = 0
const todoItemsList = []
let numberOfTodo = 0

theme.addEventListener("click", () => {
    bodyTheme.classList.toggle("body-bg-light")
    todoBackgroundImage.classList.toggle("todo-img-light")
    inputTodoBg.classList.toggle("input-todo-light")
    newTodo.classList.toggle("type-todo-light")
    displayTodoListItems.classList.toggle("display-todo-light")
    todoText.forEach(item => item.classList.toggle("new-todo-light"))
})

lightTheme.addEventListener("click", () => {
    lightTheme.style.display = "none"
    darkTheme.style.display = "block"
})

darkTheme.addEventListener("click", () => {
    darkTheme.style.display = "none"
    lightTheme.style.display = "block"
})

enterTodo.addEventListener("click", () => {
    document.querySelector(".display-todo").style.display = "block"
    displayTodoList()
})

function displayTodoList() {
    let todoParse = ""
    let todoInfoParse = ""
    let items = ""
    if (newTodo.value) {
        numberOfTodo = document.getElementsByClassName('todo-content').length
        todoArr.push(newTodo.value)
        // todoItemsList.push(newTode.value)
        localStorage.setItem("todo", JSON.stringify(todoArr))
        newTodo.value = ""
        for (let i = 0; i < todoArr.length; i++) {
            todoParse += `
                <div class="check-todo">
                    <button type="submit" class="check-btn"></button>
                    
                    <div class="new-todo">
                        <p class="todo-content">${todoArr[i]}</p>
                    </div>
                </div>
                <div class="del-todo">
                    <img src="./images/icon-cross.svg" alt="delete- button" class="del-btn">
                </div>
            
            `
            todoArr.pop()
        }

        todoInfoParse = document.querySelector(".todo-info")
        document.querySelector('.todo-info').style.display = "flex";
        //updating number of todo left
        todoNum = todoNum + 1
        document.querySelector(".todo-number").textContent = `${todoNum} items left`
        // updateTodoNum((numberOfTodo + 1))
        //adding todo before the todo info containing number of todo left
        items = document.createElement("div")
        items.classList.add("todo")
        items.innerHTML = todoParse
        document.querySelector('.todo-info').parentNode.insertBefore(items, todoInfoParse)

        //enabling checking and deleting of Todos
        checkTodo()
        deleteTodo()
        // clearing completed todo
        document.querySelector(".clear-completed").addEventListener("click", clearCompleted)
    }
}

function checkTodo() {
    const checkTodo = document.querySelectorAll(".check-btn")
    const btn = checkTodo[checkTodo.length - 1];
    btn.addEventListener("click", () => {
        btn.style.border = "none"
        btn.classList.add("checked-btn")
        btn.innerHTML = `<img src="./images/icon-check.svg" alt="">`
        btn.parentElement.querySelector('p').classList.add("checked-todo")
        btn.parentElement.parentElement.classList.add("clear-completed-todo")
        updateTodoNum()
    }, { once: true })
}

function deleteTodo() {
    console.log('DeleteTodo called');
    const delTodoBtn = document.querySelectorAll(".del-todo");
    const btn = delTodoBtn[delTodoBtn.length - 1];
    btn.addEventListener("click", (e) => {
        btn.parentElement.classList.add("deleted")
        if (e.target.parentNode.parentNode.firstElementChild.firstElementChild.classList.contains("checked-btn"))
            return
        updateTodoNum()
    })
}

function updateTodoNum() {
    document.querySelector(".todo-number").textContent = `${--todoNum} items left`
}

function clearCompleted(){
    const clearCompletedTodo = document.querySelectorAll(".clear-completed-todo")
    clearCompletedTodo.forEach(item => item.style.display = "none")
}
