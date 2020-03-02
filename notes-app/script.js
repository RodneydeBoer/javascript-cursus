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

// query and remove
// const p = document.querySelector('p')
// p.remove()

// query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    p.textContent = '******';
    // console.log(p.textContent)
    // p.remove()
});

// Challenge area
// Add a new element
const nieuwPara = document.createElement('p')

nieuwPara.textContent = 'Dit is een nieuwe p vanuit js '

document.querySelector('main').appendChild(nieuwPara)