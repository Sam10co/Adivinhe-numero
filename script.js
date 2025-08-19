// Dupla: Samel Silva e Rhayane Ribeiro
let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let tentativasRestantes = 10;
let palpites = [];

const inputPalpite = document.getElementById('input-palpite');
const btnPalpite = document.getElementById('btn-palpite');
const mensagem = document.getElementById('mensagem');
const tentativas = document.getElementById('tentativas');
const palpitesAnteriores = document.getElementById('palpites-anteriores');

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
palpitesAnteriores.textContent = '';

btnPalpite.addEventListener('click', function() {
    const palpite = Number(inputPalpite.value);
    if (!palpite || palpite < 1 || palpite > 20) {
        mensagem.textContent = 'Digite um número válido entre 1 e 20.';
        return;
    }

    palpites.push(palpite);
    tentativasRestantes--;

    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
palpitesAnteriores.textContent = palpites.length
        ? `Palpites anteriores: ${palpites.join(', ')}`
        : '';

    if (palpite === numeroSecreto) {
        mensagem.textContent = `Parabéns! Você acertou o número secreto (${numeroSecreto})!`;
        btnPalpite.disabled = true;
        inputPalpite.disabled = true;
    } else if (tentativasRestantes === 0) {
        mensagem.textContent = `Que pena! Suas tentativas acabaram. O número era ${numeroSecreto}.`;
        btnPalpite.disabled = true;
        inputPalpite.disabled = true;
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = 'É MAIOR!';
    } else {
        mensagem.textContent = 'É MENOR!';
    }
    inputPalpite.value = '';
    inputPalpite.focus();
});