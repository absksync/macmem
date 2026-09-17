import { Memory } from "@/lib/memory/types";

import { sqlite } from "./client";

export class MemoryRepository {
    create(memory: Memory) {
        const statement = sqlite.connection.prepare(`
      INSERT INTO memories (
        id,
        source,
        title,
        content,
        summary,
        tags,
        file_path,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

        statement.run(
            memory.id,
            memory.source,
            memory.title,
            memory.content,
            memory.summary ?? null,
            JSON.stringify(memory.tags),
            memory.filePath ?? null,
            memory.createdAt.toISOString(),
            memory.updatedAt.toISOString()
        );
    }
}

export const memoryRepository =
    new MemoryRepository();