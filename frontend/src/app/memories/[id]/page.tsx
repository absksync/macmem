type Props = {
    params: {
        id: string;
    };
};

export default function MemoryDetailsPage({ params }: Props) {
    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="text-4xl font-semibold">
                    Memory Details
                </h1>

                <p className="mt-2 text-zinc-500">
                    Memory ID: {params.id}
                </p>

                <div className="mt-8 rounded-2xl border bg-white p-6">
                    <h2 className="text-xl font-medium">
                        Example Memory
                    </h2>

                    <p className="mt-3 text-zinc-500">
                        Future memory metadata, OCR content,
                        summaries and relationships will appear here.
                    </p>
                </div>
            </div>
        </main>
    );
}