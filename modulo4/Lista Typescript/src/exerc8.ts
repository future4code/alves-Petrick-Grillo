// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”).
//  A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// const dataFormatada = (data.getDate()) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
const data = new Date()
const anoAtual = (data.getFullYear())
function verificaRG(anoAtual: number, anoNascimento: number, anoEmissao: number) {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao

    if (idade <= 20) {
        return tempoCarteira >= 5 ? true : false

    } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? true : false

    } else if (idade > 50) {
        return tempoCarteira >= 15 ? true : false

    }
}
console.log(verificaRG(anoAtual, 2015, 2020))