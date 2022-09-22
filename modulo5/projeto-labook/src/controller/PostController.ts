import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { createPostDTO } from "../models/User"

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }
    
    createPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const input: createPostDTO = {
                content: req.body.content
            }
            const response = await this.postBusiness.createPost(token, input)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    getAllPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const response = await this.postBusiness.allUsers(token)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}