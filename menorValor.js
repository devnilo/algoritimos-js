// puxando o arquivo listaLivros para o arquivo index
const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].Preco < arrProdutos[maisBarato].Preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

// exportando essa function para utilizarmos em outros arquivos
module.exports = menorValor;