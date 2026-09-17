import { memoryRepository } from "@/lib/database/sqlite/memory-repository";
import { Memory } from "./types";

export class MemoryService {
    getMemory(id: string): Memory | null {
        return memoryRepository.getById(id);
    }
}

export const memoryService =
    new MemoryService();