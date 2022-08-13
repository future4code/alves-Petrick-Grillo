const anagrama = (palavra: string) => {
    let teste = palavra.length
    let result = teste
    if (teste === 0 || teste === 1)
        return 1;
    while (teste > 1) {
        teste--
        result = result * teste
    }
    return result
}
console.log("CONSOLE RESP", anagrama("lobcx"))