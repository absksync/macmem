import { runMigrations } from "../database/sqlite/migrations";
import { memorySearchService } from "../search/memory-search-service";

async function main() {
    runMigrations();

    const results =
        memorySearchService.search("MacMem");

    console.log(
        `Found ${results.length} memories`
    );

    for (const memory of results) {
        console.log("----------------");
        console.log(`Title: ${memory.title}`);
        console.log(
            `Content: ${memory.content.substring(
                0,
                200
            )}`
        );
    }
}

main();