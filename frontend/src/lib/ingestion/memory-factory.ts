import { randomUUID } from "crypto";
import path from "path";

import { ExtractorFactory } from "@/lib/extractors/extractor-factory";
import { Memory } from "@/lib/memory/types";

export class MemoryFactory {
    static async createFromFile(
        filePath: string
    ): Promise<Memory> {
        const fileName = path.basename(filePath);

        let content = filePath;

        const extractor =
            ExtractorFactory.create(filePath);

        if (extractor) {
            content =
                await extractor.extract(filePath);
        }

        return {
            id: randomUUID(),

            source: "download",

            title: fileName,

            content,

            summary: `Downloaded file: ${fileName}`,

            tags: ["download"],

            filePath,

            createdAt: new Date(),

            updatedAt: new Date(),
        };
    }
}