import fs from "fs";
import path from "path";

import { FileWatcher } from "./file-watcher";

export class DownloadsWatcher implements FileWatcher {
    private downloadsPath: string;

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

        fs.watch(this.downloadsPath, (eventType, filename) => {
            if (!filename) return;

            console.log(
                `[DownloadsWatcher] ${eventType}: ${filename}`
            );
        });
    }

    async stop(): Promise<void> {
        console.log("Downloads watcher stopped");
    }
}