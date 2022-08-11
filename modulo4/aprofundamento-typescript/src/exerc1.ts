console.log("exerc1")
// a)
// const minhaString:string = 3
// O tipo 'number' não pode ser atribuído ao tipo 'string'

// b)
type meuNumero = number | string
const meuNumero = {
    nome: "exercicio",
    numero: 2
}

// c)
type pessoa = number | string
const pessoa = {
    nome:"Petrick",
    idade:18,
    corFavrotita:"Vermelho"
}
enum coresUser {
vermelho = "Vermelho",
laranja = "Laranja",
amarelo = "Amarelo",
verde = "Verde",
azul = "Azul",
azulEscuro = "Azul-Escuro",
violeta = "Violeta",
}
type user = { 
    nome:string
    idade:number
    corFavorita:string
}
const pessoa1: user = {
    nome:"pessoa1",
    idade:1,
    corFavorita:coresUser.azul
}
const pessoa2: user = {
    nome:"pessoa2",
    idade:2,
    corFavorita:coresUser.violeta
}
const pessoa3: user = {
    nome:"pessoa3",
    idade:3,
    corFavorita:coresUser.verde
}

console.log(pessoa3)