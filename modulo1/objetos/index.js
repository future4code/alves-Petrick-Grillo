// Exercicios de interpretação de codigo
// 
//  1- A)Sera impresso no console 1:Matheus Nachtergaele.
//  B) Sera impresso no console: Virginia Cavendish
//  C)  Sera impresso no console: Globo 14h
// 
// 2- a) Console = cachorro:Juca | gato:Juba | tartaruga:Jubo
//  A sintaxe de ... tem como função efetuar uma copia exata do objeto
// que escrever logo a frente dos ...
//
// 3 - a) Sera impresso no primeiro console false e no segundo null ou unfined
// b) acontece esse "problema" por conta do objeto nao conter a chave e conse-
// quentimente nao conter o valor.
//=======================================================================================
// Exercicios de escrita de código
//  1-A)
// const nomePessoa = {
//     nome: "Pétrick",
//     apelidos: ["Petreck","Pet","Pé"],
    
// }
//     formatar = (parametro) =>{
//         parametro = (`Eu sou ${parametro.nome}, mas pode me chamar de: ${parametro.apelidos[0]} ${parametro.apelidos[1]} ou ${parametro.apelidos[2]}`)
//         return parametro 
//     }
// let tresApelidosJuntos = formatar(nomePessoa)
// console.log(tresApelidosJuntos)

// //
// //1-B)
// const copianomePessoa = {
//     ...nomePessoa,
//     apelidos: ["Camarão","Macarrão","Caramujo"]
    
// }
//  let teste = formatar(copianomePessoa)
// console.log(teste)
//----------------------------------
// 2-A/B)
// const pessoa1 = {
//     nome:"Pedro",
//     idade:77,
//     profissao:"Marinheiro"
// }
// const pessoa2 = {
//     nome:"Alvares",
//     idade:66,
//     profissao:"Colonizador"
// }
// retornarValor = (parametro1) =>{
//     parametro1 = (`${parametro1.nome}, ${parametro1.nome.length}, ${parametro1.idade}, ${parametro1.profissao}, ${parametro1.profissao.length}`)
//     return parametro1
// }
// let teste1 = retornarValor(pessoa1)
// console.log(teste1)


// let teste2 = retornarValor(pessoa2)
// console.log(teste2)
//---------------------------------
//3 - 
let carrinho = []

const melao = {
    nome:"melao",
    disponibilidade: true
}
const manga = {
    nome:"manga",
    disponibilidade:true
}
const uva = {
    nome:"uva",
    disponibilidade:true
}
colocarCarrinho = (parametro) =>{
    parametro = (`nome: ${parametro.nome}, disponibilidade: ${parametro.disponibilidade}`)
    return parametro
}
let addCarrinho1 = carrinho.push(colocarCarrinho(melao))
let addCarrinho2 = carrinho.push(colocarCarrinho(manga))
let addCarrinho3 = carrinho.push(colocarCarrinho(uva))
console.log(carrinho)

