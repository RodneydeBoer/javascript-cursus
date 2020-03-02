const para = document.querySelectorAll('p')

para.forEach(function(paragraaf) {
    if (paragraaf.textContent.includes('doen')) {
        paragraaf.remove()
    }
});