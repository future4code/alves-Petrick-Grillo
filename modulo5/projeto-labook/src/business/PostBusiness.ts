import { PostDatabase } from "../database/PostDataBase"
import { createPostDTO, USER_ROLES } from "../models/User"
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
            const likes = await this.postData.getLikePost(post.id)
            post.likes = likes
        }
        return teste
    }
    deletePost = async (input: any) => {
        const tokenUser = this.generateToken.getTokenPayload(input.token)
        if (!tokenUser) {
            throw new Error("Invalid token")
        }
        const postToDelete = await this.postData.getPostById(input.id)
        if (tokenUser.role !== USER_ROLES.ADMIN) {
            if (tokenUser.id !== postToDelete.id_user) {
                throw new Error("Somente admins podem deletar posts de outra pessoa")
            }
            const delPost = this.postData.deletePostbyIdAdmin(input.id)
        }
        const PostDelCheck = ({ message: "Post deletado com sucesso!" })
        return PostDelCheck
    }
    likePost = async (input: any) => {
        const tokenUser = this.generateToken.getTokenPayload(input.token)
        if (!tokenUser) {
            throw new Error("Invalid token")
        }
        const getLikeUser = await this.postData.getAllLikes(input.id)
        if (getLikeUser) {
            if (tokenUser.id === getLikeUser.user_id) {
                throw new Error("Somente é possivel dar 1 like em cada post")
            }
        }
        const idLike = this.idGenerator.generate()
        const likePost = this.postData.likePost(idLike, input.id, tokenUser.id)
        const PostLiked = ({ message: "Like!" })
        return PostLiked
    }
    unLikePost = async (input: any) => {
        const tokenUser = this.generateToken.getTokenPayload(input.token)
        if (!tokenUser) {
            throw new Error("Invalid token")
        }
        const getLikeUser = await this.postData.getAllLikes(input.id)
        if (!getLikeUser) {
            throw new Error("Não é possivel tirar um like que não foi dado!")
        }
        const unLikePost = this.postData.unLikePost(input.id, tokenUser.id)
        const PostUNLiked = ({ message: "Unlike!" })
        return PostUNLiked
    }
}