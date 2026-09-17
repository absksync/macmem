import Database from "better-sqlite3";
import path from "path";

export class SQLiteClient {
    private db: Database.Database;

    constructor() {
        const databasePath = path.join(
            process.cwd(),
            "macmem.db"
        );

        this.db = new Database(databasePath);
    }

    get connection() {
        return this.db;
    }

    close() {
        this.db.close();
    }
}

export const sqlite = new SQLiteClient();