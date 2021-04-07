function somar(numero1, numero2, tempo, callback){
    const resultado = numero1 + numero2;

    setTimeout(() => { //Função que me trará o resultado, depois do tempo que eu especificar.
        callback(resultado); //quando o sistema terminar de fazer a soma, o callback trará o resultado.
    }, tempo);


}

somar(1, 2, 5000, (resultado) => {  //passo o callback através de uma arrow function
    console.log(resultado)         // que irá imprimir o resultado
                                  //O tempo passado para execução do setTimeOut(), é sempre em milissegundos
});
somar(3, 2, 3000, (resultado) => { 
    console.log(resultado) 

});
somar(4, 2, 1000, (resultado) => {
    console.log(resultado)

});
somar(5, 2, 2000, (resultado) => {
    console.log(resultado)

});