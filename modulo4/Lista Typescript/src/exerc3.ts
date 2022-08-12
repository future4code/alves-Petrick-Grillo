
const nomeFilme: string = "Harry Potter"
const anoFilme: number = 2023
enum tipoFilme {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}
const notaFilme = 5.34
const exerc3 = (nomeFilme: string, anoFilme: number, tipoFilme: string, notaFilme?: number) => {
    if (notaFilme) {
        return `nome: ${nomeFilme}, ${anoFilme}, ${tipoFilme}, pontuação: ${notaFilme}`

    } else {
        return `nome: ${nomeFilme}, ${anoFilme}, ${tipoFilme}`
    }
}
console.log(exerc3("Harry", 2, tipoFilme.ACAO,43.543))