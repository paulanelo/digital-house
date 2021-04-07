/* O Exercício
// Crie uma função que retorne os boletos agrupados por CNPJ

*/

const boletos = [
    {
        cnpj: '111000',
        status: 'PENDENTE',
        valor: 400
    },
    {
        cnpj: '111222',
        status: 'PENDENTE',
        valor: 302.50
    },
    {
        cnpj: '111000',
        status: 'COMPENSADO',
        valor: 200
    },
    {
        cnpj: '111333',
        status: 'ENVIADO',
        valor: 500
    },
    {
        cnpj: '111333',
        status: 'CANCELADO',
        valor: 500
    }
]


function agruparPorCnpj(){
    const agrupados = {};

    for(let boleto of boletos){
        if(!agrupados[boleto.cnpj]){
            agrupados[boleto.cnpj] = [];

        }

        agrupados[boleto.cnpj].push(boleto)
    }

    return agrupados;
}

console.log(agruparPorCnpj());