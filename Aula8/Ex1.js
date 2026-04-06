const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Digite seu nome: ", (input1) => {
    const dado1 = input1;
    
    
    rl.question("Digite seu idade: ", (input2) => {
        const dado2 = parseFloat(input2);
        

console.log(`Bienvenido ao Programa Lions ${dado1} `)

    
     rl.close();
    
    
})

})