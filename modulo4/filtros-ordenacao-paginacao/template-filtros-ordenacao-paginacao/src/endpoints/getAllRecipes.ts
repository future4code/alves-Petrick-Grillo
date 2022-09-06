import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const title = req.query.title || ""
      let sort = req.query.sort
      let order = req.query.order as string
      let page = Number(req.query.page)

      if(!(sort === "title" || sort === "created_at")) {
         sort = "title"
      }
      if (!order || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC")) {
         order = "ASC"
      }
      if (page < 1 || isNaN(page)) {
         page = 1
      }
      const size = 10;

      const offset = size * (page - 1);

      const result = await connection("aula49_recipes")
            .where("title", "LIdKE", `%${title}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

      // const [result] = await connection.raw(`
      //    SELECT * FROM aula49_recipes
      //    WHERE title LIKE '%${title}%'
      //    ORDER BY ${sort} ${order}
      //    LIMIT ${size}
      //    OFFSET ${offset}
      // `)

      const recipes = result.map(toRecipe)

      if (recipes.length === 0) {
         throw new Error("Não encontramos nenhuma receitas")
      }
      res.status(200).send(recipes)

   } catch (error: any) {
      res.status(500).send(error.message || "Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}