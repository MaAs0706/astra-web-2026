import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionGlow } from "@/components/common/SectionGlow";
import { getEvents } from "@/services/eventService";
import type { AstraEvent } from "@/types/Event";

const categoryLabel: Record<AstraEvent["category"], string> = {
  hackathon: "Buildathon",
  workshop: "Systems lab",
  observation: "Sky watch",
  talk: "Signal briefing",
};

/** A calm, conventional horizontal event line for the landing page. */
export function RecentEvents() {
  const [events, setEvents] = useState<AstraEvent[]>([]);

  useEffect(() => {
    getEvents().then((records) => setEvents(records.reverse()));
  }, []);

  return (
    <section className="container-astra relative py-16 sm:py-24" aria-labelledby="timeline-title">
      <SectionGlow color="rgba(0, 242, 254, 0.15)" className="-left-36 top-20 h-80 w-80" />
      <SectionGlow color="rgba(18, 62, 234, 0.22)" className="-right-40 bottom-0 h-[28rem] w-[28rem]" />

      <div className="relative">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading id="timeline-title" eyebrow="Mission log" title="Event trajectory" />
          <Link to="/events" className="w-fit font-mono text-xs uppercase tracking-[0.15em] text-tertiary-cyan transition-colors hover:text-starlight-white">View all missions <span aria-hidden="true">↗</span></Link>
        </div>

        <div className="relative mt-12 pt-10 sm:mt-16 sm:pt-12">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[2.45rem] h-px bg-gradient-to-r from-transparent via-tertiary-cyan/70 to-transparent sm:top-[3rem]" />
          <div className="relative flex justify-center">
            {events.map((event) => (
              <article key={event.id} className="w-full max-w-2xl">
                <div className="mx-auto grid h-5 w-5 place-items-center rounded-full border-2 border-tertiary-cyan bg-space-black shadow-[0_0_20px_rgba(0,242,254,0.85)]"><span className="h-1.5 w-1.5 rounded-full bg-tertiary-cyan" /></div>
                <div className="mt-6 rounded-xl border border-tertiary-cyan/35 bg-deep-nebula/80 p-5 shadow-[0_18px_42px_rgba(0,0,0,0.25)] sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3"><span className="rounded-sm border border-tertiary-cyan/55 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-tertiary-cyan">{categoryLabel[event.category]}</span><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-metallic-silver/70">Flagship event · 2025</span></div>
                  <h3 className="mt-5 font-display text-3xl font-semibold text-starlight-white sm:text-4xl">{event.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-metallic-silver sm:text-base">{event.summary}</p>
                  <Link to="/events" className="mt-5 inline-flex font-mono text-[11px] uppercase tracking-[0.14em] text-tertiary-cyan transition-colors hover:text-starlight-white">Read event report <span className="ml-2">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
