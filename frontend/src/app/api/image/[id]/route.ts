import { promises as fs } from "fs";
import path from "path";

import { NextResponse } from "next/server";

import { memoryService } from "@/lib/memory/memory-service";

interface RouteParams {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(
    request: Request,
    { params }: RouteParams
) {
    const { id } = await params;

    const memory = memoryService.getMemory(id);

    if (!memory) {
        return new NextResponse(
            "Memory not found",
            {
                status: 404,
            }
        );
    }

    if (!memory.filePath) {
        return new NextResponse(
            "Image path not found",
            {
                status: 404,
            }
        );
    }

    try {
        const imagePath = path.resolve(
            memory.filePath
        );

        const imageBuffer =
            await fs.readFile(imagePath);

        const extension = path
            .extname(imagePath)
            .toLowerCase();

        let contentType =
            "application/octet-stream";

        if (extension === ".png") {
            contentType = "image/png";
        }

        if (
            extension === ".jpg" ||
            extension === ".jpeg"
        ) {
            contentType = "image/jpeg";
        }

        if (extension === ".webp") {
            contentType = "image/webp";
        }

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                "Content-Type": contentType,
                "Cache-Control":
                    "public, max-age=31536000",
            },
        });
    } catch (error) {
        console.error(error);

        return new NextResponse(
            "Failed to load image",
            {
                status: 500,
            }
        );
    }
}