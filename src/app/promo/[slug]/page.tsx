import { notFound } from "next/navigation";
import { Render } from "@measured/puck";
import { prisma } from "@/lib/prisma";
import { config } from "@/components/ukasir/builder/puck.config";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = await prisma.page.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!page) return { title: "Halaman Tidak Ditemukan" };

  return {
    title: `${page.title} | uKasir Promo`,
  };
}

export default async function PromoPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const page = await prisma.page.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!page) {
    notFound();
  }

  // Fallback to empty structure if blocks is empty/null
  // @ts-ignore
  const data = page.blocks?.content ? page.blocks : { content: [], root: {}, zones: {} };

  return (
    <div className="font-[family-name:var(--font-outfit)] min-h-screen bg-slate-50 flex flex-col">
      {/* 
        We are not using the layout's Navbar and Footer because they are already 
        rendered by RootLayout! The layout.tsx wraps around this page.
        Wait! RootLayout wraps everything, including /promo/[slug].
        So the public Navbar and Footer WILL be visible on these promo pages.
        That's exactly what we want! 
      */}
      <div className="flex-1">
        <Render config={config} data={data as any} />
      </div>
    </div>
  );
}
