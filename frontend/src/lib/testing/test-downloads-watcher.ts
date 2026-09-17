import { DownloadsWatcher } from "../watchers/downloads-watcher";

async function main() {
    const watcher = new DownloadsWatcher();

    await watcher.start();
}

main();