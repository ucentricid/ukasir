import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    // 10MB limit
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "Ukuran file melebihi batas 10MB." }, { status: 400 });
    }

    const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json({ error: "Format tidak valid. Hanya JPG, PNG, dan SVG." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    // Create unique filename
    const ext = file.name.split('.').pop() || 'png';
    const filename = `hero-${Date.now()}-${Math.round(Math.random()*1e9)}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public/uploads");
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    await writeFile(path.join(uploadDir, filename), buffer);

    return NextResponse.json({ url: `/uploads/${filename}`, success: true });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Gagal mengunggah file." }, { status: 500 });
  }
}
