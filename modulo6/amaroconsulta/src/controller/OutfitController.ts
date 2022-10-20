import { Request, Response } from "express";
import { OutfitBusiness } from "../businees/OutfitBusiness";
import { BaseError } from "../errors/BaseError";
import { IOutfitLinkEspecifyInput, IOutfitLinkInput, IOutfitRobesInputDB, IOutfitTagsDB } from "../models/Outfit";

export class OutfitController {
    constructor(
        private outfitBusiness: OutfitBusiness
    ) { }
    linkIds = async (req: Request, res: Response) => {
        try {
            const input: IOutfitLinkInput = {
                name: req.body.name,
                tags: req.body.tags
            }
            const response = await this.outfitBusiness.linkIds(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    signupRobe = async (req: Request, res: Response) => {
        try {
            const input: IOutfitRobesInputDB = {
                name: req.body.name
            }
            const response = await this.outfitBusiness.signupRobe(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    signupTag = async (req: Request, res: Response) => {
        try {
            const input: IOutfitTagsDB = {
                tags: req.body.tags
            }
            const response = await this.outfitBusiness.signupTag(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    signupTaginEspecifyRobe = async (req: Request, res: Response) => {
        try {
            const input: IOutfitLinkEspecifyInput = {
                name: req.body.name,
                tags: req.body.tags
            }
            const response = await this.outfitBusiness.signupTagInEspecifyRobe(input)
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro Inesperado" })
        }
    }
    getTags = async (req: Request, res: Response) => {
        try {
            const response = await this.outfitBusiness.getTags()
            res.status(200).send(response)
        } catch (error: any) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: error.message })
        }
    }
    getRobes = async (req: Request, res: Response) => {
        try {
            const response = await this.outfitBusiness.getRobes()
            res.status(200).send(response)
        } catch (error: any) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: error.message })
        }
    }
    getOutfits = async (req: Request, res: Response) => {
        try {
            const response = await this.outfitBusiness.getOutfits()
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