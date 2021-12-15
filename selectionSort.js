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