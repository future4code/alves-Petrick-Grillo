import express, { Request, Response } from "express";
import cors from "cors";
const exercicios = express();

exercicios.use(express.json());
exercicios.use(cors());

type users = {
    id: number
    name: string
    email: string
    type: UserType
    age: number
}
enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
let listaUser: users[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// Exercicio 01 a) um metodo get b) users
exercicios.get("/users", (req: Request, res: Response) => {
    res.send(listaUser)
})


// Exercicio 02 a) atraves de um filter e params, pra ficar mais dinamico b)Sim, porem somente funciona o admin
exercicios.get("/users/:type", (req: Request, res: Response) => {
    const escolhaType = (req.params.type)
    console.log(escolhaType)
    try {
        if (escolhaType !== UserType.ADMIN && escolhaType !== UserType.NORMAL) {
            res.status(400).send("Insira um parametro valido")
        }
        const userFiltro = listaUser.filter(parametro => parametro.type === escolhaType)
        res.send(userFiltro)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 03 a)params b)
exercicios.get("/users/:nome", (req: Request, res: Response) => {
    const escolhaNome = (req.params.nome)
    console.log(escolhaNome)
    const userFiltro = listaUser.filter(parametro => parametro.name === escolhaNome)
    try {
        if (userFiltro.length === 0) {
            res.status(400).send("Usuario não encotrado!")
        }
        res.send(userFiltro)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exericio 04 a) nada acontece b) apropriado imagino que seria o post,mas ambos funcionam
exercicios.put("/users", (req: Request, res: Response) => {
    let typeUser = req.body.type
    console.log(typeUser.toLowerCase())
    try {
        if ((typeUser).toLowerCase() === "normal") {
            typeUser = UserType.NORMAL
        } else if ((typeUser).toLowerCase() === "admin") {
            typeUser = UserType.ADMIN
        }


        if (typeof (req.body.id) !== "number") {
            res.status(400).send("Insira um number em ID")
        } else if ((typeof (req.body.name) !== "string")) {
            res.status(400).send("Insira um string em name")
        } else if ((typeof (req.body.email) !== "string")) {
            res.status(400).send("Insira um string em email")
        } else if ((typeof (req.body.age) !== "number")) {
            res.status(400).send("Insira um number em age")
        }
        let addUser: users = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            type: typeUser,
            age: req.body.age
        }
        res.send({ "Adicionado!": addUser })
        listaUser.push(addUser)
        console.log(listaUser)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})


exercicios.listen(3003, () => {
    console.log("Servidor rodando 3003!")
});