import express, { Request, Response } from "express";
import cors from "cors";
import { arrayData, data } from "./data";

const exercicios = express();

exercicios.use(express.json());
exercicios.use(cors());

type addUser = {
    name: string
    price: number
}

// Exercicio 01
exercicios.get("/test", (req: Request, res: Response) => {
    res.send("Rodando!")

})
// Exercicio 03
exercicios.post("/addProduct", (req: Request, res: Response) => {
    try {
        if (!req.body.name || !req.body.price) {
            res.status(404).send("Esta faltando inserir os dados corretamente")
        } else if (req.body.name) {

        } else {
            const addUser: data = {
                id: Date.now() + Date.now(),
                name: req.body.name,
                price: req.body.price
            }
            res.send({ "Adicionado!": addUser })
            arrayData.push(addUser)
        }
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})
// Exercicio 04 
exercicios.get("/getAll", (req: Request, res: Response) => {
    res.send(arrayData)
})
// Exercicio 05
exercicios.put("/changeNumber/:id", (req: Request, res: Response) => {
    const idUser: number = +(req.params.id)
    const searchID = arrayData.findIndex(parametro => parametro.id === idUser)
    try {
        if (searchID === 0) {
            res.status(404).send("usuario não encontrado")
        } else {
            arrayData[searchID].price = req.body.price
        }
        res.status(200).send({ "Preço modificado com sucesso!": arrayData })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})
// Exercicio 06
exercicios.delete("/delUser/:id", (req: Request, res: Response) => {
    const idUser: number = +(req.params.id)
    const searchID = arrayData.findIndex(parametro => parametro.id === idUser)
    try {
        arrayData.splice(searchID, 1)
        res.status(200).send("usuario deletado com sucesso")
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
    res.end()
})


exercicios.listen(3003, () => {
    console.log("Servidor rodando 3003!")
});