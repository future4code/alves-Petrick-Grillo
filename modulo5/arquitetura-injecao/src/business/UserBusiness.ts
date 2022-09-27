import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { infoUserDTO, IUserT, loginUserDTO, payload, response, signupUserDTO, USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    constructor(
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private generateToken: Authenticator,
        private userData: UserDatabase
    ) { }
    signupUser = async (input: signupUserDTO) => {
        console.log(input)
        let { name, email, password } = input
        if (!email || email.indexOf("@") === -1) {
            throw new Error("Invalid email")
        }
        if (!password || password.length < 6) {
            throw new Error("Invalid password")
        }
        if (!name || name.length < 3) {
            throw new Error("Insira um nome valido!")
        }
        if (typeof name !== "string") {
            throw new Error("Insira uma string!")
        }
        if (typeof password !== "string") {
            throw new Error("Insira uma string!")
        }
        if (typeof email !== "string") {
            throw new Error("Insira uma string!")
        }
        const passwordHash = await this.hashManager.hash(password)
        const id = this.idGenerator.generate()
        await this.userData.createUser(id, name, email, passwordHash, USER_ROLES.NORMAL)
        let payload: payload = {
            id: id,
            role: USER_ROLES.NORMAL
        }
        const token = this.generateToken.generateToken(payload)
        const response: response = {
            token
        }
        return response
    }

    async loginUser(input: loginUserDTO) {

        const { email, password } = input
        if (!email || email.indexOf("@") === -1) {
            throw new Error("Invalid email")
        }
        if (typeof password !== "string") {
            throw new Error("Insira uma string!")
        }
        if (typeof email !== "string") {
            throw new Error("Insira uma string!")
        }
        if (!password || password.length < 6) {
            throw new Error("Invalid password")
        }
        const user: IUserT = await this.userData.getUserByEmail(email)
        if (!user) {
            throw new Error("email não encontrado")
        }
        const isPasswordCorrect = await this.hashManager.compare(password, user.password)
        if (!isPasswordCorrect) {
            throw new Error("Invalid password")
        }
        let payload: payload = {
            id: user.id,
            role: USER_ROLES.NORMAL
        }
        const token = this.generateToken.generateToken(payload)
        const response: response = {
            token
        }
        return response
    }
    async getUserbyId(input: any) {
        const token = this.generateToken.getTokenPayload(input)
        if (!token) {
            throw new Error("Invalid token")
        }
        const getUser = this.userData.getUserById(token.id)
        const infoUser = {
            id: (await getUser).id,
            name: (await getUser).name,
            email: (await getUser).email
        }
        return infoUser
    }
    async deleteUserById(input: infoUserDTO) {
        const token = this.generateToken.getTokenPayload(input.token)
        if (!token) {
            throw new Error("Invalid token")
        }
        const getUser = this.userData.deleteUserbyId(input.id)
        const userDel = ({ message: "Usuario deletado com sucesso!" })
        return userDel
    }
}