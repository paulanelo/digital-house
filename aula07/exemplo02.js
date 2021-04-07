const meuArray = [1, 2, 3, 4, 5, 6];

/*
const meuNomeArray = meuArray.map((elemento) => {
    return elemento * 2;

})
*/


function dobrar(array){
    const result = [];

    for(let element of meuArray){
        result.push(element * 2);

    }

    return result;
} 

console.log(dobrar(meuArray));