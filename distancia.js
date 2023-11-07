
function Calcular(){

    //DECLARAÇÃO DAS VARIÁVEIS
    let tempo = 0;
    let distancia = 0;
    let velocidade = 0;
    let consumo = 0;

    //ENTRADA DO DADO DE VELOCIDADE
    velocidade = parseFloat(document.querySelector('#velocidade').value); 
    //ENTRADA DO DADO DE TEMPO
    tempo = parseFloat(document.querySelector('#tempo').value); 
    
    //CALCULO DA DISTANCIA PERCORRIDA (TEMPO * VELOCIDA)
    distancia = velocidade * tempo;

    //TAXA DE CONSUMO DA VIAGEM
    consumo = distancia / 12;

    //EXIBE A SAÍDA DE DADOS (TAXA DE CONSUMO DA VIAGEM)
    document.querySelector('#consumo').innerHTML = consumo;
    // document.querySelector('#distancia').innerHTML = distancia;


}

//FUNÇÃO DE LIMPAR FURMULÁRIO
function limpar(){

    document.querySelector('#velocidade').value = '';
    document.querySelector('#tempo').value = '';
    document.querySelector('#consumo').innerHTML = '-';
    
}
