import { BaseDatabase } from "../BaseDatabase";
import { OutfitDatabase } from "../OutfitDatabase";
import { outfits } from "./data";
import { IdGenerator } from "../../services/IdGenerator"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }
    createTables = async () => {
        await BaseDatabase.connection.raw(`
        drop table if exists ${OutfitDatabase.OutFit_Tags};
        drop table if exists ${OutfitDatabase.OutFit_Robes};

        CREATE TABLE IF NOT EXISTS ${OutfitDatabase.OutFit_Robes}(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${OutfitDatabase.OutFit_Tags}(
            id VARCHAR(255) PRIMARY KEY,
            tags VARCHAR(255) NOT NULL
        ); 

        
        `)
    }
    // CREATE TABLE IF NOT EXISTS ${OutfitDatabase.OutFit_Ids}(
    // id_tags VARCHAR(255) NOT NULL,
    // id_robes VARCHAR(255) NOT NULL,
    // FOREIGN KEY (id_robes) REFERENCES ${OutfitDatabase.OutFit_Robes}(id),
    // FOREIGN KEY (id_tags) REFERENCES ${OutfitDatabase.OutFit_Tags}(id),
    // );
    insertData = async () => {
        outfits.forEach(async function (parametro) {
            await BaseDatabase
                .connection(OutfitDatabase.OutFit_Robes)
                .insert({
                    id: parametro.id,
                    name: parametro.name
                })
            // parametro.tags.forEach((async (tag) => {
            //     await BaseDatabase
            //         .connection(OutfitDatabase.OutFit_Tags)
            //         .insert({
            //             id: new IdGenerator().generate(),
            //             tags: tag
            //         })
            // }))
        })
    }
}
// await BaseDatabase
//                 .connection(OutfitDatabase.OutFit_Robes)
//                 .insert(outfits)

//             await BaseDatabase
//                 .connection(OutfitDatabase.OutFit_Tags)
//                 .insert()
// 1- 2 tabelas linkadas sendo uma de tags e outra de roupas
// 2- preparar dados para a migrations
const migrations = new Migrations()
migrations.execute()