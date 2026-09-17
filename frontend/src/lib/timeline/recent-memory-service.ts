import { Memory } from "@/lib/memory/types";
import { memoryRepository } from "@/lib/database/sqlite/memory-repository";

export class RecentMemoryService {
    getRecent(limit = 10): Memory[] {
        return memoryRepository.getRecent(limit);
    }
}

export const recentMemoryService =
    new RecentMemoryService();