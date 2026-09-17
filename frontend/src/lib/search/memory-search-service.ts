import { Memory } from "@/lib/memory/types";
import { memoryRepository } from "@/lib/database/sqlite/memory-repository";

export class MemorySearchService {
    search(query: string): Memory[] {
        return memoryRepository.search(query);
    }
}

export const memorySearchService =
    new MemorySearchService();