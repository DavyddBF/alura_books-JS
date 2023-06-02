require 'net/http'
require 'json'

livros = []
api = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

def buscar_api(api)
    uri = URI(api)
    resposta = Net::HTTP.get(uri)
    livros = JSON.parse(resposta)
    exibir_livros_na_tela(livros)
end

def exibir_livros_na_tela(livros)
    livros.each do |livro|
        puts "Título: #{livro['titulo']}"
        puts "Autor: #{livro['autor']}"
        puts "Ano: #{livro['ano']}"
        puts "===================="
    end
end

buscar_api(api)