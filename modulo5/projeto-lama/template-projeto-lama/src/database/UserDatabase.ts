import { IUserDB, User, USER_ROLES } from "../models/User";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Lama_Users"

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }
        return userDB
    }
    public createUser = async (user: User): Promise<void> => {
        const userDB = this.toUserDBModel(user)

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }
    getUserByEmail = async (email: string): Promise<IUserDB> => {
        const result: IUserDB[] = await BaseDatabase.connection()
            .select("*")
            .from(UserDatabase.TABLE_USERS)
            .where({ email })
        return result[0]
    }
}