import fs from "fs/promises";
import pdf from "pdf-parse";

import { FileExtractor } from "./file-extractor";

export class PdfExtractor implements FileExtractor {
    async extract(filePath: string): Promise<string> {
        try {
            const buffer = await fs.readFile(filePath);

            const result = await pdf(buffer);

            return result.text;
        } catch (error) {
            console.error(
                `[PdfExtractor] Failed to extract ${filePath}`,
                error
            );

            return "";
        }
    }
}