import { PostDatabase } from "../database/PostDataBase"
import { createPostDTO } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private generateToken: Authenticator,
        private postData: PostDatabase
    ) { }

    createPost = async (token: any, input: createPostDTO) => {
        let { content } = input
        const tokenUser = this.generateToken.getTokenPayload(token)
        if (!tokenUser) {
            throw new Error("Invalid token")
        }
        if (content.length < 1) {
            throw new Error("Insira mais de uma caracter")
        }
        const idPost = this.idGenerator.generate()
        await this.postData.createPost(idPost, content, tokenUser.id)
        const msgPost = ({ message: "Post Criado!" })
        return msgPost
    }
    allUsers = async (token: any) => {
        const tokenUser = this.generateToken.getTokenPayload(token)
        if (!tokenUser) {
            throw new Error("Invalid token")
        }
        const Users = await this.postData.allPost()
        const msgUser = (Users)

        const teste: any = msgUser.map((parametro) => {
            return ({
                id: parametro.id,
                content: parametro.content,
                id_user: parametro.id_user,
            })
        })

        for (let post of teste) {
            const likes = await this.postData.getLikePost(post.id_user, post.id)
            post.likes = likes
        }
        return teste
    }
}