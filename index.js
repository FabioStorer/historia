const prompt = require('prompt-sync')();
let ocorrencias = [];
let historia = prompt('Olá. Estou aqui para ouvir uma história sua. Pode começar a digitar: ').trim().replaceAll(',', '').replaceAll('.', '').split(' ');

console.log('A sua história é muito interessante. Ela possui ', historia.length, ' palavras.');

historia.forEach(function (palavra) {
    if (ocorrencias[palavra]) {
        ocorrencias[palavra]++
} else {
    ocorrencias[palavra] = 1
}
});

let palavras = Object.entries(ocorrencias);
console.log(ocorrencias);
console.log(palavras)