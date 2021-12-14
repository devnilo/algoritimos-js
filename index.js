// puxando o arquivo listaLivros para o arquivo index
const livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].Preco < livros[maisBarato].Preco) {
        maisBarato = atual;
    }
}

console.log(`O livro mais barato é sobre ${livros[maisBarato].Titulo}, e está custando ${livros[maisBarato].Preco} reais.`);