const { clear } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let numeroAleatorio = 0

numeroAleatorio = Math.floor(Math.random() * 10) + 1

let numeroUsuario = 0

adivinação()

let tentativas = 1 

function adivinação(){

rl.question("Digite um numero: ", input => {
    numeroUsuario = parseFloat(input)

    if(numeroUsuario == numeroAleatorio) {
       console.log("Acertou")
       rl.close()
    }else{
        console.log(`Tente novamente, Tentativa: ${tentativas}`)
        tentativas +=1
        
        adivinação()
    
    }
        
})
}
