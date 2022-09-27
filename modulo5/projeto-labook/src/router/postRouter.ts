import { Router } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { PostDatabase } from '../database/PostDataBase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new HashManager(),
        new IdGenerator(),
        new Authenticator(),
        new PostDatabase()
    )
)

postRouter.post("", postController.createPost)
postRouter.get("/all", postController.getAllPost)
postRouter.delete("/delete", postController.deletePostById)
postRouter.post("/like", postController.likePost)
postRouter.delete("/unlike", postController.unLikePost)