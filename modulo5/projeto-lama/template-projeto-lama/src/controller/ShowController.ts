import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { createShowDTO, infoUserDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) { }
    createShow = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const input: createShowDTO = {
                band: req.body.band,
                starts_at: req.body.starts_at
            }
            const response = await this.showBusiness.createShow(token, input)
            res.status(200).send(response)
        } catch (error: any) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: error.message })
        }
    }
    getShows = async (req: Request, res: Response) => {
        try {
            const response = await this.showBusiness.getShows()
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    claimTicket = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const show_id = req.body.show_id
            const infoUser: infoUserDTO = {
                token: token,
                show_id: show_id
            }
            const response = await this.showBusiness.claimTicket(infoUser)
            res.status(200).send(response)
        } catch (error: any) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: error.message })
        }
    }
    unClaimTicket = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const show_id = req.body.show_id
            const infoUser: infoUserDTO = {
                token: token,
                show_id: show_id
            }
            const response = await this.showBusiness.unClaimTicket(infoUser)
            res.status(200).send(response)
        } catch (error: any) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: error.message })
        }
    }
}    