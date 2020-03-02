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

const filters = {
    zoekText: ''
}
const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.zoekText.toLowerCase())
    })
    document.getElementById('notes').innerHTML = ''
    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.getElementById('create-note').addEventListener('click', function(e) {
    e.target.textContent = 'De button is clicked'
})

document.getElementById('remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

document.getElementById('zoek-tekst').addEventListener('input', function(e) {
    filters.zoekText = e.target.value
    renderNotes(notes, filters)
})