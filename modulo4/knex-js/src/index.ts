import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

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

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const [getActorById] = await connection.raw(`
        SELECT * FROM Actor WHERE id = "${id}"
        `)
        console.log(getActorById)
        res.status(200).send(getActorById)
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

app.get("/actor1/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        console.log(name)
        const [getActorByName] = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
        `)
        console.log(getActorByName)
        res.status(200).send(getActorByName)
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

app.get("/actor2/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender
        console.log(gender)
        const [getActorBygender] = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `)
        console.log(getActorBygender)
        res.status(200).send(getActorBygender)
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})
app.put("/actorSalary", async (req: Request, res: Response) => {
    try {
        const attSalary = async (id: string, salary: number): Promise<any> => {
            await connection("Actor")
                .update({
                    salary: salary,
                })
                .where("id", id);
        };
        res.status(200).send(attSalary("003", 2920))
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})
app.delete("/actorDel", async (req: Request, res: Response) => {
    try {
        const delActor = async (id: string): Promise<any> => {
            await connection("Actor")
                .delete()
                .where("id", id);
        };
        res.status(200).send(delActor("003"))
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

app.get("/avgGender", async (req: Request, res: Response) => {
    try {
        const attSalary = async (gender: string): Promise<any> => {
            const resultado = await connection("Actor")
                .avg("salary as average")
                .where({ gender });
            return resultado[0].average;
        };
        console.log(attSalary("male"))
        res.status(200).send(attSalary("male"))
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const [getActorByGender] = await connection.raw(`
        SELECT * FROM Actor WHERE gender = "${gender}"
        `)
        console.log(getActorByGender)
        res.status(200).send(getActorByGender)
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

app.put("/actor", async (req: Request, res: Response) => {
    try {
        const updateActor = async (id: string, salary: number): Promise<any> => {
            await connection("Actor")
                .update({
                    salary: salary,
                })
                .where("id", id);
        };
        console.log(updateActor("004", 20))
        res.status(200).send(updateActor("004", 20))
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})
app.delete("/actorDel", async (req: Request, res: Response) => {
    try {
        const delActor = async (id: string): Promise<any> => {
            await connection("Actor")
                .delete()
                .where("id", id);
        };
        res.status(200).send(delActor("003"))
    } catch (erro) {
        console.log(erro);
        res.status(500).send("Aconteceu um erro inesperado")
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando na porta: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});