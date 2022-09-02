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
const getProductbyID = async (id: string) => {
    const allProducts = await connection("labecommerce_products")
        .select("*")
        .where("id", id)
    return allProducts
}
const getUserbyID = async (id: string) => {
    const allProducts = await connection("labecommerce_users")
        .select("*")
        .where("id", id)
    return allProducts
}
const createBuyList = async (req: Request, res: Response) => {
    try {
        const prod = {
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity
        }
        const userProd: any = await getProductbyID(prod.product_id)
        const somaProduc = userProd[0].price * prod.quantity
        if (!prod.user_id || !prod.product_id || !prod.quantity) {
            res.status(400).send("Preencha todos os campos!")
        }
        await connection("labecommerce_purchases")
            .insert({
                user_id: prod.user_id,
                product_id: prod.product_id,
                quantity: prod.quantity,
                total_price: somaProduc
            })
        res.status(200).send({ prod, message: "Produto criado com sucesso" })
    } catch (erro) {
        console.log(erro);
        res.status(500).send(`Aconteceu um erro inesperado`)
    }
}
const selectPurchasesByUser = async (id: string) => {
    const result = await connection.raw(`
    select labecommerce_users.id as IdPerson, labecommerce_users.name as NamePerson,labecommerce_products.name as NameProduct, labecommerce_purchases.id as IdCompra, labecommerce_purchases.quantity, labecommerce_purchases.total_price
    from labecommerce_purchases
    inner join labecommerce_users on
    labecommerce_purchases.user_id = labecommerce_users.id
    inner join labecommerce_products on
    labecommerce_purchases.product_id = labecommerce_products.id
    where labecommerce_users.id = "${id}";
`)
    let infoUser: any = {}
    let Allpurchases: any[] = []
    result[0].map((person: any) => {
        infoUser = {
            idPerson: person.IdPerson,
            NamePerson: person.NamePerson
        }
        Allpurchases.push({
            idPurchase: person.IdCompra,
            ProductName: person.NameProduct,
            Quantity: person.quantity,
            TotalPrice: person.total_price
        })
    })
    const allPurchasesByUser = {
        idCompra: infoUser.idPerson,
        NamePerson: infoUser.NamePerson,
        infoPurchaseByUser: Allpurchases
    }
    return allPurchasesByUser
}
const getHistory = async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.userId
        const userCollected = await getUserbyID(userId)
        if (!userCollected.length) {
            res.status(400).send(`Usuario com o id ${userId} não foi encontrado!`)
        }
        const History = await selectPurchasesByUser(userId)
        res.status(200).send(History)
    } catch (erro: any) {
        res.status(500).send({ message: erro.message })
    }
}


app.get("/users", getAllUser)
app.get("/products", getAllProducts)
app.get("/products/:id", getProductbyID)
app.get("/users/:userId/purchases", getHistory)
app.post("/purchases", createBuyList)
app.post("/users", addUser)
app.post("/products", regisProduct)

app.listen(3003, () => {
    console.log("Servidor rodando em: http://localhost:3003");
});