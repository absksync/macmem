import fs from "fs";
import path from "path";

import { FileWatcher } from "./file-watcher";

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

                console.log(
                    `[DownloadsWatcher] ${eventType}: ${filename}`
                );
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