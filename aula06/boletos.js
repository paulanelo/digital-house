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
function verificarBoletos(boletos) {
    for (let boleto of boletos) {
        switch (boleto.status) {
            case 'PENDENTE': {
                console.log('enviar novamente')
                // enviar novamente
                break
            }
            case 'COMPENSADO': {
                console.log('ative o produto')
                // ative o produto
                break
            }
            case 'ENVIADO': {
                console.log('reenvie o boleto')
                // reenvie o boleto
                break
            }
            case 'CANCELADO': {
                console.log('não faz nada')
                 // não faz nada
                break
            }
        }
    }
}
verificarBoletos(boletos)