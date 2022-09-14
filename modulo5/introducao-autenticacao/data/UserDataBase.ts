import knex from "knex";
import BaseDataBase from "./BaseDataBase";


class UserData extends BaseDataBase {
    userTableName = "User";

    createUser = async (id: string, email: string, password: string) => {
        await this.getConnection()
            .insert({
                id,
                email,
                password,
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