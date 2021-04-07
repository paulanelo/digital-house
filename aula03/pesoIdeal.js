/* let alturaMulher = 1.60;
let alturaHomem = 1.80;

function calculaPesoIdeal (altura){

    if (altura == 1.60){

        pesoIdeal = (62.1 * alturaMulher) - 44.7;
        return Math.round(pesoIdeal);

    }else {
        
        pesoIdeal = (72.7 * alturaHomem) - 58;
        return Math.round(pesoIdeal);
    }
}
console.log('O peso ideal é ' + calculaPesoIdeal(alturaMulher) + ' kg.');
console.log('O peso ideal é ' + calculaPesoIdeal(alturaHomem) + ' kg.');

*/

let alturaMulher = 1.60;
let alturaHomem = 1.80;

function calculaPesoIdeal (sexo, altura){
    let result;

    if (sexo === 'M' && altura === alturaMulher){
        pesoIdeal = (62.1 * alturaMulher) - 44.7;
        result = 'O peso ideal para esta mulher é ' + Math.round(pesoIdeal);
    }else {    
        pesoIdeal = (72.7 * alturaHomem) - 58;
        result = 'O peso ideial para este homem é ' + Math.round(pesoIdeal);
    }

    return result;
}

console.log(calculaPesoIdeal('M', 1.60));
console.log(calculaPesoIdeal('H', 1.80));


/* 

//>>> solução com teste para verificar se é homem ou mulher.

let alturaMulher = 1.60;
let alturaHomem = 1.80;

function calculaPesoIdeal (sexo){

    let resposta;

    if (sexo === 'M'){

        pesoIdeal = (62.1 * alturaMulher) - 44.7;
        resposta = 'O peso ideal para esta mulher é ' + Math.round(pesoIdeal);

    }else {
        
        pesoIdeal = (72.7 * alturaHomem) - 58;
        resposta = 'O peso ideial para este homem é ' + Math.round(pesoIdeal);
    }

    return resposta;
}

console.log(calculaPesoIdeal('M'));
console.log(calculaPesoIdeal('H'));

*/