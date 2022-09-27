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
    getLikePost = async (post_id: any) => {
        const result = await BaseDatabase.connection()
            .select()
            .count("id")
            .into(PostDatabase.Labook_Likes)
            .where({
                post_id: post_id
            })
        return result[0]["count(`id`)"]
    }
    deletePostbyIdAdmin = async (id: any): Promise<any> => {
        await BaseDatabase.connection()
            .delete()
            .from(PostDatabase.Labook_Posts)
            .where({
                id: id
            });
        await BaseDatabase.connection()
            .delete()
            .from(PostDatabase.Labook_Likes)
            .where({
                id: id
            });
    }
    deleteLikefromPost = async (id: any): Promise<any> => {
        await BaseDatabase.connection()
            .delete()
            .from(PostDatabase.Labook_Likes)
            .where({
                id: id
            });
    }
    getPostById = async (id: any): Promise<any> => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(PostDatabase.Labook_Posts)
            .where({ id });
        return result[0]
    }
    getAllLikes = async (post_id: any): Promise<any> => {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(PostDatabase.Labook_Likes)
            .where({ post_id });
        return result[0]
    }
    likePost = async (id: string, post_id: string, user_id: string) => {
        await BaseDatabase.connection()
            .insert({
                id,
                post_id,
                user_id
            })
            .into(PostDatabase.Labook_Likes)
    }
    unLikePost = async (post_id: string, user_id: string) => {
        await BaseDatabase.connection()
            .delete()
            .from(PostDatabase.Labook_Likes)
            .where({
                post_id: post_id,
                user_id: user_id
            });
    }
}