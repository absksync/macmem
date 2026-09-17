import fs from "fs/promises";

import { FileExtractor } from "./file-extractor";

export class TextExtractor implements FileExtractor {
    async extract(filePath: string): Promise<string> {
        try {
            return await fs.readFile(filePath, "utf-8");
        } catch (error) {
            console.error(
                `[TextExtractor] Failed to read ${filePath}`,
                error
            );

            return "";
        }
    }
}