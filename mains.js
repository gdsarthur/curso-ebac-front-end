const form = document.getElementById("form-agenda")
var linhas = ""
const nomes = []
const numero = []

form.addEventListener("submit", function(e) {
    e.preventDefault()

    adicionalinha()
    atualizaTabela()
})

function adicionalinha() {
    const inputNomeContato = document.getElementById("nome-contato")
    const inputNumeroContato = document.getElementById("numero-contato")

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já está na sua agenda`)
    } 
    else {
    nomes.push(inputNomeContato.value)
    numero.push(parseFloat(inputNumeroContato.value))
    
    var linha = `<tr>`
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`
    linha += `</tr>`

    linhas += linha

    }

    inputNomeContato.value = ""
    inputNumeroContato.value = ""
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}
