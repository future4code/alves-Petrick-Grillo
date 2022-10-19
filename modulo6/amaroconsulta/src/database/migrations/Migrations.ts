import { BaseDatabase } from "../BaseDatabase";
import { OutfitDatabase } from "../OutfitDatabase";
import { outfits, products_Tags, tags } from "./data";

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
        drop table if exists ${OutfitDatabase.OutFit_Ids};
        drop table if exists ${OutfitDatabase.OutFit_Tags};
        drop table if exists ${OutfitDatabase.OutFit_Robes};

        CREATE TABLE IF NOT EXISTS ${OutfitDatabase.OutFit_Robes}(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS ${OutfitDatabase.OutFit_Tags}(
            tags VARCHAR(255) NOT NULL PRIMARY KEY
        ); 

        
        CREATE TABLE IF NOT EXISTS ${OutfitDatabase.OutFit_Ids}(
        id_tags VARCHAR(255) NOT NULL,
        id_robes VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_robes) REFERENCES ${OutfitDatabase.OutFit_Robes}(id),
        FOREIGN KEY (id_tags) REFERENCES ${OutfitDatabase.OutFit_Tags}(tags)
        );
        `)
    }
    insertData = async () => {
        await BaseDatabase
            .connection(OutfitDatabase.OutFit_Robes)
            .insert(outfits)
        await BaseDatabase
            .connection(OutfitDatabase.OutFit_Tags)
            .insert(tags)
        await BaseDatabase
            .connection(OutfitDatabase.OutFit_Ids)
            .insert(products_Tags)
    }
}
const migrations = new Migrations()
migrations.execute()