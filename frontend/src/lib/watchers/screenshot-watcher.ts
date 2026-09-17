import fs from "fs";
import os from "os";
import path from "path";

export class ScreenshotWatcher {
    private watcher?: fs.FSWatcher;

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
            (eventType, filename) => {
                if (!filename) return;

                if (
                    filename.startsWith(
                        "Screenshot"
                    )
                ) {
                    console.log(
                        `[ScreenshotWatcher] Detected ${filename}`
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