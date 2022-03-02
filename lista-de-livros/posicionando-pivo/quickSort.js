const listaLivros = require('./arrays');
const trocaLugar = require('./encontraMenores')

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);

        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }

        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
    return array;
}

function particiona(array, esquerda, direita) {
    console.log('array', array)
    console.log('esquerda, direita', esquerda, direita)

    let pivo = array[Math.floor((esquerda + direita) / 2)];
    
    let atualEsq = esquerda; // 0
    let atualDir = direita; // 10

    while (atualEsq <= atualDir) {
    // enquanto o indice da esquerda for menor que o pivô, mantém e passa para o proximo indice
        while (array[atualEsq].preco < pivo.preco) {
            atualEsq++
        }
    // enquanto o indice da direita for maior que o pivô, mantém e passa(voltando) para o proximo indice
        while (array[atualDir].preco > pivo.preco) {
            atualDir--
        }

        if (atualEsq <= atualDir) {
            trocaLugar(array, atualEsq, atualDir);
            atualEsq++;
            atualDir--;
        }
    }
    
    return atualEsq
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))