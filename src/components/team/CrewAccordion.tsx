import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { TeamMember } from "@/types/TeamMember";

const panelColors = [
  "from-secondary-blue/80 via-deep-nebula to-space-black",
  "from-primary-purple/80 via-deep-nebula to-space-black",
  "from-tertiary-cyan/45 via-secondary-blue/70 to-space-black",
  "from-primary-purple/60 via-secondary-blue/70 to-space-black",
];

/** Tap/focus accessible crew accordion; it uses only transforms and one cached local asset. */
export function CrewAccordion({ members }: { members: TeamMember[] }) {
  const [activeId, setActiveId] = useState(members[0]?.id ?? "");
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex h-[22rem] gap-2 sm:h-[28rem] sm:gap-3" aria-label="Core crew">
      {members.map((member, index) => {
        const active = member.id === activeId;
        return (
          <motion.button
            key={member.id}
            type="button"
            aria-pressed={active}
            aria-label={`${member.name}, ${member.role}`}
            onClick={() => setActiveId(member.id)}
            onFocus={() => setActiveId(member.id)}
            onMouseEnter={() => setActiveId(member.id)}
            animate={{ flexGrow: active ? 5 : 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.48, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative min-w-0 overflow-hidden rounded-lg border text-left outline-none focus-visible:ring-2 focus-visible:ring-tertiary-cyan ${
              active ? "border-tertiary-cyan/70" : "border-metallic-silver/20"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${panelColors[index % panelColors.length]}`} />
            <img src={member.photo ?? `/team/${member.id}.jpg`} alt="" onError={(event) => { event.currentTarget.style.display = "none"; }} style={{ objectPosition: member.photoPosition ?? "center" }} className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${active ? "scale-100 opacity-95" : "scale-110 opacity-35"}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/45 to-space-black/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,242,254,0.16),transparent_45%)]" />
            <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.16em] text-tertiary-cyan/90 sm:left-5 sm:top-5">Crew {String(index + 1).padStart(2, "0")}</span>
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
              <motion.span
                className="mb-2 block h-px bg-tertiary-cyan"
                animate={{ scaleX: active ? 1 : 0 }}
                style={{ transformOrigin: "left" }}
              />
              <motion.p
                className="whitespace-nowrap font-display text-base text-starlight-white sm:text-2xl"
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
              >
                {member.name}
              </motion.p>
              <motion.p
                className="mt-1 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.12em] text-tertiary-cyan sm:text-[10px]"
                animate={{ opacity: active ? 1 : 0 }}
              >
                {member.role}
              </motion.p>
              {!active && <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-starlight-white/75 [writing-mode:vertical-rl]">{member.initials}</span>}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
