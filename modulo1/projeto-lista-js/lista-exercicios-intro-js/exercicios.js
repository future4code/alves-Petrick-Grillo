// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 let msgPergAlt = prompt ("Escreva a altura")
 let msgPergLar = prompt ("Escreva a largura")
 let calculaAreaRetangulo = (msgPergAlt*msgPergLar)
 return console.log(calculaAreaRetangulo)
}
console.log(calculaAreaRetangulo)
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const pergAnoAtual = prompt("Qual é o ano atual?")
const pergAnoNasc = prompt("Qual é o ano de seu nascimento?")
let imprimeIdade = (pergAnoAtual-pergAnoNasc)
  return console.log(imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let calculaIMC = (peso)/(altura*altura)
return calculaIMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const pergNome = prompt("Qual é seu nome?")
const pergIdade = prompt("Qual é sua idade?")
const pergEmail = prompt("Qual é seu e-mail?")
let fraseCompleta = `Meu nome é ${pergNome}, tenho ${pergIdade} anos, e o meu email é ${pergEmail}.`
return console.log(fraseCompleta)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let pergCor0 = prompt("Quais é sua cor favorita?")
  let pergCor1 = prompt("Qual é sua outra cor favorita?")
  let pergCor2 = prompt("Qual é sua outra cor favorita?")
  let pergCores = [pergCor0, pergCor1, pergCor2]
      return console.log(pergCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let retornaStringEmMaiuscula = string.toUpperCase()
return retornaStringEmMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let calculaIngressosEspetaculo = custo/valorIngresso
return calculaIngressosEspetaculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let checaStringsMesmoTamanho = string1.length === string2.length
return checaStringsMesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
let retornaPrimeiroElemento = array[0]
return retornaPrimeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let retornaUltimoElemento = array[array.length-1]
  return retornaUltimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let trocaPrimeiroEUltimo = array[array.length]
trocaPrimeiroEUltimo = l
return trocaPrimeiroEUltimo
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}