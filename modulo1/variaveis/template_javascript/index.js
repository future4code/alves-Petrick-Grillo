// 1- Sera impresso o valor de a=10 e b=5 

// 2 - Sera impresso o valor de a=20 b=20 e c=20

/* 3 - Melhores nomes para as variaveis seriam 
let horasDia = prompt...
let salarioDia = prompt...
alert ("voce recebe ${horasDia/salarioDia} por hora")*/

let nome
let idade
typeof nome
typeof idade
console.log(typeof nome) 
console.log(typeof idade)
// Este tipo foi impresso pois nao possui atribuição e nem um valor

//const pergNome = prompt ("Qual é seu nome?")
//const pergIdade = prompt("Qual é sua idade?")
//console.log(typeof pergIdade,typeof pergNome)
// Fez uma pergunta para o usuario, me dando informações para que efetue o proximo comando

//console.log("Olá", pergNome, "voce tem", pergIdade, "anos")

// Exercicio 2

//const pergAlmoco = prompt ("Você Almoçou hoje?")
//const pergGostou = prompt ("Gostou do almoço?")
//const pergAgua = prompt ("Bebeu agua hoje?")

//console.log("Voce almoçou hoje?",pergAlmoco,"Gostou do almoço?", pergGostou,"Bebeu agua hoje?", pergAgua )

let resul1 = 10
let resul2 = 25
let ajuda = 0
ajuda = resul1 
resul1 = resul2
resul2 = ajuda

console.log ("O novo valor de a é", resul1) //resultado 25
console.log ("O novo valor de b é", resul2) //resultado 10
console.log ("teste ajuda", ajuda)
