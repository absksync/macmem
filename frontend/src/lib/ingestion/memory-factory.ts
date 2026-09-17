import { randomUUID } from "crypto";
import path from "path";

import { Memory } from "@/lib/memory/types";

export class MemoryFactory {
    static createFromFile(filePath: string): Memory {
        const fileName = path.basename(filePath);

        return {
            id: randomUUID(),
            source: "downloads",
            title: fileName,
            content: filePath,
            summary: `Downloaded file: ${fileName}`,
            tags: ["downloads"],
            filePath,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    }
}