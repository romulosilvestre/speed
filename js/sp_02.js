
function pegaX() {
    let x = Number.parseInt(document.querySelector("#numx").value)
    return x
}

function pegaY() {
    let y = Number.parseInt(document.querySelector("#numy").value)
    return y
}

function somar() {
    let soma = pegaX() + pegaY()
    let resposta = document.querySelector("p")
    localStorage.setItem("x",pegaX())
    localStorage.setItem("y",pegaY())
    localStorage.setItem("op","+")    
    resposta.innerHTML = soma
}

function subtrair() {
    let sub = pegaX() - pegaY()
    let resposta = document.querySelector("p")
    resposta.innerHTML = sub
}

function multiplicar() {
    let multi = pegaX() * pegaY()
    let resposta = document.querySelector("p")
    resposta.innerHTML = multi
}

function dividir() {
    let divi = pegaX() / pegaY()
    let resposta = document.querySelector("p")
    resposta.innerHTML = divi
}

function obterResto() {
    let resto = pegaX() % pegaY()
    let resposta = document.querySelector("p")
    resposta.innerHTML = resto
}

