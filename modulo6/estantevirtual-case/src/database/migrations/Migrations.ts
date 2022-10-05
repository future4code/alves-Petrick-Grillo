import { BaseDatabase } from "../BaseDatabase";
import { CompDatabase } from "../CompDatabase";
import { complete, nameComps, users } from "./data";

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
        drop table if exists ${CompDatabase.Estante_Complete};
        drop table if exists ${CompDatabase.Estante_Comp};
        drop table if exists ${CompDatabase.Estante_NameComp};

        CREATE TABLE IF NOT EXISTS ${CompDatabase.Estante_NameComp}(
            id VARCHAR (255) NOT NULL PRIMARY KEY,
            competicao VARCHAR (255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${CompDatabase.Estante_Comp}(
            id VARCHAR(255) NOT NULL PRIMARY KEY,
            competicao_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (competicao_id) REFERENCES ${CompDatabase.Estante_NameComp}(id),
            atleta VARCHAR(255) NOT NULL UNIQUE,
            value VARCHAR(255) NOT NULL,
            unidade VARCHAR(255) NOT NULL);

        CREATE TABLE IF NOT EXISTS ${CompDatabase.Estante_Complete}(
            status VARCHAR(255),
            competicao_id VARCHAR(255) NOT NULL PRIMARY KEY,
            FOREIGN KEY (competicao_id) REFERENCES ${CompDatabase.Estante_NameComp}(id)
        );
            `)
    }
    insertData = async () => {
        await BaseDatabase
            .connection(CompDatabase.Estante_NameComp)
            .insert(nameComps)

        await BaseDatabase
            .connection(CompDatabase.Estante_Comp)
            .insert(users)
        await BaseDatabase
            .connection(CompDatabase.Estante_Complete)
            .insert(complete)
    }
}

const migrations = new Migrations()
migrations.execute()