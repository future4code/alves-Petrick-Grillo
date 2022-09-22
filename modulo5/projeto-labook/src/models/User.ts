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
export interface IUserT {
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
export interface createPostDTO {
    content: string
}
export interface payload {
    id: string
    role: USER_ROLES
}
export interface response {
    token: string
}
export interface responseSign {
    usuario: string
    token: string
}
export interface tokenDTO {
    token: string
}
export interface UserInfo {
    id: string
    name: string
    email: string
}
export interface UserPostLikeDTO{
    id: string
    content: string
    id_user: string
    likes: number
}