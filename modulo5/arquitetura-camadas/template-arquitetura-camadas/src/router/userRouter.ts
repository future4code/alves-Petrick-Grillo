import { Router } from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = Router()

const userController = new UserController()

userRouter.post("/signup", userController.signupUser)
userRouter.post("/login", userController.loginUser)
userRouter.get("/all", userController.getUserByToken)
userRouter.delete("/:id", userController.deleteUserById)