import path from "path";

import { FileExtractor } from "./file-extractor";
import { PdfExtractor } from "./pdf-extractor";
import { TextExtractor } from "./text-extractor";
import { ImageExtractor } from "./image-extractor";

export class ExtractorFactory {
    static create(
        filePath: string
    ): FileExtractor | null {
        const extension = path
            .extname(filePath)
            .toLowerCase();

        switch (extension) {
            case ".txt":
            case ".md":
                return new TextExtractor();

            case ".pdf":
                return new PdfExtractor();

            case ".png":
            case ".jpg":
            case ".jpeg":
                return new ImageExtractor();

            default:
                return null;
        }
    }
}