import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// GET all content blocks
export async function GET() {
  try {
    const blocks = await prisma.contentBlock.findMany();
    return NextResponse.json(blocks);
  } catch (error) {
    console.error("Failed to fetch content blocks:", error);
    return NextResponse.json({ error: "Failed to fetch content blocks" }, { status: 500 });
  }
}

// PUT (upsert) a specific content block
export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");

    if (!section) {
      return NextResponse.json({ error: "Section is required" }, { status: 400 });
    }

    const body = await req.json();
    const data = body.data;

    await prisma.contentBlock.upsert({
      where: { sectionId: section },
      update: { data },
      create: { sectionId: section, data },
    });

    revalidatePath("/");
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save content block:", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
