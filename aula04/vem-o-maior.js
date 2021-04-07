/* O Exercício

Crie uma função que receba três parâmetros (numero1, numero2, numero3) e retorne o maior entre eles.

*/

function vemMaior(numero1, numero2, numero3){
    if(numero1 > numero2 && numero1 > numero3){
        return numero1;

    }else if (numero2 > numero1 && numero2 > numero3){
        return numero2;

    }else{
        return numero3;
    }
}

console.log(vemMaior(15,10,13));