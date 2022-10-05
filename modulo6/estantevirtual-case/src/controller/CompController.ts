import { Request, response, Response } from "express";
import { CompBusiness } from "../business/CompBusinees";
import { BaseError } from "../errors/BaseError";
import { ICompleteDB, ICompleteInputDB, INameCompDB, INameInputDB, IResultDB, IResultInputDB } from "../models/Comp";

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
            const input: IResultInputDB = {
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
    editStatus = async (req: Request, res: Response) => {
        try {
            const input: ICompleteInputDB = {
                competicao_id: req.body.competicao_id,
            }
            const response = await this.compBusiness.editStatus(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getListAthletes = async (req: Request, res: Response) => {
        try {
            const input: ICompleteInputDB = {
                competicao_id: req.body.competicao_id,
            }
            const response = await this.compBusiness.listAthletes(input)
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