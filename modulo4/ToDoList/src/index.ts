import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from "moment";

dotenv.config();

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

const app: Express = express();
app.use(express.json());
app.use(cors());

// async function mySelect(params:type) {

// }


app.post("/user", async (req: Request, res: Response) => {
    try {
        const name: string = req.body.name
        const nickname: string = req.body.nickname
        const email: string = req.body.email
        if (!name || !nickname || !email) {
            res.status(400).send("Preencha todos os campos!")
        }
        const addUser = async (name: string, nickname: string, email: string): Promise<any> => {
            await connection("todolist_user")
                .insert({
                    name: name,
                    nickname: nickname,
                    email: email
                })
        }
        await addUser(name, nickname, email)
        res.status(200).send("Usuario Criado!")
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})
app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        // if (!id) {
        //     res.status(400).send("Usuario Não encontrado!")
        // }
        // if (id.length > 1) {
        //     res.status(400).send("Usuario Não encontrado252!")
        // }
        // if(id){
        //     res.status(400).send("Usuario Não encontrado25234!")
        // }
        const getActorById = await connection("todolist_user")
            .select("*")
            .where("id", id)
        res.status(200).send(getActorById)
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id: number = +(req.params.id)
        const name: string = req.body.name
        const nickname: string = req.body.nickname
        const editUser = async (id: Number, name: string, nickname: string): Promise<any> => {
            await connection("todolist_user")
                .update({
                    name,
                    nickname
                })
                .where("id", id)
        }
        await editUser(id, name, nickname)
        res.status(200).send("Usuario Criado!")
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

app.post("/task", async (req: Request, res: Response) => {
    try {
        const title: string = req.body.title
        const description: string = req.body.description
        const limitDate: string = req.body.limitDate
        const creatorUserId: number = +(req.body.creatorUserId)
        console.log(creatorUserId)
        const addTask = async (creatorUserId: number, description: string, limitDate: string, title: string): Promise<any> => {
            await connection("todolist_task")
                .insert({
                    title,
                    description,
                    limitdate: limitDate.split("/").reverse().join("-"),
                    creatorUserId
                })
        }
        await addTask(creatorUserId, description, limitDate, title)
        console.log("ss")
        res.status(200).send("Usuario Criado!")
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const getActorById = await connection("todolist_task")
            .select("todolist_task.id", "todolist_task.title", "todolist_task.limitDate", "todolist_task.creatorUserId", "todolist_task.description","todolist_task.status")
            .where("id", id)
        res.status(200).send({
            id: getActorById[0].id,
            title: getActorById[0].title,
            limitDate: moment(getActorById[0].limitDate, "YYY-MM-DD").format("DD/MM/YYYY"),
            creatorUserId: getActorById[0].creatorUserId,
            description: getActorById[0].description,
            status:getActorById[0].status,
        })
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em: http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

