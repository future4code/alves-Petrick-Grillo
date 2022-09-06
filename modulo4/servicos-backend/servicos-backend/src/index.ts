import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv, { config } from "dotenv";
import axios from "axios";
const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
});
// Exercicio 01)
const baseURL = "https://viacep.com.br/ws"
const getAdress = async (cep: string): Promise<any> => {
    try {
        const api = await axios.get(`${baseURL}/${cep}/json`)
        console.log(api)
        return api.data
    } catch (erro) {
        throw new Error();
    }
}
// Exercicio 03)
type addressType = {
    CEP: string
    logradouro: string
    Numero: string
    complemento: string
    Bairro: string
    Cidade: string
    Estado: string
}
const insertAddress = async (body: addressType) => {
    await connection("aula31_08_exerc")
        .insert(body)
}
const createAdress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const address = await getAdress(cep)
        console.log(address)
        const addBodyAdress: addressType = {
            CEP: address.cep,
            logradouro: address.logradouro,
            Numero: address.siafi,
            complemento: address.complemento,
            Bairro: address.bairro,
            Cidade: address.localidade,
            Estado: address.uf
        }
        res.status(200).send(address)
        await insertAddress(addBodyAdress)
    } catch (erro) {
        console.log(erro)
    }
}
app.post("/createAdress/:cep", createAdress)

app.listen(3003, () => {
    console.log("Servidor rodando em: http://localhost:3003");
});