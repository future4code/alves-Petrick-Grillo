const arrayBanco: { cliente: string, saldoTotal: number, debitos: number[] }[] =
    [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]
const somaDebito = arrayBanco.map((parametro1) => {
    let saldoNegativo: number = 0
    const somaDebito: number = parametro1.debitos.reduce((valorComeco, valorAtual) => valorComeco + valorAtual, saldoNegativo)
    const saldoReal = parametro1.saldoTotal - somaDebito
    return { ...parametro1, saldoTotal: saldoReal, debitos: [] }
})
const potenciaisClientes = somaDebito.filter(parametro2 => parametro2.saldoTotal < 0)
console.log(potenciaisClientes)