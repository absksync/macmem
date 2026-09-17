export default function TimelinePage() {
    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl font-semibold">
                    Memory Timeline
                </h1>

                <p className="mt-3 text-zinc-500">
                    Browse your memories chronologically.
                </p>

                <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 p-12 text-center">
                    Timeline events will appear here once MacMem begins indexing memories.
                </div>
            </div>
        </main>
    );
}