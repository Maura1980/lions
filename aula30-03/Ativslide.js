const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let funcionarios = []
exibirMenu()

function exibirMenu() {
    console.log('
        Menu:
        1. Cadastrar funcionario
        2. Listar todos os funcionarios
        3. Exibir funcionario com maior salario
        4. Sair
        ')

        rl.question('Escolha uma opção:', (opcao) => {
            switch(opcao){
                case '1':
                    cadastrarFuncionario()
                    break
                case '2':
                    listarFuncionarios()
                    break
                case '3':
                    exibirMaiorSalario()
                    break
                default:
                    console.log('Opção inválida, tente novamente.')
                    exibirMenu()
                    break

            }
        })
    }
function cadastrarFuncionario() {
    rl.question('Digite o nome do funcionasrio:', (nome) => {
        rl.question('Digite o cargo do funcionario:', (cargo) => {
            rl.question('Digite o salario do funcionario:', (salario) => {
                funcionarios.push({nome,cargo,salario: parseFloat(salario)})
                console.log('Funcionario cadastrado com sucesso!')
                exibirMenu()
            })
        })

    })
}
function listarFuncionarios() {
    if(funcionarios.lenght === 0) {
        console.log('Nenhum funcionario cadastrado.')
    }else{
        console.log('Lista de funcionarios:')
        funcionarios.forEach((funcionario, index) => {
            console.log(`${index + 1}. Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salario R$${funcionario.salario.toFixed(2)}`)

        })

    }
    exibirMenu()
}
function exibirMaiorSalario(){
    if(funcionarios.lenght == 0) {

    })
}