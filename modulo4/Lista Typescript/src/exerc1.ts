const nome: string = process.argv[2]
const dataNas: string = process.argv[3]

const exerc1 = (nome: string, dataNas: string) => {
    const dividirData: string[] = dataNas.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${dividirData[0]} no mes ${dividirData[1]} do ano de ${dividirData[2]}`
}
console.log(nome)
console.log(dataNas)
console.log(exerc1(nome, dataNas))