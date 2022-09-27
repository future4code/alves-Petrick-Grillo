import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { createPostDTO, infoUserDTO } from "../models/User"

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
    deletePostById = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id_post = req.body.id_post
            const infoUser: infoUserDTO = {
                token: token,
                id: id_post
            }
            const response = await this.postBusiness.deletePost(infoUser)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    likePost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id_post = req.body.id_post
            const infoUser: infoUserDTO = {
                token: token,
                id: id_post
            }
            const response = await this.postBusiness.likePost(infoUser)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    unLikePost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const id_post = req.body.id_post
            const infoUser: infoUserDTO = {
                token: token,
                id: id_post
            }
            const response = await this.postBusiness.unLikePost(infoUser)
            res.status(200).send(response);
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}