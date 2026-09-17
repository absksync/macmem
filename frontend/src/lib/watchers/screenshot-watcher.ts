import fs from "fs";
import os from "os";
import path from "path";

import { downloadIngestionService } from "@/lib/ingestion/download-ingestion-service";

export class ScreenshotWatcher {
    private watcher?: fs.FSWatcher;

    private processedFiles = new Set<string>();

    private screenshotsPath = path.join(
        os.homedir(),
        "Desktop"
    );

    start() {
        console.log(
            `[ScreenshotWatcher] Watching ${this.screenshotsPath}`
        );

        this.watcher = fs.watch(
            this.screenshotsPath,
            async (_, filename) => {
                if (!filename) return;

                if (
                    !filename.startsWith(
                        "Screenshot"
                    )
                ) {
                    return;
                }

                if (
                    this.processedFiles.has(
                        filename
                    )
                ) {
                    return;
                }

                this.processedFiles.add(
                    filename
                );

                const fullPath = path.join(
                    this.screenshotsPath,
                    filename
                );

                console.log(
                    `[ScreenshotWatcher] Detected ${filename}`
                );

                try {
                    await downloadIngestionService.ingest(
                        fullPath
                    );

                    console.log(
                        `[ScreenshotWatcher] Ingested ${filename}`
                    );
                } catch (error) {
                    console.error(
                        `[ScreenshotWatcher] Failed to ingest ${filename}`,
                        error
                    );
                }
            }
        );
    }

    stop() {
        this.watcher?.close();
    }
}

export const screenshotWatcher =
    new ScreenshotWatcher();