import { ExtractorFactory } from "../extractors/extractor-factory";

async function main() {
    const filePath =
        "/Users/absksync/Downloads/sample.txt";

    const extractor =
        ExtractorFactory.create(filePath);

    if (!extractor) {
        console.log("No extractor found");
        return;
    }

    const content =
        await extractor.extract(filePath);

    console.log(content);
}

main();