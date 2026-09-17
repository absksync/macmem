export interface FileExtractor {
    extract(filePath: string): Promise<string>;
}