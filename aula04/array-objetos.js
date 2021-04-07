let pessoas = [
    {
        nome: 'Felipe'
    },
    {
        nome: 'Camila'
    },
    {
        nome: 'Reinaldo'
    }
]

function exibirNome(pessoas){
    for (let i = 0; i < pessoas.length; i++){
        console.log(pessoas[i].nome)
    }
}

exibirNome(pessoas);