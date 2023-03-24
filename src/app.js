const { activeBtnTask, completedBtnTask, allBtnTask } = require('../src/func.js')

let allButtonEl = document.getElementById("allButton")
let activeButtonEl = document.getElementById("activeButton")
let completedButtonEl = document.getElementById("completedButton")
let inputFieldEl = document.getElementById("inputField")
let addButtonEl = document.getElementById("addButton")
let clearAllButtonEl = document.getElementById('clearAllButton')
let todosContainerEl = document.getElementById("todoItemsContainer")
clearAllButtonEl.classList.add('hidden-class')
inputFieldEl.focus()

let todosListAll = []
let count = 0

addButtonEl.addEventListener("submit", function (event) {
    event.preventDefault()
    let divEl = document.createElement('div')
    divEl.setAttribute('class', 'todo-item-container')
    divEl.setAttribute('id', `todoContainer${count + 1}`)
    todosContainerEl.appendChild(divEl)

    let checkboxEl = document.createElement("input")
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.setAttribute('class', 'todo-item-checkbox')
    checkboxEl.setAttribute('id', `checkboxEl${count}`)
    divEl.appendChild(checkboxEl)

    let todoContentEl = document.createElement("label")
    todoContentEl.setAttribute('class', 'todo-item-content')
    todoContentEl.setAttribute('for', `checkboxEl${count}`)
    todoContentEl.textContent = inputFieldEl.value
    divEl.appendChild(todoContentEl)
    inputFieldEl.value = ''

    let deleteIconEl = document.createElement("img")
    deleteIconEl.setAttribute('src', 'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png')
    deleteIconEl.setAttribute('class', 'delete-image')
    deleteIconEl.classList.add('hidden-class')
    divEl.appendChild(deleteIconEl)

    todosListAll.push({
        id: `todoContainer${count + 1}`,
        element: divEl,
        todoItem: todoContentEl.textContent,
        all: true,
        active: true,
        completed: false,
        imageEl: deleteIconEl
    })
    count++
    inputFieldEl.focus()

    checkboxEl.addEventListener('click', function (e) {
        todoContentEl.classList.toggle('strike-off-text')
        let filterTodosList = todosListAll.filter((each) => each.element === divEl)
        let filterTodosListRest = todosListAll.filter((each) => each.element !== divEl)
        let todoToggleItem;

        filterTodosList.map((eachTodo) => {
            (eachTodo.active === true && eachTodo.completed === false) ? todoToggleItem = {
                id: count,
                element: divEl,
                todoItem: todoContentEl.textContent,
                all: true,
                active: false,
                completed: true,
                imageEl: deleteIconEl
            } : todoToggleItem = {
                id: count,
                element: divEl,
                todoItem: todoContentEl.textContent,
                all: true,
                active: true,
                completed: false,
                imageEl: deleteIconEl
            }
        })
        todosListAll = [...filterTodosListRest, todoToggleItem]
    })
    deleteIconEl.addEventListener('click', () => divEl.remove())
})
let buttonElmentsArray = [activeButtonEl, allButtonEl, completedButtonEl, clearAllButtonEl, inputFieldEl, addButtonEl]

inputFieldEl.addEventListener("input", (event) => inputFieldEl.value = event.target.value)
activeButtonEl.addEventListener('click', () => activeBtnTask(todosListAll, ...buttonElmentsArray))
completedButtonEl.addEventListener('click', () => completedBtnTask(todosListAll, ...buttonElmentsArray))
allButtonEl.addEventListener('click', () => allBtnTask(todosListAll, ...buttonElmentsArray))
clearAllButtonEl.addEventListener('click', () => todosListAll.map(eachTodo => (eachTodo.completed === true ? eachTodo.element.remove() : '')))
