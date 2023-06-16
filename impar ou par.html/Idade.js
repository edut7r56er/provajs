function calidade() {

    let agora = new Date
    let ano = agora.getFullYear()

    let nasc = Number(window.prompt('ano em q nasceu'))
    let idade = ano - nasc

    let saida = document.getElementById('Saida')
    saida.innerHTML = 'Quem nasceu em ${nasc} vai ter ${idade} em ${ano}'


}