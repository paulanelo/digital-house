/*
3 - Crie uma função que receba uma string "10,20,30,40" e some os resultados.
Dica: Use o parseInt para converter string em number

*/

function soma(string){
    let converteString = string.split(',')
    let result = 0;

    for(let i = 0 ; i < converteString.length ; i ++){
        result += parseInt(converteString[i])
    }
    return result 
}
console.log(soma('10,20,30,40'));