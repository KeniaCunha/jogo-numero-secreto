let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;




function exibirTextoNaTela(tag, texto){
    let campo =document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2})
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto.')
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10')
};

exibirMensagemInicial();

function verificarChute(){

    let chute = document.querySelector('input').value;

        if(chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Isso aí, acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
            let mensagemTentativa = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}. `;
            exibirTextoNaTela('p', mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled');

        }else{
            if(chute > numeroSecreto){
                exibirTextoNaTela('p', 'O número secreto é menor.');
            }else{
                exibirTextoNaTela('p', 'O número secreto é maior.');
            }
            tentativas++;
            limparCampo();
        }
};

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaNumeroSorteados.length;
    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaNumeroSorteados = []
    }
    if(listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
    
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled',true);

};