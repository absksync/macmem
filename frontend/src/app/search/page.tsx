import { SearchResults } from "@/components/search/search-results";
import { memorySearchService } from "@/lib/search/memory-search-service";

interface SearchPageProps {
    searchParams: Promise<{
        q?: string;
    }>;
}

export default async function SearchPage({
    searchParams,
}: SearchPageProps) {
    const params = await searchParams;

    const query = params.q ?? "";

    const memories = query
        ? memorySearchService.search(query)
        : [];

    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl font-semibold">
                    Search Memories
                </h1>

                <p className="mt-3 text-zinc-500">
                    Search through everything MacMem has stored.
                </p>

                <form
                    action="/search"
                    className="mt-8"
                >
                    <input
                        type="text"
                        name="q"
                        defaultValue={query}
                        placeholder="Search memories..."
                        className="w-full rounded-xl border border-zinc-300 px-4 py-3"
                    />
                </form>

                <div className="mt-8">
                    <SearchResults
                        memories={memories}
                    />
                </div>
            </div>
        </main>
    );
}