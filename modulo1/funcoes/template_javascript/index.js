// Exercicios de interpretação de codigo
// 1 - 
// a) console 1 seria impresso o resultado de 2*5 e a do console 2 o resultado de *10
// b) Nada apareceria no console, porem efetuaria a conta matematica

// 2 - 
// a) Todo este conjunto tem como função receber o texto do usuario, logo apos receber efetuar uma função que sao elas deixar todo
// o texto em minusculo, logo apos retornando no console se contem ou nao a palavra cenoura no texto
// b) 1 - eu gosto de cenoura - true || 2 - cenoura é bom pra vista - true || 3 - cenouras crescem na terra - true
//
//===============================================================================================================================================
//Exercicios de escrita de codigo
//1. A)
// const frasePadrao = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// function trocarNom(troca){
//     fraseAlterada = troca.replaceAll("Caio","Pétrick").replaceAll("23","18").replaceAll("São Paulo","Araraquara")

// return fraseAlterada
// }
// const trocarNome = trocarNom(frasePadrao)

// console.log(fraseAlterada)



//1 - b

const exibeMsg = (nome,idade,cidade,profissao) => {
        return 'Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.'
    }
    const resultado = exibeMsg("Pétrick", 18, "Araraquara", "Estudante")
    
    console.log()
    






















