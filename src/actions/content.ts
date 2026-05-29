"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getContentBlock(sectionId: string) {
  try {
    const block = await prisma.contentBlock.findUnique({
      where: { sectionId },
    });
    return block?.data || null;
  } catch (error) {
    console.error("Failed to fetch content block", error);
    return null;
  }
}

export async function saveContentBlock(sectionId: string, data: any) {
  try {
    await prisma.contentBlock.upsert({
      where: { sectionId },
      update: { data },
      create: { sectionId, data },
    });
    revalidatePath("/"); // Revalidate the home page to update content
    return { success: true };
  } catch (error) {
    console.error("Failed to save content block", error);
    return { success: false, error: "Failed to save data" };
  }
}
