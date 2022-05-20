// EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
// 1 - Sera impresso no console todo o array
// 2 - Sera impresso apenas os objetos que estao dentro do nome
// 3 - Sera impresso todos os apelidos que nao forem Chijo
// 
// EXERCICIOS DE ESCRITA DE CODIGO
// 1 -
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ];
// //  A)
// //  const arrayNomes = pets.map((item)=>{
// //      return item.nome
// //  })
// //  console.log(arrayNomes)
// // // B)
// // const arraySalsicha = pets.filter((pet)=>{
// //     return pet.raca === "Salsicha"
// // })
// // console.log(arraySalsicha)
// // C)
// const arrayMsg = pets.filter((pet)=>{
//     return pet.raca === "Poodle"
// })
// const nomesPoodles = arrayMsg.map((pet)=>{
//     console.log( `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`)
// })
// 2 - 
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// //  A)
//  const arrayNome = produtos.map((item)=>{
//      return item.nome
//  })
//  console.log(arrayNome)
// //  B)
// const arrayDesconto = produtos.map((item)=>{
//     return{
//         nome:item.nome,
//         preço:(item.preco-(item.preco *5/100)).toFixed(2)
//     }
// })
// console.log(arrayDesconto)
// // C)
// const arrayBebidas = produtos.filter((item)=>{
//     return item.categoria === "Bebidas"
// })
// console.log(arrayBebidas)
// // D)
// const arrayYpe = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// })
// console.log(arrayYpe)
// E)
// const arrayYpe = produtos.filter((item)=>{
//     return item.nome.includes("Ypê")
// })
// console.log(arrayYpe)
// const arrayYpeMap = arrayYpe.map((item)=>{
//     return `Compre ${item.nome} por ${item.preco}`
// })
// console.log(arrayYpeMap)