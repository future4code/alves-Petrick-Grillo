import { IUserT, USER_ROLES } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public static Labook_Users = "Labook_Users"
    public static Labook_Posts = "Labook_Posts"
    public static Labook_Likes = "Labook_Likes"

    createPost = async (id: string, content: string, id_user: string) => {
        await BaseDatabase.connection()
            .insert({
                id,
                content,
                id_user
            })
            .into(PostDatabase.Labook_Posts)
    }
    allPost = async () => {
        const result = await BaseDatabase.connection()
            .select("*")
            .into(PostDatabase.Labook_Posts)

        return result
    }
    getLikePost = async (user_id: string, post_id: any) => {
        const result = await BaseDatabase.connection()
            .select()
            .count("id")
            .into(PostDatabase.Labook_Likes)
            .where({
                user_id: user_id,
                post_id: post_id
            })
        return result[0]["count(`id`)"]
    }
}