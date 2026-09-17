import { execFile } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";
import os from "os";
import path from "path";

import { FileExtractor } from "./file-extractor";

const execFileAsync = promisify(execFile);

export class ImageExtractor implements FileExtractor {
    async extract(filePath: string): Promise<string> {
        const tempBase = path.join(
            os.tmpdir(),
            `macmem-${Date.now()}`
        );

        try {
            await execFileAsync(
                "tesseract",
                [
                    filePath,
                    tempBase,
                    "--psm",
                    "6",
                ]
            );

            const text = await fs.readFile(
                `${tempBase}.txt`,
                "utf8"
            );

            return text.trim();
        } catch (error) {
            console.error(
                "[ImageExtractor] OCR failed:",
                error
            );

            return "";
        }
    }
}