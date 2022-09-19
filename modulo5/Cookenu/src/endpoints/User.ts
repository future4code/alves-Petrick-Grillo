import { Request, Response } from "express";
import UserData from "../data/UserDataBase";
import { generateId } from "../services/generateId";
import GenerateToken from "../services/GenerateToken";
import GetData from "../services/GetData";
import HashManager from "../services/HashManager";

class ControllerUser {
    async signupUser(req: Request, res: Response) {
        try {
            let { name, email, password } = req.body
            if (!email || email.indexOf("@") === -1) {
                res.status(400).send("Invalid email")
            }
            if (!password || password.length < 6) {
                res.status(400).send("Invalid password")
            }
            if (!name || name.length < 1) {
                res.status(400).send("Insira um nome valido!")
            }
            const hashManager = new HashManager()
            const passwordHash = await hashManager.generateHash(password)
            const id = generateId()
            const userData = new UserData()
            await userData.createUser(id, name, email, passwordHash)
            const generateToken = new GenerateToken()
            const token = generateToken.generateToken(id)
            res.status(200).send({
                token,
            });
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async loginUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (!email || email.indexOf("@") === -1) {
                res.status(400).send("Invalid email")
            }

            const userData = new UserData()
            const user = await userData.getUserByEmail(email)
            if (!user) {
                res.status(400).send("email não encontrado")
            }
            const hashManager = new HashManager()
            const isPasswordCorrect = await hashManager.compare(password, user.password)
            if (!isPasswordCorrect) {
                res.status(400).send("Invalid password")
            }
            const generateToken = new GenerateToken()
            const token = generateToken.generateToken(user.id)
            res.status(200).send({
                token,
            });
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async getUserbyToken(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const authenticationData = new GetData()
            const verifyToken = await authenticationData.getData(token)
            if (!verifyToken) {
                res.status(400).send("Invalid token")
            }
            const userData = new UserData()
            const getUser = await userData.getUserById(verifyToken.id)
            res.status(200).send({
                id: getUser.id,
                name: getUser.name,
                email: getUser.email
            });
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async getAnotherUserById(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id
            const authenticationData = new GetData()
            const verifyToken = await authenticationData.getData(token)
            if (!verifyToken) {
                res.status(400).send("Invalid token")
            }
            const userData = new UserData()
            const getUser = await userData.getUserById(id)
            res.status(200).send({
                id: getUser.id,
                name: getUser.name,
                email: getUser.email
            });
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async createRecipe(req: Request, res: Response) {
        try {
            const { title, description } = req.body
            if (!title) {
                res.status(400).send("Insira um titulo")
            }
            if (!description) {
                res.status(400).send("Insira uma descrição")
            }
            const token = req.headers.authorization as string
            const authenticationData = new GetData()
            const verifyToken = await authenticationData.getData(token)
            if (!verifyToken) {
                res.status(400).send("Invalid token")
            }
            const id = generateId()
            const userData = new UserData()
            const cratedAt = new Date()
            const getUser = await userData.createRecipe(id, title, description, cratedAt, verifyToken.id)
            res.status(200).send("Receita Criada!");
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async getRecipeById(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id
            const authenticationData = new GetData()
            const verifyToken = await authenticationData.getData(token)
            if (!verifyToken) {
                res.status(400).send("Invalid token")
            }
            const userData = new UserData()
            const getUser = await userData.getRecipeById(id)
            const dateFormated = (getUser.cratedAt.toLocaleDateString())
            res.status(200).send({
                id: getUser.id,
                name: getUser.title,
                email: getUser.description,
                cratedAt: dateFormated
            });
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}
export default ControllerUser