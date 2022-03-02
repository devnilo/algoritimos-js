const listaLivros = require('./arrays');
const trocaLugar = require('./encontraMenores')

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let varTemp = particiona(array, esquerda, direita)
    }

    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    
    let atualEsq = esquerda; // 0
    let atualDir = direita; // 10

    while (atualEsq <= atualDir) {
        while (array[atualEsq.preco < pivo.preco]) {
            atualEsq++
        }

        while (array[atualDir.preco > pivo.preco]) {
            atualDir--
        }

        if (atualEsq <= atualDir) {

        }
    }
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))