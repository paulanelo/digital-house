/* O Exercício

Na geometria existem três tipos de triângulos que são categorizados conforme os seus lados:

- Equilátero (3 lados iguais)
- Isósceles (2 lados iguais)
- Escaleno (0 lados iguais)

Crie uma função que receba como parâmetro os três lados do triângulo e retorne qual o tipo dele.

*/

function maior (numero1, numero2, numero3){
    let numeroMaior;

    if(numero1 > numero2){
        numeroMaior = numero1;
    } else {
        numeroMaior = numero2
    }

    if(numero3 > numeroMaior) {
        numeroMaior = numero3;
    }

    return numeroMaior;

}

console.log(maior(40, 0, 15));