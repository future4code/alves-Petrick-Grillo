import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { createPostDTO, loginUserDTO, signupUserDTO } from "../models/User";

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
}