
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function lançarDado() {

rl.question("Quantos lados tem o dado? ", lados => {
    numeroLados = parseInt(lados);

    if (isNaN(numeroLados) || numeroLados < 1) {
       console.log("Digite numero de lados")

    lançarDado();
       
    }else{
        const resultado = Math.floor(Math.random() * numeroLados) + 1;

        console.log(`O Resultado do lançamento é: ${resultado}`);
        rl.close();
    
                    
    }
        
});
}

lançarDado();