import path from "path";

import { FileExtractor } from "./file-extractor";
import { PdfExtractor } from "./pdf-extractor";
import { TextExtractor } from "./text-extractor";

export class ExtractorFactory {
    static create(filePath: string): FileExtractor | null {
        const extension = path.extname(filePath).toLowerCase();

        switch (extension) {
            case ".txt":
            case ".md":
                return new TextExtractor();

            case ".pdf":
                return new PdfExtractor();

            default:
                return null;
        }
    }
}