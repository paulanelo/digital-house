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

function boletosDaEmpresa(cnpj) {
    let result = [];

    for (let boleto of boletos){
        if (boleto.cnpj === cnpj){
            result.push({
                status : boleto.status,
                valor : boleto.valor

            })
        }
    }
    return result;

}

console.log(boletosDaEmpresa('111000'));

//resolver com o .filter()