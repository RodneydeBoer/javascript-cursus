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


// console.log(notes.pop());
// notes.push('My new note')

// console.log(notes.shift());
// notes.unshift('My first note')

// notes[2] = 'Dit is nu de nieuwe note 3'



// notes.forEach(function(item, index) {
//     console.log(index);
//     console.log(item);
// })

console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function(note, index) {
    console.log(note);
    return note.titel === 'Verbeteringen'
})

console.log(index);