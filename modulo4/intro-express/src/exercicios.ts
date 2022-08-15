import express, { Request, Response } from "express";
import cors from 'cors'

const exercicios = express()
exercicios.use(express.json())
exercicios.use(cors())
// Exercicio 02 e 05
type bodyexerc2 = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string,
    // posts: {        //Exercicio 06 / acho melhor criar junto para que as informações nao se percam com facilidade
    //     id: number | string,
    //     title: string,
    //     body: string
    // }[]
}
type bodyexerc5 = {
    id: number
    title: string
    body: string
    userId: number
}

const exerc2User: bodyexerc2[] = [
]

// Exercicio 01
// exercicios.get("/", (req: Request, res: Response) => {
//     res.send("Hello, World / Funcionou!")
// })

// Exercicio 03
exercicios.post("/addUser", (req: Request, res: Response) => {
    const teste: bodyexerc2 = {
        id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        // posts: {
        //     id: req.body.id,
        //     title: req.body.title,
        //     body: req.body.body
        // }
    }
    exerc2User.push(teste)
    res.send({ "criado": exerc2User })
})

// Exercicio 04
// exercicios.get("/getUser", (req: Request, res: Response) => {
//     console.log(exerc2User)
//     res.send(exerc2User)
// })

// EXERCICIO 05
exercicios.post("/addPost", (req: Request, res: Response) => {
    const teste: bodyexerc2 = {
        id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        // posts: {
        //     id: req.body.id,
        //     title: req.body.title,
        //     body: req.body.body
        // }
    }
    exerc2User.push(teste)
    res.send({ "criado": exerc2User })
})
// Exercicio 07
exercicios.get("/getPost", (req: Request, res: Response) => {
    // console.log("body", req.body)
    console.log("Console da variavel", exerc2User)
    const teste = exerc2User.map((parametro) => {
        return parametro.posts
    }).flat()
    console.log("CONSOLE TESTE", teste)
    const teste2 = teste.flat()
    console.log(teste2)
    res.send(teste2)

})
// Exercicio 08
exercicios.get("/getUser/:id", (req: Request, res: Response) => {
    // console.log("bodyEspecifico", req.body)
})


exercicios.listen(3003, () => {
    console.log("Deu certo");
});