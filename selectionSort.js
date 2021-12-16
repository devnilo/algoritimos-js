const livros = require('./listaLivros');
const menorValor = require('./menorValor');

// criando uma lista ordenada 
for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros); /* 
[
    { Titulo: 'PHP', Preco: 15 },
    { Titulo: 'Python', Preco: 20 },
    { Titulo: 'JavaScript', Preco: 25 },
    { Titulo: 'Java', Preco: 30 },
    { Titulo: 'GO', Preco: 45 },
    { Titulo: 'Elixir', Preco: 50 }
  ]
*/

//--------------------------------------------------------------------------------------------------------------------------------------//

// criando a mesma lista, agora utilizando o forEach
/* Se examinarmos o laço, vemos que o primeiro parâmetro da função callback, livro, não está sendo utilizado; nesse caso, podemos 
usar a notação do JavaScript para informar que o primeiro parâmetro não será utilizado no código, através do _ */

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros); /* 
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
significa que a quantidade de operações será de n*n (sendo n a quantidade de elementos). Ou seja, selectionSort() e insertionSort() têm 
complexidade de O(n²).
*/