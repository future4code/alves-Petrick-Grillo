const soma = +(process.argv[4]) + +(process.argv[3])
const sub = +(process.argv[4]) - +(process.argv[3])
const div = +(process.argv[4]) / +(process.argv[3])
const mult = +(process.argv[4]) * +(process.argv[3])

const verificaExpressao = () => {
    if (process.argv[2] === "add") {
        return soma
    } else if (process.argv[2] === "sub") {
        return sub
    } else if (process.argv[2] === "div") {
        return div
    } else if (process.argv[2] === "mult") {
        return div
    } else {
        return "Dados foram inseridos incorretamente, verifique os dados!"
    }
}

console.log(`Resposta da ${process.argv[2]}:`, verificaExpressao())
// console.log("teste")