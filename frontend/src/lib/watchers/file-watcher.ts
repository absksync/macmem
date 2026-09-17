export interface FileWatcher {
    start(): Promise<void>;
    stop(): Promise<void>;
}