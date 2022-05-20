/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de BlackJack!")
let deckUsuario1 = comprarCarta();
let deckUsuario2 = comprarCarta();
let somaPontuacaoUser = (+deckUsuario1.valor) + (+deckUsuario2.valor)
let deckComputador1 = comprarCarta()
let deckComputador2 = comprarCarta()
let somaPontuacaoPC = (+deckComputador1.valor) + (+deckComputador2.valor)
if (
   perguntaInicio = confirm("Quer iniciar uma nova rodada?")) {

   console.log(`As cartas do usuario são: ${deckUsuario1.texto} e ${deckUsuario2.texto} \nSua pontuação:${somaPontuacaoUser}`)
   console.log(`As cartas do computador são: ${deckComputador1.texto} e ${deckComputador2.texto} \nPontuação:${somaPontuacaoPC} `)
} else {
   console.log("O jogo acabou")
}
if (somaPontuacaoPC === somaPontuacaoUser) {
   console.log("Empate!")
}
else if (somaPontuacaoPC < somaPontuacaoUser) {
   console.log("O usuario Ganhou!")
}
if (somaPontuacaoPC > somaPontuacaoUser)
   console.log("O computador Ganhou!")