import { MemoryFactory } from "./memory-factory";

import { memoryRepository } from "@/lib/database/sqlite/memory-repository";

export class DownloadIngestionService {
    async ingest(filePath: string): Promise<void> {
        const memory =
            await MemoryFactory.createFromFile(
                filePath
            );

        memoryRepository.create(memory);

        console.log(
            `[DownloadIngestionService] Stored memory for ${memory.title}`
        );
    }
}

export const downloadIngestionService =
    new DownloadIngestionService();