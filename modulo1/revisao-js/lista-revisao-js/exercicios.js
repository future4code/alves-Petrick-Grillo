// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = array.filter((item) =>
        (item % 2 === 0), {
    })
    return pares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = array.filter((item) => {
        return item % 2 === 0
})
let numerosElevados = pares.map((item)=>{
    return item**2
})
return numerosElevados
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {
        maiorNumero: Math.max.apply(null`${num1} ${num2}`),
        maiorDivisivelPorMenor: (num1 % num2 === 0),
        diferenca: (num1 - num2)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = []
    for (let i = 0; arrayPares.length < n; i++) {
        if (i % 2 === 0) {
            arrayPares.push(i)
        }
    }
    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = array.sort((a, b) => {
        if (a > b) return 1
        if (a < b) return -1
    })
    let segundoMenorValor = arrayOrdenado[1]
    let segundoMaiorValor = arrayOrdenado[arrayOrdenado.length - 2]
    let arrayResultado = [segundoMaiorValor, segundoMenorValor]
    return arrayResultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
let pessoasNaoAutorizadas = pessoas.filter((pessoa)=>{
    if (pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60){
        return pessoa
    }
})
return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let resultado = contas.map((conta) => {
        let soma = conta.compras.reduce((itemAnt, itemAtual) => itemAnt + itemAtual, 0)
        let saldo = conta.saldoTotal
        return { ...conta, saldoTotal: saldo - soma, compras: [] }
    })
    return resultado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.map(a => a.dataDaConsulta = a.dataDaConsulta.split('/').reverse().join());
    consultas.sort((a, b) => {
        if (a.dataDaConsulta < b.dataDaConsulta) {
            return -1
        } else if (a.dataDaConsulta > b.dataDaConsulta) {
            return 1
        } else {
            return 0
        }
    })
    consultas.map(a => a.dataDaConsulta = a.dataDaConsulta.split(',').reverse().join().replaceAll(',', '/'));
    return consultas;

}

