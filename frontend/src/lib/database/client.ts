export class DatabaseClient {
    async initialize() {
        console.log("Initializing MacMem database...");
    }
}

export const db = new DatabaseClient();