//Declaração de veriáveis
var candidatoA = 0;
var candidatoB = 0;
var branca = 0;
var nulo = 0;
//Função que testa os números digitados e adiciona em sua respectiva variável
function confirma (){
    var voto = document.getElementById('candidato');
    if (voto.value != 12 && voto.value != 15){
        nulo = nulo + 1;
        alert('Voto anulado.');
        document.getElementById('candidato').value = '';
    }
    else if (voto.value == 12) {
        candidatoA = candidatoA + 1;
        alert('Voto confirmado!');
        document.getElementById('candidato').value = '';
    }
    else {
        candidatoB = candidatoB + 1;
        alert('Voto confirmado!');
        document.getElementById('candidato').value = '';
    }
}
//Função que contabiliza o voto em branco
function branco (){
    branca = branca + 1;
    alert('Voto confirmado!');
}
//Função que exibe na tela o resultado da eleição
function res (){
    var res1 = document.getElementById('res1');
    var res2 = document.getElementById('res2');
    var res3 = document.getElementById('res3');
    var res4 = document.getElementById('res4');
    var vencedor = document.getElementById('vencedor');
    res1.innerHTML = `Candidato A ${candidatoA} votos.`
    res2.innerHTML = `Candidato B ${candidatoB} votos.`
    res3.innerHTML = `Votos brancos ${branca}.`;
    res4.innerHTML = `Votos nulos ${nulo}.`;
    if (candidatoA > candidatoB) {
        vencedor.innerHTML = `O vencedor é o Candidato A.`;
    } 
    if (candidatoA < candidatoB) {
        vencedor.innerHTML = `O vendedor é o Candidato B.`;
    }
    if (candidatoA == candidatoB){
        vencedor.innerHTML = `Não houve vencedores, você deve repetir a eleição.`;
    }
}
//Função que limpa todos os campos da tela
function limpar (){
    res1.innerHTML = ``;
    res2.innerHTML = ``;
    res3.innerHTML = ``;
    res4.innerHTML = ``;
    vencedor.innerHTML = ``;
    candidatoA = 0;
    candidatoB = 0;
    branca = 0;
    nulo = 0;
}
