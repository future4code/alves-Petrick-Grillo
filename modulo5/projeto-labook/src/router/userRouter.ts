import { Router } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new HashManager(),
        new IdGenerator(),
        new Authenticator(),
        new UserDatabase()
    )
)

userRouter.post("/signup", userController.signupUser)
userRouter.post("/login", userController.loginUser)