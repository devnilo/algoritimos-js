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

/* A função menorValor() é um exemplo de algoritmo de crescimento linear: o “custo” (referente à quantidade total de operações necessárias) 
depende da quantidade de elementos na lista; uma lista de 10 elementos resulta em 10 operações de busca e uma lista de 1000 elementos 
resulta em 1000 operações. Ou seja, menorValor() tem complexidade de O(n), onde n é o tamanho (quantidade de elementos) da lista.
*/