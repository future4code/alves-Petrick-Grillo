const anagrama = (palavra: string) => {
    let basePalavra: number = 1
    let palavraFinal: number = 0
    let resultado: number = 0
    let palavraInicial: number = palavra.length
    while (basePalavra <= palavra.length-1) {
        console.log("palavralength", palavra.length)
        console.log("base palavra", basePalavra)
        console.log("palavraini", palavraInicial)
        console.log("resultado", palavraFinal)
        console.log("sdasd", resultado)
        palavraInicial = palavraInicial - 1
        basePalavra = basePalavra + 1
        palavraFinal = palavraInicial * basePalavra
        resultado = palavraFinal + palavraFinal
    }
    return resultado
}
console.log("CONSOLE RESP", anagrama("loçop"))