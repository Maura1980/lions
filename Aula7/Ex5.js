// Atividade 2: Crie um array chamado listaDeCompras contendo quatro itens: "Arroz",  "Feijão", "Macarrão" e "Carne". Utilize um laço for que vá de 0 até o tamanho do array (usando .length) e imprima cada um dos itens no console no formato: "Item: [nome do item]".

let listaDeCompras = ["Arroz", "Feijão", "Macarrão", "Carne"]

for ( let i = 0; i < 4; i++){
    console.log("Item: " + listaDeCompras[i] + " " +i)
}