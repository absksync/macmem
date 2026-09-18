import { notFound } from "next/navigation";

import { memoryService } from "@/lib/memory/memory-service";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function MemoryPage({
    params,
}: PageProps) {
    const { id } = await params;

    const memory =
        memoryService.getMemory(id);

    if (!memory) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-3xl font-semibold">
                    {memory.title}
                </h1>

                <div className="mt-2 text-sm text-zinc-500">
                    {memory.createdAt.toLocaleString()}
                </div>

                {memory.filePath && (
                    <div className="mt-6 overflow-hidden rounded-xl border bg-white">
                        <img
                            src={`/api/image/${memory.id}`}
                            alt={memory.title}
                            className="w-full object-contain"
                        />
                    </div>
                )}

                <div className="mt-6 rounded-xl border bg-white p-6">
                    <h2 className="mb-4 text-lg font-semibold">
                        OCR Content
                    </h2>

                    <pre className="whitespace-pre-wrap break-words text-sm">
                        {memory.content}
                    </pre>
                </div>

                {memory.filePath && (
                    <div className="mt-4 text-xs text-zinc-500">
                        {memory.filePath}
                    </div>
                )}
            </div>
        </main>
    );
}