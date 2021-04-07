const fs = require('fs');


function lerArquivo(callback){
    fs.readFile('teste.txt', 'utf-8', (error, conteudo) => { //como padrão, sempre que chamarmos um callback, é importante passar dois argumentos: erro + resultado
        //toda vez que pedirmos para ler um arquivo json, é importante passar o UTF-8, para que o console saia legível, caso contrário será traduzido em números hexadecimais.
        console.log(conteudo);
        callback();
    })

    fs.writeFileSync('novoArquivo.txt', 'Sextou');



}

lerArquivo(() => {
    console.log('Fim do Programa');

});