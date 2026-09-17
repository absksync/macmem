import Link from "next/link";

import { memoryService } from "@/lib/memory/memory-service";

export default function TimelinePage() {
    const memories =
        memoryService.getRecentMemories(100);

    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-3xl font-semibold">
                    Timeline
                </h1>

                <p className="mt-2 text-zinc-500">
                    Recently captured memories
                </p>

                <div className="mt-8 space-y-4">
                    {memories.map((memory) => (
                        <Link
                            key={memory.id}
                            href={`/memory/${memory.id}`}
                            className="block rounded-xl border bg-white p-5 transition hover:border-zinc-400 hover:shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold">
                                    {memory.title}
                                </h2>

                                <span className="text-sm text-zinc-500">
                                    {memory.createdAt.toLocaleString()}
                                </span>
                            </div>

                            <p className="mt-2 text-sm text-zinc-600">
                                {memory.content.length > 80
                                    ? `${memory.content.slice(0, 80)}...`
                                    : memory.content}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}