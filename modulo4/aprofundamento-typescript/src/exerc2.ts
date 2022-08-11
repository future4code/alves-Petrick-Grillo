console.log("exerc2")
// A) as entradas sao os parametros que sao passados na função e as variaveis dentro dela

// B e C
function obterEstatisticas(numeros: number[]) {
    
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
        )
        
        let soma: number = 0
        
        for (let num of numeros) {
            soma += num
        }

        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
        
        return estatisticas
    }
    type amostra = {
        numeros: number[],
        obterEstatisticas: (numeros: number[]) => {}
    }

    console.log(obterEstatisticas([1,2]))