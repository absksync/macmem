import { runMigrations } from "../database/sqlite/migrations";
import { downloadIngestionService } from "../ingestion/download-ingestion-service";

async function main() {
    runMigrations();

    await downloadIngestionService.ingest(
        "/Users/absksync/Downloads/sample.txt"
    );
}

main();