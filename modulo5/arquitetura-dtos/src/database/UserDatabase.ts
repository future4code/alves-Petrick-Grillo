import { IUserT, UserInfo, USER_ROLES } from "../models/User";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"
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
    getUserByEmail = async (email: string): Promise<IUserT> => {
        const result: IUserT[] = await BaseDatabase.connection()
            .select("*")
            .from(UserDatabase.TABLE_USERS)
            .where({ email });

        return result[0];
    };
    getUserById = async (id: string): Promise<UserInfo> => {
        const result: UserInfo[] = await BaseDatabase.connection()
            .select("*")
            .from(UserDatabase.TABLE_USERS)
            // .where({ id });

        return result[0];
    };
    deleteUserbyId = async (id: string): Promise<any> => {
        await BaseDatabase.connection()
            .delete()
            .from(UserDatabase.TABLE_USERS)
            .where({ id });
    }
}