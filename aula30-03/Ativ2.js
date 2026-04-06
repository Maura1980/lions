const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let jogo = [Pedra, Papel, Tesoura];
escolhaComputador = [];
escolhaUsuario = []; 
resultado = [];

rl.question('Digite sua escolha: '), (input) => {
    escolhaUsuario = input;
    
}
