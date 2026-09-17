import { Memory } from "@/lib/memory/types";

interface SearchResultsProps {
    memories: Memory[];
}

export function SearchResults({
    memories,
}: SearchResultsProps) {
    if (memories.length === 0) {
        return (
            <div className="rounded-xl border p-6">
                No memories found.
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {memories.map((memory) => (
                <div
                    key={memory.id}
                    className="rounded-xl border bg-white p-5"
                >
                    <h2 className="font-semibold">
                        {memory.title}
                    </h2>

                    <p className="mt-2 text-sm text-zinc-600">
                        {memory.content.slice(0, 250)}
                    </p>
                </div>
            ))}
        </div>
    );
}