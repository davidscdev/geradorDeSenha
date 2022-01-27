/* Captura os elemtnos da configuração em tela. */
const elResultado = document.getElementById('resultado');
const elTamanho = document.getElementById('tamanho');
const elMaiusculas = document.getElementById('maiusculas');
const elMinusculas = document.getElementById('minusculas');
const elNumeros = document.getElementById('numeros');
const elSimbolos = document.getElementById('simbolos');
const elGerador = document.getElementById('gerador');
const elCopiar = document.getElementById('copiar');

const randomFunc = {
    Minusculo: getMinusculaRand,
    Maiusculo: getMaiusculaRand,
    Numero: getNumeralRand,
    Simbolo: getSimboloRand
}

elCopiar.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const senha = elResultado.innerText;

    if (!senha) {
        return;
    }

    textarea.value = senha;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert(`Senha copiada para a área de transferência: ${senha}`);
})

elGerador.addEventListener('click', () => {
    const tamanho = +elTamanho.value;
    const temMaiusculo = elMaiusculas.checked;
    const temMinusculo = elMinusculas.checked;
    const temNumero = elNumeros.checked;
    const temSimbolo = elSimbolos.checked;

    elResultado.innerText = geraPassword(tamanho, temMaiusculo, temMinusculo, temNumero, temSimbolo);
})

function geraPassword(tamanho, Maiusculo, Minusculo, Numero, Simbolo){
    let senhaGerada = '';
    const contarTipos = Maiusculo + Minusculo + Numero + Simbolo;

    const arrayTipos = [{Maiusculo}, {Minusculo}, {Numero}, {Simbolo}].filter(item => Object.values(item)[0]);

    if (contarTipos === 0) {
        return '';
    }

    for (let i = 0; i < tamanho; i += contarTipos) {
        arrayTipos.forEach(tipo => {
            const funcTipo = Object.keys(tipo)[0];
            console.log(funcTipo);
            senhaGerada += randomFunc[funcTipo]();
        })
    }
    const senhaFinal = senhaGerada.slice(0, tamanho);

    return senhaFinal;
}

function getMinusculaRand(){
    /* Gera Char Code com randômicos entre 97 e 122 */
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getMaiusculaRand(){
    /* Gera Char Code com randômicos entre 65 e 90 */
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumeralRand(){
    /* Gera Char Code com randômicos entre 48 e 57 */
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSimboloRand() {
    const symbols = '!@#$%^&*(){}[]=<>/,.|';
    return symbols[Math.floor(Math.random() * symbols.length)];    
}

/*console.log(getSimboloRand());*/