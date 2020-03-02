const notes = [{
    titel: 'Mijn volgende trip',
    body: 'Ik zou graag naar Spanje gaan'
}, {
    titel: 'Verbeteringen',
    body: 'Ik zou graag Angular willen leren'
}, {
    titel: 'Aanpassingen',
    body: 'Nieuwe motor kopen'
}]

const findNote = function(notes, noteTitel) {
    return notes.find(function(note, index) {
        return note.titel.toLowerCase() === noteTitel.toLowerCase()
    })
}

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.titel.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'en'));




// const findNote = function(notes, noteTitel) {
//     const index = notes.findIndex(function(note, index) {
//         return note.titel.toLowerCase() === noteTitel.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'verbeteringen')
console.log(note);