import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionGlow } from "@/components/common/SectionGlow";

const tiles = [
  { id: "gallery-1", gradient: "from-secondary-blue to-space-black" },
  { id: "gallery-2", gradient: "from-primary-purple to-deep-nebula" },
  { id: "gallery-3", gradient: "from-tertiary-cyan/60 to-space-black" },
  { id: "gallery-4", gradient: "from-deep-nebula to-secondary-blue" },
];

export function GalleryTeaser() {
  return (
    <section className="container-astra relative py-20">
      <SectionGlow
        color="rgba(0, 242, 254, 0.22)"
        className="-left-32 bottom-0 h-[24rem] w-[24rem]"
      />

      <div className="relative flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Field Archive" title="From the gallery" />
          <Link
            to="/gallery"
            className="font-mono text-xs uppercase tracking-[0.15em] text-tertiary-cyan hover:underline"
          >
            View full gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`group relative aspect-square overflow-hidden rounded-lg border border-metallic-silver/20 bg-gradient-to-br ${tile.gradient} transition-shadow duration-300 hover:border-tertiary-cyan/60 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]`}
            >
              <img src={`/gallery/${tile.id}.jpeg`} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-space-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
