const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Challenge area
// 1. create form with a single input for todo text
// 2. setup an submit handler and cancel the default action 
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. rererender the application
// 5. Clear input value

document.getElementById('addtodo').addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(e.target.elements.nieuw.value)
    todos.push({
        text: e.target.elements.nieuw.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.nieuw.value = ' '
})

// Challenge area
// 1. create a checkbox and setup event listener > hide completed
// 2. create hideCompleted filter (default false)
// 3.Update hideCompleted and rerender list on checkbox Change 
// 4. setup renderTodos to remove completed items
document.getElementById('verberg').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})