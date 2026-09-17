import fs from "fs";
import path from "path";
import os from "os";

import { ImageExtractor } from "../extractors/image-extractor";

async function main() {
    const desktopPath = path.join(
        os.homedir(),
        "Desktop"
    );

    const screenshots = fs
        .readdirSync(desktopPath)
        .filter((file) =>
            file.startsWith("Screenshot")
        );

    if (screenshots.length === 0) {
        console.log("No screenshots found");
        return;
    }

    const latestScreenshot = screenshots
        .sort()
        .pop();

    if (!latestScreenshot) {
        return;
    }

    const imagePath = path.join(
        desktopPath,
        latestScreenshot
    );

    console.log(`Testing: ${imagePath}`);

    const extractor = new ImageExtractor();

    const text = await extractor.extract(
        imagePath
    );

    console.log(
        "\n----- OCR RESULT -----\n"
    );

    console.log(text);
}

main();