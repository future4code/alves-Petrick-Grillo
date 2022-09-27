import { BaseDatabase } from "../BaseDatabase";
import { UserDatabase } from "../UserDatabase";
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
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.Labook_Users}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${UserDatabase.Labook_Posts}(
            id VARCHAR(255) PRIMARY KEY,
            content VARCHAR(255) NOT NULL,
            id_user VARCHAR(255),
            FOREIGN KEY (id_user) REFERENCES ${UserDatabase.Labook_Users}(id)
        );

        CREATE TABLE IF NOT EXISTS ${UserDatabase.Labook_Likes}(
            id VARCHAR(255) PRIMARY KEY,
            post_id VARCHAR(255),
            FOREIGN KEY (post_id) REFERENCES ${UserDatabase.Labook_Posts}(id),
            user_id VARCHAR(255),
            FOREIGN KEY (user_id) REFERENCES ${UserDatabase.Labook_Users}(id)
        );
        `)
    }
    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.Labook_Users)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()