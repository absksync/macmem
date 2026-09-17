import { memoryRepository } from "@/lib/database/sqlite/memory-repository";

import { Memory } from "./types";

export class MemoryService {
    getMemory(id: string): Memory | null {
        return memoryRepository.getById(id);
    }

    getRecentMemories(limit = 100): Memory[] {
        return memoryRepository.getRecent(limit);
    }

    searchMemories(query: string): Memory[] {
        return memoryRepository.search(query);
    }
}

export const memoryService =
    new MemoryService();