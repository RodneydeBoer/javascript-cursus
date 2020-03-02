const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos!`)

for (let telling = 0; telling < todos.length; telling++) {
    const num = telling + 1
    const todo = todos[telling]
    console.log(`${num}. ${todo}`)
}