/* O Exercício

Crie uma função chamada cadastraProduto(nome, valor).

Dica: Use um *array* fora da *function* e adicione o objeto dentro dele.

*/

const produtos = [];

function cadastraProduto(nome,valor){
    const obj = {
        nome : nome,
        valor : valor
    }

    produtos.push(obj);
}

cadastraProduto('feijão', 10);
cadastraProduto('arroz', 16);
cadastraProduto('carne', 46);

console.log(produtos);