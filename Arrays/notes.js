const notes = ['Note 1', 'Note 2', 'Note 3']


// console.log(notes.pop());
// notes.push('My new note')

// console.log(notes.shift());
// notes.unshift('My first note')

notes[2] = 'Dit is nu de nieuwe note 3'



notes.forEach(function(item, index) {
    console.log(index);
    console.log(item);
})

console.log(notes.length);
console.log(notes);

// counting ... 1
for (let telling = 0; telling <= 2; telling++) {
    console.log(telling);
}

for (let telling = notes.length - 1; telling >= 0; telling--) {
    console.log(notes[telling]);
}