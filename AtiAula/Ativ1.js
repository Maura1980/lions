// Crie um programa que receba (via prompt-sync ou stdin) o genero do filme escolhido: "Açao",
// "Comedia", "Terror" ou "Animação". Use a estrutura switch para imprimir em qual sala o fime passará:
//* Ação: "Sala 1"
//* Comedia: "Sala 2"
//* Terror: "Sala 3"
//* Animação: "Sala 4"
// Caso padrão (default): "Genero não encontrado. Verifique as opçoes válidas."


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('Gênero do Filme: ');
rl.prompt();

let gênerodoFilme = '';

rl.on('line', (input) => {
    gênerodoFilme = input.toString().trim().toLowerCase();
    console.log('Sua Sala é');


switch(gênerodoFilme){
    case 'ação':
        console.log('Sala 1');
        break;
    case 'comedia':
        console.log('Sala 2');
        break;
    case 'terror':
        console.log('Sala 3');
        break;
    case 'animação':
        console.log('Sala 4');
        break;
    default:
        console.log('Genero não encontrado. Verifique as opções válidas');
       
}
rl.close();
})