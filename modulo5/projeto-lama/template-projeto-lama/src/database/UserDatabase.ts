import { IUserDB, USER_ROLES } from "../models/User";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Lama_Users"

    createUser = async (id: string, name: string, email: string, password: string, role: USER_ROLES) => {
        await BaseDatabase.connection()
            .insert({
                id,
                name,
                email,
                password,
                role
            })
            .into(UserDatabase.TABLE_USERS);
    };
    getUserByEmail = async (email: string): Promise<IUserDB> => {
        const result: IUserDB[] = await BaseDatabase.connection()
            .select("*")
            .from(UserDatabase.TABLE_USERS)
            .where({ email })
        return result[0]
    }
}