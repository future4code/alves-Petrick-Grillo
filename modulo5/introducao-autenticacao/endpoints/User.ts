import { Request, Response } from "express"
import UserData from "../data/UserDataBase"
import { generateId } from "../services/generateId"
import GenerateToken from "../services/GenerateToken"
import GetData from "../services/GetData"


class ControllerUser {
    async insertUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (!email || email.indexOf("@") === -1) {
                res.status(400).send("Invalid email")
            }
            if (!password || password.length < 6) {
                res.status(400).send("Invalid password")
            }
            const id = generateId()
            const userData = new UserData()
            await userData.createUser(id, email, password)
            const generateToken = new GenerateToken()
            const token = generateToken.generateToken(id);

            res.status(200).send({
                token,
            });

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async searchUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            if (!email || email.indexOf("@") === -1) {
                res.status(400).send("Invalid email")
            }
            const userData = new UserData()
            const user = await userData.getUserByEmail(email)
            if (user.password !== password) {
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
            const collectToken = await authenticationData.getData(token)
            const userData = new UserData()
            const teste = await userData.getUserById(collectToken.id)
            res.status(200).send({
                teste,
            });
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

}

export default ControllerUser