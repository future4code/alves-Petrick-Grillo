// A) Acessamos o parametro atraves do process.argv[x]

// B e C)
const Idade7 = +(process.argv[3]) + 7
console.log("Olá,", process.argv[2], "! Você tem", process.argv[3], "anos. Em sete anos você terá", Idade7, "anos")