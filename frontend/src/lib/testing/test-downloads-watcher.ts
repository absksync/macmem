import { DownloadsWatcher } from "../watchers/downloads-watcher";

async function main() {
    const watcher = new DownloadsWatcher();

    await watcher.start();

    process.on("SIGINT", async () => {
        console.log("\nStopping watcher...");

        await watcher.stop();

        process.exit(0);
    });
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});