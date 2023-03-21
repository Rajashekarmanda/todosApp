function handleAfterActiveButtonClick(todosListAll, activeButtonEl, completedButtonEl,
    allButtonEl, clearAllButtonEl, inputFieldEl, addButtonEl) {
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
}

function handleAfterCompletedBtnClick(todosListAll, completedButtonEl, activeButtonEl, allButtonEl,
    clearAllButtonEl, inputFieldEl, addButtonEl) {
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
}

function handleAfterAllButtonClick(todosListAll, allButtonEl, activeButtonEl, completedButtonEl,
    clearAllButtonEl, inputFieldEl, addButtonEl) {
        console.log('allbtn')
    inputFieldEl.focus()
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

}
module.exports = { handleAfterActiveButtonClick, handleAfterCompletedBtnClick, handleAfterAllButtonClick }
