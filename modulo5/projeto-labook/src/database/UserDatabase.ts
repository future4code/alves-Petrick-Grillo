import { IUserT, USER_ROLES } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static Labook_Users = "Labook_Users"
    public static Labook_Posts = "Labook_Posts"
    public static Labook_Likes = "Labook_Likes"
    createUser = async (id: string, name: string, email: string, password: string, role: USER_ROLES) => {
        await BaseDatabase.connection()
            .insert({
                id,
                name,
                email,
                password,
                role
            })
            .into(UserDatabase.Labook_Users);
    };
    getUserByEmail = async (email: string): Promise<IUserT> => {
        const result: IUserT[] = await BaseDatabase.connection()
            .select("*")
            .from(UserDatabase.Labook_Users)
            .where({ email });

        return result[0];
    };
}