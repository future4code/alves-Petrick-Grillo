import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { infoUserDTO, loginUserDTO, signupUserDTO, tokenDTO } from "../models/User";


export class UserController {
    async signupUser(req: Request, res: Response) {
        try {
            const input: signupUserDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const userBusiness = new UserBusiness()
            const response = await userBusiness.signupUser(input)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async loginUser(req: Request, res: Response) {
        try {
            const input: loginUserDTO = {
                email: req.body.email,
                password: req.body.password
            }
            const userBusiness = new UserBusiness()
            const response = await userBusiness.loginUser(input)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async getUserByToken(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const userBusiness = new UserBusiness()
            const response = await userBusiness.getUserbyId(token)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async deleteUserById(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id
            const userBusiness = new UserBusiness()
            const infoUser: infoUserDTO = {
                token: token,
                id: id
            }
            const response = await userBusiness.deleteUserById(infoUser)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}