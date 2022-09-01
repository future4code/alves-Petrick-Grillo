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
const addUser = async (req: Request, res: Response) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        if (!user.name || !user.email || !user.password) {
            res.status(400).send("Preencha todos os campos!")
        }
        await connection("labecommerce_users")
            .insert(user)
        res.status(200).send({ user, message: "Usuario criado com sucesso" })
    } catch (erro) {
        console.log(erro);
        res.status(500).send(`Aconteceu um erro inesperado`)
    }
}
const getAllUser = async (req: Request, res: Response) => {
    try {
        const allUsers = await connection("labecommerce_users")
            .select("*")
        res.status(200).send(allUsers)
    } catch (erro) {
        console.log(erro);
        res.status(500).send(`Aconteceu um erro inesperado`)
    }
}

const regisProduct = async (req: Request, res: Response) => {
    try {
        const prod = {
            name: req.body.name,
            price: req.body.price,
            image_url: req.body.imageurl
        }
        console.log(prod)
        if (!prod.name || !prod.price || !prod.image_url) {
            res.status(400).send("Preencha todos os campos!")
        }
        await connection("labecommerce_products")
            .insert(prod)
        res.status(200).send({ prod, message: "Produto criado com sucesso" })
    } catch (erro) {
        console.log(erro);
        res.status(500).send(`Aconteceu um erro inesperado`)
    }
}
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const allProducts = await connection("labecommerce_products")
            .select("*")
        res.status(200).send(allProducts)
    } catch (erro) {
        console.log(erro);
        res.status(500).send(`Aconteceu um erro inesperado`)
    }
}
const baseURL = "http://localhost:3003"
const getProductbyID = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const allProducts = await connection("labecommerce_products")
            .select("*")
            .where("id", id)
        res.status(200).send(allProducts)
    } catch (erro) {
        console.log(erro);
        res.status(500).send(`Aconteceu um erro inesperado`)
    }
}

const getProduct = async (idProduct: any): Promise<any> => {
    try {
        const api = await axios.get(`${baseURL}/products/${idProduct}`)
        console.log(api)
        return api.data
    } catch (erro) {
        throw new Error();
    }
}
const createBuyList = async (req: Request, res: Response) => {
    try {
        const prod = {
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity
        }
        const userProd = await getProduct(prod.product_id)
        console.log(prod)
        const somaProduc = userProd * prod.quantity
        if (!prod.user_id || !prod.product_id || !prod.quantity) {
            res.status(400).send("Preencha todos os campos!")
        }
        await connection("labecommerce_products")
            .insert(prod)
        res.status(200).send({ prod, somaProduc, message: "Produto criado com sucesso" })
    } catch (erro) {
        console.log(erro);
        res.status(500).send(`Aconteceu um erro inesperado`)
    }
}


app.get("/users", getAllUser)
app.get("/products", getAllProducts)
app.get("/products/:id", getProductbyID)
app.post("/purchases", createBuyList)
app.post("/users", addUser)
app.post("/products", regisProduct)

app.listen(3003, () => {
    console.log("Servidor rodando em: http://localhost:3003");
});