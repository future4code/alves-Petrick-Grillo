import knex from "knex";
import BaseDataBase from "./BaseDataBase";
import { IUserDB, USER_ROLES } from "../types"


class UserData extends BaseDataBase {
    userTableName = "User";

    createUser = async (id: string, email: string, password: string, role: USER_ROLES) => {
        await this.getConnection()
            .insert({
                id,
                email,
                password,
                role
            })
            .into(this.userTableName);
    };
    getUserByEmail = async (email: string): Promise<any> => {
        const result = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ email });

        return result[0];
    }
    getUserById = async (id: string): Promise<any> => {
        const result = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ id });

        return result[0];
    }
}

export default UserData