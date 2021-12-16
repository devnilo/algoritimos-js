// ordenando uma lista, agora usando insertionSort

const livros = require('./listaLivros');

function insertionSort(lista) {
    for (let atual = 0; atual < livros.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].Preco < lista[analise - 1].Preco) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
        
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;
            
            analise--
        }
    }


    console.log(lista);
}
/* para não deixar o código rodando infinitamente, iremos usar o analise--, ele irá fazer a analise, e voltar, quando a condição do while
deixar de ser verdadeira, quer dizer que já chegamos no lugar da lista, do array, onde o elemento tem que ficar. Então, aí ele vai sair do while. */

insertionSort(livros); /* 
[
  { Titulo: 'PHP', Preco: 15 },
  { Titulo: 'Python', Preco: 20 },
  { Titulo: 'JavaScript', Preco: 25 },
  { Titulo: 'Java', Preco: 30 },
  { Titulo: 'GO', Preco: 45 },
  { Titulo: 'Elixir', Preco: 50 }
]
*/

/* nas funções selectionSort() e insertionSort(), vimos que um laço de repetição dentro do outro faz com que a taxa de crescimento não 
aumenta mais de forma linear com relação à quantidade de elementos na lista, porém de forma quadrática, pois um laço dentro de outro 
significa que a quantidade de operações será de n*n (sendo n a quantidade de elementos). Ou seja, selectionSort() e insertionSort() 
têm complexidade de O(n²).
*/