const teste: input = 2
type input = number | string | boolean | undefined

const exerc2 = (teste: input) => {
    return typeof teste
}
console.log(exerc2(teste))