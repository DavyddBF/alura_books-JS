const btnOrdena = document.querySelector('#btnOrdenarPorPreco')

btnOrdena.addEventListener('click', () => {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
})