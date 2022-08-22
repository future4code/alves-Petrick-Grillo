import express, { Request, Response } from "express";
import cors from 'cors'
const exercicios = express()
exercicios.use(express.json())
exercicios.use(cors())

// Exercicio 02
type afazeres = {
    userId: number | string
    id: number
    title: string
    completed: boolean
}
// Exercicio 03
let listaAfazeres: afazeres[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    }, {
        "userId": 2,
        "id": 27,
        "title": "veritatis pariatur delectus",
        "completed": true
    },
    {
        "userId": 2,
        "id": 28,
        "title": "nesciunt totam sit blanditiis sit",
        "completed": false
    },
    {
        "userId": 2,
        "id": 29,
        "title": "laborum aut in quam",
        "completed": false
    },
    {
        "userId": 2,
        "id": 30,
        "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        "completed": true
    }
]
// Exercicio 04
exercicios.get("/getAllExercices/:value", (req: Request, res: Response) => {
    let valorBoolean: boolean | string = req.params.value
    if (valorBoolean === "true") {
        valorBoolean = true
    } else if (valorBoolean === "false") {
        valorBoolean = false
    }
    const tasks = listaAfazeres.filter((task) => {
        return task.completed === valorBoolean
    })
    res.status(200).send(tasks)
})
// Exercicio 05
exercicios.post("/addTask", (req: Request, res: Response) => {
    const baseAfazer: afazeres = {
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed
    }
    listaAfazeres.push(baseAfazer)
    res.send({ "enviado!": listaAfazeres })
})
// Exercicio 06
exercicios.put("/changeTask/:id/:idtask", (req: Request, res: Response) => {
    const idUser: number = +(req.params.id)
    const idTask: number = +(req.params.idtask)
    const searchID = listaAfazeres.find(parametro => parametro.userId === idUser && parametro.id === idTask)
    if (searchID) {
        searchID.completed = !searchID.completed
    } else if (searchID === undefined) {
        res.status(404).send("Usuario não foi encontrado")
    }
    res.status(200).send({ "Modificado!": searchID })
})
// Exercicio 07
exercicios.delete("/task/:id/:taskid", (req: Request, res: Response) => {
    const idUser: number = +(req.params.id)
    const idTask: number = +(req.params.taskid)
    const searchID = listaAfazeres.filter(parametro => !(parametro.userId === idUser && parametro.id === idTask))
    listaAfazeres = searchID
    res.end()
})
// Exercicio 08
exercicios.get("/getTask/:id/:idtask", (req: Request, res: Response) => {
    const idUser: number = +(req.params.id)
    const idTask: number = +(req.params.idtask)
    const searchID = listaAfazeres.find(parametro => parametro.userId === idUser && parametro.id === idTask)
    res.send(searchID)
})
exercicios.listen(3003, () => {
    console.log("Servidor rodando!");
});