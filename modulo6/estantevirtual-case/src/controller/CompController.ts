import { Request, response, Response } from "express";
import { CompBusiness } from "../business/CompBusinees";
import { BaseError } from "../errors/BaseError";
import { INameCompDB, INameInputDB, IResultDB } from "../models/Comp";

export class CompController {
    constructor(
        private compBusiness: CompBusiness
    ) { }
    createComp = async (req: Request, res: Response) => {
        try {
            const input: INameInputDB = {
                competicao: req.body.competicao,
            }
            const response = await this.compBusiness.createComp(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    signupResult = async (req: Request, res: Response) => {
        try {
            const input: IResultDB = {
                id: req.body.id,
                competicao_id: req.body.competicao_id,
                atleta: req.body.atleta,
                value: req.body.value,
                unidade: req.body.unidade
            }
            const response = await this.compBusiness.signupComp(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
}