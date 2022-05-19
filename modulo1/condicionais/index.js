// EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
// 1 -A,B,C) O codigo efetua a divisao do numero que o usuario colocou, se o numero for para, no caso nao sobrar resto de divisao passara no teste, caso contrario ira aparecer nao passou no teste
// 2-A) O codigo serve para adicionar frutas ao carrinho do usuario B) sera impresso no console "O preço da fruta", Maça, "é" ,"R$", 2.25 C)a mensagem no console seria de erro, por faltar o break.
// 3-A)Esta pedindo um numero ao usuario e se certificando que a respota sera um numero B)Se for 10 ira passar no teste, se for -10 retornara false C)Sim, nao conseguira acessar a variavel mensagem por estar dentro de um bloco de if
// ============================================================================================================================================================================================================
// EXERCICIOS DE ESCRITA DE CODIGO
// 1 - 
// let perguntaIdade = +prompt("Qual é sua idade?")
//     verificarIdade = (perguntaIdade) => {
//         contaIdade = perguntaIdade>=18
//         return contaIdade
//     }
// calculoMaiorIdade = verificarIdade(perguntaIdade)

//     if (calculoMaiorIdade){
//         console.log("Voce pode dirigir")
//     } else {
//         console.log("Voce nao pode dirigir")
//     }
// 2 -
// let perguntaHorario = prompt("Qual turno do dia você estuda?\nSendo as opções M (matutino) V (vespertino) ou N (noturno)".toUpperCase()).toUpperCase()

// verificaoPeriodo = (perguntaHorario) => {
//     if (perguntaHorario === "M") {
//         console.log("Bom dia!")
//     }
//     else if (perguntaHorario === "V") {
//         console.log("Boa tarde!")
//     }
//     if (perguntaHorario === "N") 
//         console.log("Boa noite!")
//     }
// perguntaTurno = verificaoPeriodo(perguntaHorario)
// 3 - 
// let perguntaHorario = prompt("Qual turno do dia você estuda?\nSendo as opções M (matutino) V (vespertino) ou N (noturno)".toUpperCase()).toUpperCase()

// switch (perguntaHorario){
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//     break
//     case "N": 
//         console.log("Boa noite!")
//     break

//     default:
//         console.log("Por favor insira apenas as letras M,V ou N")
//         break
// }
// 4 -
// let perguntaGeneroFilme = prompt("Qual é o genero de filme que ira assistir?").toUpperCase()
// let perguntaPreçoIngresso = +prompt("Qual o preço do filme?")

// verificaçãoFilmePreço = (perguntaPreçoIngresso) =>{
//     contaPreço = perguntaPreçoIngresso < 15
//     return contaPreço
// }

// verificaçãoGeneroFilme = (perguntaGeneroFilme) =>{
//     generoFilme = (perguntaGeneroFilme === "FANTASIA")
//     return generoFilme
// }
//  if (verificaçãoFilmePreço(perguntaPreçoIngresso) && verificaçãoGeneroFilme(perguntaGeneroFilme)){
//      console.log("Bom filme!")
//  }
//  else {
//      console.log("Escolha outro filme :(")
//  }