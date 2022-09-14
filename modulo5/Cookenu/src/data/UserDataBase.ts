import { recipeDB, UserCok } from "../types";
import BaseDataBase from "./BaseDataBase";

class UserData extends BaseDataBase {
    userTableName = "UserCookenu"
    recipeTableName = "UserCookenu_recipe"
    createUser = async (id: string, name: string, email: string, password: string) => {
        await this.getConnection()
            .insert({
                id,
                name,
                email,
                password
            })
            .into(this.userTableName);
    };
    getUserByEmail = async (email: string): Promise<UserCok> => {
        const result: UserCok[] = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ email });

        return result[0];
    }
    getUserById = async (id: string): Promise<UserCok> => {
        const result: UserCok[] = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ id });

        return result[0];
    }
    createRecipe = async (id: string, title: string, description: string, cratedAt: Date, recipe_id: string) => {
        await this.getConnection()
            .insert({
                id,
                title,
                description,
                cratedAt,
                recipe_id
            })
            .into(this.recipeTableName);
    };
    getRecipeById = async (id: string): Promise<recipeDB> => {
        const result: recipeDB[] = await this.getConnection()
            .select("*")
            .from(this.recipeTableName)
            .where({ id });

        return result[0];
    }
}
export default UserData