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
let perguntaHorario = prompt("Qual turno do dia você estuda?\nSendo as opções M (matutino) V (vespertino) ou N (noturno)".toUpperCase()).toUpperCase()

verificaoPeriodo = () => {
    if (verificaoPeriodo === "M") {
        console.log("Bom dia!")
    }
    else if (verificaoPeriodo === "V") {
        console.log("Boa tarde!")
    }
    else (verificaoPeriodo === "N") {
        console.log("Boa noite!")
    }

}
console.log(perguntaHorario)