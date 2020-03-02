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

// Challenge area

// print: You have 2 todos left (p element)
const openTaken = todos.filter(function(todo) {
    return !todo.completed
})

const opsomming = document.createElement('p')
opsomming.textContent = `Je hebt nog ${openTaken.length} taken te doen`
document.querySelector('body').appendChild(opsomming)

// add a p for each todo above (use text value)

todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
});
// listen button
document.querySelector('button').addEventListener('click', function(e) {
    console.log('Add a new todo');
})

// listen to nieuwe input
document.getElementById('nieuwe-todo').addEventListener('input', function(e) {
    console.log(e.target.value);
})