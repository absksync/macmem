import { MemoryFactory } from "./memory-factory";

import { memoryRepository } from "@/lib/database/sqlite/memory-repository";

export class DownloadIngestionService {
    ingest(filePath: string) {
        const memory = MemoryFactory.createFromFile(filePath);

        memoryRepository.create(memory);

        console.log(
            `[DownloadIngestionService] Stored memory for ${memory.title}`
        );
    }
}

export const downloadIngestionService =
    new DownloadIngestionService();