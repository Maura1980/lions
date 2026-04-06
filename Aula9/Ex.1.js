// Atividade://
// Crie um programa que tenha um menu com as opçoes de "Cadastrar Alunos" e "Listar Alunos".
// O Aluno deve conter, nome, idade e o nome do curso que esta fazendo. Ao cadastrar um novo inserir o objeto em um array e voltar para o menu inicial
// Utilizar console.table() para listar os alunos.
// Ter uma opcão para encerrar o programa.



const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

let alunos = [];

function menu(){
    
    console.log(' *MENU*:');
    console.log('1. Cadastrar Aluno');
    console.log('2. Listar Alunos');
    console.log('-Sair-');
    rl.question("Escolha uma opcão: ", (opcao) => {
       switch (opcao) {
         case '1':
           cadastrarAluno();
           break;
         case '2':
           listarAluno();
            break;
         case '3':
           console.log('---FECHAR PROGRAMA---');
           rl.close();
           break;
         default:
           console.log('Opção Invalida');
           menu();
       }
    });
}

function cadastrarAluno() {
  rl.question('Nome do Aluno: '), (nome) => {
    rl.question('Idade do Aluno: '), (idade) => {
      rl.question('Nome do Curso: '), (curso) => {
        const aluno = {
            nome,
            idade: parseInt(idade),
            curso
        };
        alunos.push(aluno);
        console.log('Cadastrado Concluido');
        menu();

        };

      };
    };
  }
 
function listarAluno() {
  if (alunos.lenght === 0) {
    console.log('Nenhum Aluno cadastrado');
  }else {
    console.table(alunos);
  }
  menu();
}

menu();
    
