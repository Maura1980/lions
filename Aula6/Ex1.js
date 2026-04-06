const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const provas = []
rl.question("Digite a sua primeira nota: ", (input1) => {
    const nota1 = parseFloat(input1);
    provas.push(nota1);
    
    rl.question("Digite a sua segunda nota: ", (input2) => {
        const nota2 = parseFloat(input2);
        provas.push(nota2);

    const resultado = (nota1 + nota2) / 2;
     console.log("Resultado:", resultado);
     rl.close();
    
    
})

})