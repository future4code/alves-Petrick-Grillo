import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectAllUsers(): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio;
    `)
    return result[0]
}
// 1/A)
// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const name = req.query.name || "Soter"
//         const result = await connection("aula49_exercicio")
//             .select("*")
//             .where("name", "LIKE", `%${name}%`)

//         if (!result.length) {
//             res.statusCode = 404
//             throw new Error("No users found")
//         }

//         res.status(200).send(result)

//     } catch (error) {
//         console.log(error)
//     }
// }

// 1B)
// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const tipo = req.query.name || "Soter"
//         const result = await connection("aula49_exercicio")
//             .select("*")
//             .where("type", "LIKE", `%${tipo}%`)

//         if (!result.length) {
//             res.statusCode = 404
//             throw new Error("No users found")
//         }

//         res.status(200).send(result)

//     } catch (error) {
//         console.log(error)
//     }
// }

// 2)
// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         // const name = req.query.name || "Soter"
//         // const tipo = req.query.tipo || "Teacher"
//         let sort = req.query.sort || "name"
//         let order = req.query.order as string
//         if (!(sort === "name" || sort === "type")) {
//             sort = "email"
//         }
//         if (sort.toUpperCase() === "DESC") {
//             order = "ASC"
//         }
//         console.log(order)
//         const result = await connection("aula49_exercicio")
//             .select("*")
//             .orderBy(sort, order)

//         if (!result.length) {
//             res.statusCode = 404
//             throw new Error("No users found")
//         }

//         res.status(200).send(result)

//     } catch (error) {
//         console.log(error)
//     }
// }
// 3)
// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         let sort = req.query.sort || "name"
//         let order = req.query.order as string
//         let page = Number(req.query.page)
//         if (!(sort === "name" || sort === "type")) {
//             sort = "email"
//         }
//         if (sort.toUpperCase() === "DESC") {
//             order = "ASC"
//         }
//         if (page < 1 || isNaN(page)) {
//             page = 1
//         }
//         const size = 5;
//         const offset = size * (page - 1);
//         const result = await connection("aula49_exercicio")
//             .select("*")
//             .orderBy(sort, order)
//             .limit(size)
//             .offset(offset)

//         if (!result.length) {
//             res.statusCode = 404
//             throw new Error("No users found")
//         }

//         res.status(200).send(result)

//     } catch (error) {
//         console.log(error)
//     }
// }
// 4)
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let sort = req.query.sort || "name"
        let order = req.query.order as string
        let page = Number(req.query.page)
        if (!(sort === "name" || sort === "type")) {
            sort = "name"
        }
        if (sort.toUpperCase() === "DESC") {
            order = "ASC"
        }
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        const size = 5;
        const offset = size * (page - 1);
        const result = await connection("aula49_exercicio")
            .select("*")
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

        if (!result.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(result)

    } catch (error) {
        console.log(error)
    }
}