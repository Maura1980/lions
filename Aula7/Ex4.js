const { clear } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite numero de tabuada: ", (input1) => {
    let Tabuada = parseFloat(input1);
   for(let i=1; i <= 10; i++){
    console.log(Tabuada * i)


   }

     rl.close();
    
    
})

