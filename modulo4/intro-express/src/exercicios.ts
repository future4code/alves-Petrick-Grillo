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
    posts: {
        id: number | string,
        title: string,
        body: string
    }[]
}
//Exercicio 06 / acho melhor criar junto para que as informações nao se percam com facilidade

const exerc2User: bodyexerc2[] = [
]

// Exercicio 01
// exercicios.get("/", (req: Request, res: Response) => {
//     res.send("Hello, World / Funcionou!")
// })

// Exercicio 03
exercicios.post("/addUser", (req: Request, res: Response) => {
    const bodyUser: bodyexerc2 = {
        id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        posts: [{
            id: req.body.posts.id,
            title: req.body.posts.title,
            body: req.body.posts.body
        }]
    }
    exerc2User.push(bodyUser)
    res.send({ "criado": exerc2User })
})

// Exercicio 04
exercicios.get("/getUser", (req: Request, res: Response) => {
    res.send({ "usuario": exerc2User })
})

// Exercicio 07
exercicios.get("/getPost", (req: Request, res: Response) => {
    const postsMap = exerc2User.map((parametro) => {
        return parametro.posts
    }).flat()
    const renderMap = postsMap.flat()
    res.send(renderMap)

})
// Exercicio 08
exercicios.get("/getUser/:name", (req: Request, res: Response) => {
    const nameUser = req.params.name
    const filtrarUser = exerc2User.filter(parametro => parametro.name === nameUser)
    res.send(filtrarUser)
})


exercicios.listen(3003, () => {
    console.log("Deu certo");
});