```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let ocorrencias = 0
arrayDeNumeros.map((numero)=>{
  if (numero === numeroEscolhido){
  ocorrencias ++
}
})
if (ocorrencias >0){
  return `O número ${numeroEscolhido} aparece ${ocorrencias}x`
}else {
  return "Número não encontrado"
}  
}
```