let livros = [];
const api = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

async function buscarApi() {
    const resposta = await fetch(api);
    livros = await resposta.json();
    const livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}

buscarApi();