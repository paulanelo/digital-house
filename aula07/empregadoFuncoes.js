/* 

Dado o json abaixo chamado "empregado.json"

{
    "nome": "Josefino Silveira",
    "telefones": ["11998899889", "11998899889"],
    "valorHora": 35,
    "cargo": "Operador de máquinas",
    "ativo": true
}

Crie as funções abaixo:

alterarNome(novoNome)
alterarCargo(novoCargo)
adicionarTelefone(telefone)
removerTelefone(telefone)

Todas as alterações realizadas no objeto terão que serem salvas (persistidas) no arquivo "empregado.json". Exemplo
alterarNome("Mario Peixoto")

Após a execução o arquivo "empregado.json" deverá ter essa informação salva
{
    "nome": "Mario Peixoto",
    "telefones": ["11998899889", "11998899889"],
    "valorHora": 35,
    "cargo": "Operador de máquinas",
    "ativo": true
}
Dicas: Usem o fs e as funções de JSON (stringify e o parse)

*/

const fs = require('fs');
let objetoEmpregado = JSON.parse(fs.readFileSync('empregado.json', 'utf-8'));



function alterarNome(nome){

    objetoEmpregado.nome = nome
}
alterarNome('Camila Queiroz');
//console.log(objetoEmpregado);

function alterarCargo(novoCargo){

    objetoEmpregado.cargo = novoCargo;

}
alterarCargo('CJ - Choradora de JavaScript');
//console.log(objetoEmpregado);


function adicionarTelefone(telefone){

    objetoEmpregado.telefones.push(telefone);

}
adicionarTelefone('11574269843');
//console.log(objetoEmpregado);


function removerTelefone(telefone){
    objetoEmpregado.telefones.shift();

}
removerTelefone('11998899889');
console.log(objetoEmpregado)

let novoObjeto = JSON.stringify(objetoEmpregado)
fs.writeFileSync('empregado.json', novoObjeto)
//console.log(novoObjeto);