import { runMigrations } from "../database/sqlite/migrations";
import { DownloadsWatcher } from "../watchers/downloads-watcher";

async function main() {
    runMigrations();

    const watcher = new DownloadsWatcher();

    await watcher.start();

    console.log(
        "Create a file in Downloads to test ingestion..."
    );
}

main();