import { motion } from "framer-motion";
import { SectionGlow } from "@/components/common/SectionGlow";

const galleryModules = import.meta.glob("/public/gallery/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const galleryImages = Object.entries(galleryModules)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([path, src]) => ({
    src,
    name: path.split("/").pop()?.replace(/\.[^.]+$/, "").replaceAll("-", " ") ?? "Astra gallery image",
  }));

export function Gallery() {
  return (
    <div className="container-astra relative py-20 sm:py-24">
      <SectionGlow color="rgba(0, 242, 254, 0.16)" className="-left-36 top-20 h-80 w-80" />
      <SectionGlow color="rgba(147, 51, 234, 0.22)" className="-right-36 top-[30rem] h-96 w-96" />

      <header className="relative max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-tertiary-cyan">Field archive</span>
        <h1 className="mt-3 font-display text-5xl font-bold text-starlight-white sm:text-6xl">Gallery</h1>
        <p className="mt-5 text-base leading-7 text-metallic-silver sm:text-lg">A growing record of builds, events, experiments, and the people behind Astra MEC.</p>
      </header>

      <section className="relative mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3" aria-label="Astra MEC gallery">
        {galleryImages.map((image, index) => (
          <motion.figure key={image.src} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.24) }} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-metallic-silver/20 bg-deep-nebula">
            <img src={image.src} alt={image.name} className="w-full object-cover transition duration-500 hover:scale-[1.025]" loading={index < 6 ? "eager" : "lazy"} />
          </motion.figure>
        ))}
      </section>

      {galleryImages.length === 0 && <p className="relative mt-12 font-mono text-xs uppercase tracking-[0.16em] text-metallic-silver">Gallery images will appear here once added.</p>}
    </div>
  );
}
