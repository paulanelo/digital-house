const lista =[
    {
        item: 'Bolacha',
        preco: 2.70,
        quantidade: 5 //13.50
    },
    {
        item: 'Biscoito',
        preco: 1.70, //3.40
        quantidade: 2
    },
    {
        item: 'Refrigerante',
        preco: 9,
        quantidade: '1' //9 total: 25.90
    }
]

function calcularTotal(lista){

        let valorTotal = 0;

    for (let i = 0; i < lista.length; i++){
        
        const itemComprado = lista[i];
        const total = itemComprado.preco * itemComprado.quantidade
        
        valorTotal += total;

    }
    return valorTotal;
}

console.log(calcularTotal(lista));