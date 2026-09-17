export type MemorySource =
    | "screenshot"
    | "download"
    | "document"
    | "clipboard"
    | "browser"
    | "ai";

export interface Memory {
    id: string;

    source: MemorySource;

    title: string;

    content: string;

    summary?: string;

    tags: string[];

    filePath?: string;

    createdAt: Date;

    updatedAt: Date;
}