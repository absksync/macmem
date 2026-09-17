import { runMigrations } from "../database/sqlite/migrations";
import { downloadIngestionService } from "../ingestion/download-ingestion-service";

async function main() {
    runMigrations();

    downloadIngestionService.ingest(
        "/Users/absksync/Downloads/sample.pdf"
    );
}

main();