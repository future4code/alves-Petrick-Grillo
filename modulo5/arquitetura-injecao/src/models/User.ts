export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}
export interface IUserT{
    id: string,
    name: string,
    email: string,
    password: string,
}

export interface signupUserDTO {
    name: string
    email: string
    password: string
}
export interface loginUserDTO {
    email: string
    password: string
}
export interface infoUserDTO {
    token: string
    id: string
}
export interface payload {
    id: string
    role: USER_ROLES
}
export interface response {
    token: string
}
export interface tokenDTO{
    token:string
}
export interface UserInfo {
    id: string
    name: string
    email: string
}
export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) { }

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }

    public getRole = () => {
        return this.role
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }

    public setRole = (newRole: USER_ROLES) => {
        this.role = newRole
    }
}