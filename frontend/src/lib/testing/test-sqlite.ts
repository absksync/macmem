import { randomUUID } from "crypto";

import { runMigrations } from "../database/sqlite/migrations";
import { memoryRepository } from "../database/sqlite/memory-repository";

async function main() {
    runMigrations();

    memoryRepository.create({
        id: randomUUID(),
        source: "document",
        title: "SQLite Test",
        content: "Testing memory persistence",
        tags: ["test"],
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    console.log("Memory stored successfully");
}

main();