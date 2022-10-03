import { BaseDatabase } from "../BaseDatabase";
import { CompDatabase } from "../CompDatabase";
import { users } from "./data";

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
        CREATE TABLE IF NOT EXISTS ${CompDatabase.Estante_Comp}(
            id VARCHAR(255) PRIMARY KEY,
            competicao VARCHAR(255) NOT NULL,
            atleta VARCHAR(255) NOT NULL UNIQUE,
            value VARCHAR(255) NOT NULL,
            unidade VARCHAR(255) NOT NULL);
            `)
    }
    insertData = async () => {
        await BaseDatabase
            .connection(CompDatabase.Estante_Comp)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()