import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { infoUserDTO, loginUserDTO, signupUserDTO, tokenDTO } from "../models/User";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    signupUser = async (req: Request, res: Response) => {
        try {
            const input: signupUserDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            console.log(input)
            const response = await this.userBusiness.signupUser(input)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    loginUser = async (req: Request, res: Response) => {
        try {
            const input: loginUserDTO = {
                email: req.body.email,
                password: req.body.password
            }
            const response = await this.userBusiness.loginUser(input)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    getUserByToken = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const response = await this.userBusiness.getUserbyId(token)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    deleteUserById = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id
            const infoUser: infoUserDTO = {
                token: token,
                id: id
            }
            const response = await this.userBusiness.deleteUserById(infoUser)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}