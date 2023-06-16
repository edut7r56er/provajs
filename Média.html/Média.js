function maior() {

    let n1 = Number(window.prompt('digite'))
    let n2 = Number(window.prompt('digite'))

    let res = document.querySelector('section#saida')
    if (n1 > n2) {
        res.innerHTML = 'entre ${n1} e ${n2}, <mark>${n1}</mark> é maior'
    } else if (n1 < n2) {
        res.innerHTML = 'entre ${n1} e ${n2}, ${n2} é maior'
    } else {
        res.innerHTML = ' entre ${n1} e ${n2}, são iguais'
    }

}