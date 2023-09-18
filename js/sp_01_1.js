document.addEventListener("DOMContentLoaded", function () {
    // Chama a função bemvindo quando a página HTML estiver carregada
    escreverBemVindo();
});

function escreverBemVindo() {
    let nome = localStorage.getItem("nome")
    let resp = document.querySelector("p")
    let btnCancela = document.querySelector("#btnCancela")
    if (nome != null) {
        resp.innerHTML = `seja bem vindo ${nome}`
        btnCancela.style.display = "block"
    } else {
        resp.innerHTML = `😒 não tem nem usuário cadastrado!`
        btnCancela.style.display = "none"
    }

}