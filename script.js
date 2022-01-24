const randomFunc = {
    minuscula: getMinusculaRand,
    maiuscula: getMaiusculaRand,
    numero: getNumeralRand,
    simbolo: getSimboloRand
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

console.log(getSimboloRand());