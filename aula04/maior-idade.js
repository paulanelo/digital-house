// Criar uma função para saber se uma pessoa é maior de idade ou não.

const pessoa = {
    ano : 1990,
    nome : 'Felipe'

}

function ehMaiorDeIdade(pessoa){

    if (pessoa.ano <= 2003){
        return 'Você é menor de idade';

    }else if (pessoa.ano > 2003){
        return 'Você é maior de idade';

    }
}

console.log(ehMaiorDeIdade(pessoa));