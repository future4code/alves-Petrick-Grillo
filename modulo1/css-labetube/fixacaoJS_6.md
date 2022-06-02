```
let arrayTerminado = tarefas.filter((tarefa,indice,array)=>{
  return tarefa.status === "done"
})
let arrayNome = arrayTerminado.map((parametro)=>{
  return parametro.titulo
})
return arrayNome
}
```