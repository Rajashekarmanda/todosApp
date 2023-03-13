let allButtonEl = document.getElementById("allButton")
let activeButtonEl = document.getElementById("activeButton")
let completedButtonEl = document.getElementById("completedButton")

let inputFieldEl = document.getElementById("inputField")
let addButtonEl = document.getElementById("addButton")
let clearAllButtonEl = document.getElementById('clearAllButton')

let todosContainerEl = document.getElementById("todoItemsContainer")
let todoItemsMainContainerEl = document.getElementById("todoItemsMainContainer")

let todosListAll = []
let count = 0
clearAllButtonEl.classList.add('hidden-class')

inputFieldEl.addEventListener("input", function (event) {
    inputFieldEl.value = event.target.value
    //console.log(event.target.value)
})

addButtonEl.addEventListener("click", function (event) {
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

    checkboxEl.addEventListener('click', function (e) {

        // console.log('clicked e')

        todoContentEl.classList.toggle('strike-off-text')

        let filterTodosList = todosListAll.filter((each) => each.element === divEl)

        let filterTodosListRest = todosListAll.filter((each) => each.element !== divEl)

        let todoToggleItem;

        for (let each of filterTodosList) {

            if (each.active === true && each.completed === false) {

                todoToggleItem = {
                    id: count,
                    element: divEl,
                    todoItem: todoContentEl.textContent,
                    all: true,
                    active: false,
                    completed: true,
                    imageEl: deleteIconEl
                }
            } else {
                todoToggleItem = {
                    id: count,
                    element: divEl,
                    todoItem: todoContentEl.textContent,
                    all: true,
                    active: true,
                    completed: false,
                    imageEl: deleteIconEl
                }
            }
        }
        todosListAll = [...filterTodosListRest, todoToggleItem]

        // localStorage.setItem('todoList',todosListAll)

    })

    deleteIconEl.addEventListener('click', function () {

        console.log(divEl)
        divEl.remove()
    })

})

activeButtonEl.addEventListener('click', function () {
    for (let eachItem of todosListAll) {
        if (eachItem.active === false) {
            eachItem.element.classList.add('hidden-class')
            eachItem.imageEl.classList.add('hidden-class')
        } else {
            eachItem.element.classList.remove('hidden-class')
        }
    }
    activeButtonEl.classList.add('active-button-class')
    completedButtonEl.classList.remove('active-button-class')
    allButtonEl.classList.remove('active-button-class')
    clearAllButtonEl.classList.add('hidden-class')
    inputFieldEl.classList.remove('hidden-class')
    addButtonEl.classList.remove('hidden-class')
})

completedButtonEl.addEventListener('click', function () {
    for (let eachItem of todosListAll) {
        if (eachItem.completed === false) {
            eachItem.element.classList.add('hidden-class')
        } else {
            eachItem.element.classList.remove('hidden-class')
            eachItem.imageEl.classList.remove('hidden-class')
        }
    }
    completedButtonEl.classList.add('active-button-class')
    activeButtonEl.classList.remove('active-button-class')
    allButtonEl.classList.remove('active-button-class')
    clearAllButtonEl.classList.remove('hidden-class')
    inputFieldEl.classList.add('hidden-class')
    addButtonEl.classList.add('hidden-class')
})

allButtonEl.addEventListener('click', function () {
    for (let eachItem of todosListAll) {
        eachItem.element.classList.remove('hidden-class')
        eachItem.imageEl.classList.add('hidden-class');
    }
    allButtonEl.classList.add('active-button-class')
    activeButtonEl.classList.remove('active-button-class')
    completedButtonEl.classList.remove('active-button-class')
    clearAllButtonEl.classList.add('hidden-class')
    inputFieldEl.classList.remove('hidden-class')
    addButtonEl.classList.remove('hidden-class')
})

clearAllButtonEl.addEventListener('click', function () {
    for (let eachTodo of todosListAll) {
        if (eachTodo.completed === true) {
            eachTodo.element.remove()
        }
    }
})
