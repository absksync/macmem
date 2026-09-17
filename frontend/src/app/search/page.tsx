export default function SearchPage() {
    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10">
                    <p className="mb-2 text-sm font-medium text-zinc-500">
                        MacMem Search
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
                        Find something you remember.
                    </h1>

                    <p className="mt-3 max-w-2xl text-zinc-500">
                        Search across screenshots, documents, downloads, and other
                        memories stored by MacMem.
                    </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-3">
                        <span className="text-zinc-400">⌕</span>

                        <input
                            type="search"
                            placeholder="Search your digital memory..."
                            className="w-full bg-transparent px-2 py-3 text-base text-zinc-900 outline-none placeholder:text-zinc-400"
                        />

                        <kbd className="hidden rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-500 sm:block">
                            ⌘ K
                        </kbd>
                    </div>
                </div>

                <section className="mt-8">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-medium text-zinc-900">
                            Recent searches
                        </h2>

                        <span className="text-sm text-zinc-400">
                            No searches yet
                        </span>
                    </div>

                    <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
                        <p className="text-sm text-zinc-500">
                            Search results will appear here once MacMem starts indexing
                            your memories.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}