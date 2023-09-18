function cadastrarPessoa(){
    let nome = document.querySelector("#nome").value
    localStorage.setItem("nome",nome)
    window.location.href = "bemvindo.html";
}
function cancelarPessoa(){
    localStorage.removeItem("nome")
    document.querySelector("p").innerHTML = `Inscrição Cancelada 😧 `
}



