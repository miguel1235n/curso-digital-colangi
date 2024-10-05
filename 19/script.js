const titulo = document.getElementById('titulo')

titulo.innerText = 'Pordutos'

const produtos = {'teclado' ,'mouse' ,'monitor'}

const ListaDeProdutos = 
document.getElementById('lista-de-produtos')

produto.forEach((produto) => {
    ListaDeProdutos.innerHTML +='
    
    <li>${produto}</li>'

}
    
);

