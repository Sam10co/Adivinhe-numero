// Projeto Advinha Número | Dupla: Samuel Silva e Rhayane Ribeiro

let numeroSecreto;
let tentativasRestantes;
let palpites;
const MAX_TENTATIVAS = 10;

const inputPalpite = document.getElementById('input-palpite');
const btnPalpite = document.getElementById('btn-palpite');
const mensagem = document.getElementById('mensagem');
const tentativas = document.getElementById('tentativas');
const palpitesAnteriores = document.getElementById('palpites-anteriores');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Inicia o jogo
function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = MAX_TENTATIVAS;
    palpites = [];
    exibirMensagem('Tente adivinhar o número secreto!');
    atualizarTentativas();
    atualizarPalpites();
    inputPalpite.disabled = false;
    btnPalpite.disabled = false;
    btnReiniciar.style.display = 'none';
    inputPalpite.value = '';
    inputPalpite.focus();
}

function verificarPalpite() {
    const palpite = Number(inputPalpite.value);
    if (!palpite || palpite < 1 || palpite > 100) {
        exibirMensagem('Digite um número válido entre 1 e 100.');
        return;
    }

    palpites.push(palpite);
    tentativasRestantes--;
    atualizarTentativas();
    atualizarPalpites();

    if (palpite === numeroSecreto) {
        exibirMensagem(`Parabéns! Você acertou o número secreto (${numeroSecreto})!`);
        finalizarJogo(true);
    } else if (tentativasRestantes === 0) {
        exibirMensagem(`Que pena! Suas tentativas acabaram. O número era ${numeroSecreto}.`);
        finalizarJogo(false);
    } else if (palpite < numeroSecreto) {
        exibirMensagem('É MAIOR!');
    } else {
        exibirMensagem('É MENOR!');
    }
    inputPalpite.value = '';
    inputPalpite.focus();
}

function exibirMensagem(msg) {
    mensagem.textContent = msg;
}

function atualizarTentativas() {
    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
}

function atualizarPalpites() {
    palpitesAnteriores.textContent = palpites.length
        ? `Palpites anteriores: ${palpites.join(', ')}`
        : '';
}

function finalizarJogo(vitoria) {
    inputPalpite.disabled = true;
    btnPalpite.disabled = true;
    btnReiniciar.style.display = 'inline-block';
}
btnPalpite.addEventListener('click', () => verificarPalpite());
inputPalpite.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') verificarPalpite();
});
btnReiniciar.addEventListener('click', () => iniciarJogo());
iniciarJogo();
