/*

    Criar uma função que retorne o cálculo salário com base nas horas de um empregado (valor / hora * horas trabalho no mês)

*/

const funcionario = {
    nome : 'Felipe',
    quantidade : 150,
    valorHora : 10
}

function calcularSalario(funcionario){
    return funcionario.quantidade * funcionario.valorHora;

}

console.log(calcularSalario(funcionario));

