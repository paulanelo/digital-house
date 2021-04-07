/* 2 - Crie uma função que recebe um array de notas e calcula a média entre elas
Exemplo: media([10, 7, 10, 8, 4, 6]) // retorna 7.5

*/

function media(notas){
    let result = 0; 

    for (let i = 0; i < notas.length; i++){
        result += notas[i];

    }
    return result / notas.length;
}
console.log(media([10, 7, 10, 8, 4, 6]));
