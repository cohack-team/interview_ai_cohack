import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return new NextResponse("No file provided", { status: 400 });
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return new NextResponse("Invalid file type", { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return new NextResponse("File too large (max 5MB)", { status: 400 });
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });

    const ext = path.extname(file.name) || ".pdf";
    const safeName = `${crypto.randomUUID()}${ext}`;
    const filePath = path.join(uploadsDir, safeName);

    const arrayBuffer = await file.arrayBuffer();
    await writeFile(filePath, Buffer.from(arrayBuffer));

    return NextResponse.json({
      url: `/uploads/${safeName}`,
      name: file.name,
    });
  } catch (error) {
    console.error("Resume upload failed:", error);
    return new NextResponse("Upload failed", { status: 500 });
  }
}
