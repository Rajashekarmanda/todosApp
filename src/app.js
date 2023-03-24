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

    divEl.innerHTML =
        `<input type="checkbox" class="todo-item-checkbox" id="checkboxEl${count}"/>            
        <label class="todo-item-content" for="checkboxEl${count}" id="label${count}"> ${inputFieldEl.value}</label>            
        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" class="delete-image hidden-class" id="delete${count}"/>`

    let deleteIconEl = document.getElementById(`delete${count}`)
    let todoContentEl = document.getElementById(`label${count}`)
    let checkboxEl = document.getElementById(`checkboxEl${count}`)
    inputFieldEl.value = ''

    todosListAll.push({id: `todoContainer${count + 1}`,element: divEl,todoItem: todoContentEl.textContent,all: true,active: true,completed: false,imageEl: deleteIconEl})
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
