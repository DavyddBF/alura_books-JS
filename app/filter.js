const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', () => {
    const categoria = btn.value
    const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponiveis() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorLivrosDisponiveis(valorTotal)
    }
}))

// Funções que retornam parametros de comparação, para usar no código acima
function filtrarPorDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function exibirValorLivrosDisponiveis(valorTotal) {
        valorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
         <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}

// Codigo do curso
// botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// function filtrarLivros() {
//     const elementoBtn = document.getElementById(this.id)
//     const categoria = elementoBtn.value

//     const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponiveis() : filtrarPorCategoria(categoria)
//     exibirLivrosNaTela(livrosFiltrados)

//     if (categoria == 'disponivel') {
//         exibirValorLivrosDisponiveis()
//     }
// }