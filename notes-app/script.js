const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


document.getElementById('create-note').addEventListener('click', function(e) {
    e.target.textContent = 'De button is clicked'
})

document.getElementById('remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

document.getElementById('zoek-tekst').addEventListener('input', function(e) {
    console.log(e.target.value);
})