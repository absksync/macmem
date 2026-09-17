import { runMigrations } from "../database/sqlite/migrations";
import { recentMemoryService } from "../timeline/recent-memory-service";

async function main() {
    runMigrations();

    const memories =
        recentMemoryService.getRecent(10);

    console.log(
        `Found ${memories.length} recent memories`
    );

    for (const memory of memories) {
        console.log("----------------");
        console.log(memory.title);
        console.log(memory.createdAt);
    }
}

main();