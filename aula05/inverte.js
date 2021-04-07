/*

4 - Crie uma função que receba uma string e retorna ela invertida.
Exemplo: inverte('lucas')  // retorna sacul

*/

/*function inverter(texto) {

    return texto.split('').reverse().join(''); // split() separa a string + reverse() - inverte a string + join() - junta string novamente 
  }

console.log('Texto invertido: ' + inverter('Lucas'));*/

/*function inverter(palavra) {
    let palavraInvertida = ''
    
    for(i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i] 
    }
    return palavraInvertida
}
console.log(inverter('1,2,3,4,5'));



let array = [1, 2, 3, 4]

array.length vai retornar 4, pois é o tamanho dele, ou seja, a quantidade de elementos.
array[array.length] vai dar undefined, já que começamos do 0 e a posição 4 não existe. Por isso usamos array[array.length - 1] para acessar o último elemento do array

*/

function invertendoFrase(texto){
    let result ='';

    for (i = texto.length - 1; i >= 0; i--){
        result += texto[i];
    }
    return result;

}

console.log(invertendoFrase('Inconstitucionalissimamente.'));

