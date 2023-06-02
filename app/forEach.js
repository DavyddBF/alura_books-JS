const secaoLivros = document.querySelector('#livros')
const valorTotalLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')

function exibirLivrosNaTela(arrayLivros) {
    secaoLivros.innerHTML = ''
    valorTotalLivrosDisponiveis.innerHTML = ''

    arrayLivros.forEach(livro => {
        //const disponibilidade = verificaDisponibilidade(livro)
        const disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        secaoLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src=${livro.imagem} alt="${livro.alt}">
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    })
}

// function verificaDisponibilidade(livro) {
//     if (livro.quantidade > 0) {
//         return 'livro__imagens'
//     } else {
//         return 'livro__imagens indisponivel'
//     }
// }