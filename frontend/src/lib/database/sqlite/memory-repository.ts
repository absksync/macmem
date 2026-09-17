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

    search(query: string): Memory[] {
        const statement = sqlite.connection.prepare(`
            SELECT *
            FROM memories
            WHERE
                title LIKE ?
                OR content LIKE ?
                OR summary LIKE ?
            ORDER BY created_at DESC
        `);

        const searchTerm = `%${query}%`;

        const rows = statement.all(
            searchTerm,
            searchTerm,
            searchTerm
        ) as any[];

        return rows.map((row) => ({
            id: row.id,
            source: row.source,
            title: row.title,
            content: row.content,
            summary: row.summary ?? undefined,
            tags: row.tags
                ? JSON.parse(row.tags)
                : [],
            filePath: row.file_path ?? undefined,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        }));
    }

    getRecent(limit: number): Memory[] {
        const statement = sqlite.connection.prepare(`
            SELECT *
            FROM memories
            ORDER BY created_at DESC
            LIMIT ?
        `);

        const rows = statement.all(limit) as any[];

        return rows.map((row) => ({
            id: row.id,
            source: row.source,
            title: row.title,
            content: row.content,
            summary: row.summary ?? undefined,
            tags: row.tags
                ? JSON.parse(row.tags)
                : [],
            filePath: row.file_path ?? undefined,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        }));
    }

    getById(id: string): Memory | null {
        const statement = sqlite.connection.prepare(`
            SELECT *
            FROM memories
            WHERE id = ?
            LIMIT 1
        `);

        const row = statement.get(id) as any;

        if (!row) {
            return null;
        }

        return {
            id: row.id,
            source: row.source,
            title: row.title,
            content: row.content,
            summary: row.summary ?? undefined,
            tags: row.tags
                ? JSON.parse(row.tags)
                : [],
            filePath: row.file_path ?? undefined,
            createdAt: new Date(row.created_at),
            updatedAt: new Date(row.updated_at),
        };
    }
}

export const memoryRepository =
    new MemoryRepository();