const nome = documento.getElementById('nome')
const preco = documento.getElementById('preco')
const categoria = documento.getElementById('categoria')

console.log(nome)
 
console.table(nome, preco, categoria)

function imprimirDadosDoFormulario() {

    const produto = {
        nome: nome.value,
        preco: preco.value,
        categoria: categoria.value,
    }
    console.log{produto}
}
