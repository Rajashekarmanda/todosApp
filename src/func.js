function activeBtnTask(todosListAll, ...argumetsArray) {
    document.getElementById('inputField').focus()
    todosListAll.map(eachItem => {
        if (eachItem.active === false) {
            eachItem.element.classList.add('hidden-class')
            eachItem.imageEl.classList.add('hidden-class')
        } else {
            eachItem.element.classList.remove('hidden-class')
        }
    })
    argumetsArray.map(each => {
        if (each.id === 'activeButton') document.getElementById(`${each.id}`).classList.add('active-button-class')
        else if (each.id === 'completedButton' || each.id == 'allButton') document.getElementById(`${each.id}`).classList.remove('active-button-class')
        else if (each.id === 'clearAllButton') document.getElementById(`${each.id}`).classList.add('hidden-class')
        else document.getElementById(`${each.id}`).classList.remove('hidden-class')
    })
}
function completedBtnTask(todosListAll, ...argumetsArray) {
    document.getElementById('inputField').focus()
    todosListAll.map(eachItem => {
        if (eachItem.completed === false) {
            eachItem.element.classList.add('hidden-class')
        } else {
            eachItem.element.classList.remove('hidden-class')
            eachItem.imageEl.classList.remove('hidden-class')
        }
    })
    argumetsArray.map(each => {
        if (each.id === 'completedButton') document.getElementById(`${each.id}`).classList.add('active-button-class')
        else if (each.id === 'activeButton' || each.id == 'allButton') document.getElementById(`${each.id}`).classList.remove('active-button-class')
        else if (each.id === 'clearAllButton') document.getElementById(`${each.id}`).classList.remove('hidden-class')
        else document.getElementById(`${each.id}`).classList.add('hidden-class')
    })
}
function allBtnTask(todosListAll, ...argumetsArray) {
    document.getElementById('inputField').focus()
    todosListAll.map(eachItem => {
        eachItem.element.classList.remove('hidden-class')
        eachItem.imageEl.classList.add('hidden-class');
    })
    argumetsArray.map(each => {
        if (each.id === 'allButton') document.getElementById(`${each.id}`).classList.add('active-button-class')
        else if (each.id === 'activeButton' || each.id == 'completedButton') document.getElementById(`${each.id}`).classList.remove('active-button-class')
        else if (each.id === 'clearAllButton') document.getElementById(`${each.id}`).classList.add('hidden-class')
        else document.getElementById(`${each.id}`).classList.remove('hidden-class')
    })
}
module.exports = { activeBtnTask, completedBtnTask, allBtnTask }
