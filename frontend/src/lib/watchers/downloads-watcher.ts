import fs from "fs";
import path from "path";

import { FileWatcher } from "./file-watcher";
import { downloadIngestionService } from "@/lib/ingestion/download-ingestion-service";

export class DownloadsWatcher implements FileWatcher {
    private downloadsPath: string;
    private watcher?: fs.FSWatcher;

    constructor() {
        this.downloadsPath = path.join(
            process.env.HOME || "",
            "Downloads"
        );
    }

    async start(): Promise<void> {
        console.log(
            `Watching downloads folder: ${this.downloadsPath}`
        );

        this.watcher = fs.watch(
            this.downloadsPath,
            (eventType, filename) => {
                if (!filename) return;

                if (filename === ".DS_Store") return;

                const fullPath = path.join(
                    this.downloadsPath,
                    filename.toString()
                );

                console.log(
                    `[DownloadsWatcher] ${eventType}: ${filename}`
                );

                if (eventType === "rename") {
                    try {
                        downloadIngestionService.ingest(
                            fullPath
                        );
                    } catch (error) {
                        console.error(
                            "[DownloadsWatcher] ingestion failed:",
                            error
                        );
                    }
                }
            }
        );
    }

    async stop(): Promise<void> {
        if (this.watcher) {
            this.watcher.close();
            this.watcher = undefined;
        }

        console.log("Downloads watcher stopped");
    }
}