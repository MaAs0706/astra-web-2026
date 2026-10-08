import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { getTeamMembers } from "@/services/teamService";
import { siteConfig } from "@/constants/site";
import type { TeamMember } from "@/types/TeamMember";

function RosterStat({ label, value }: { label: string; value: string | number }) {
  return <div className="flex flex-col gap-1"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-metallic-silver">{label}</span><span className="font-mono text-lg text-starlight-white sm:text-xl">{value}</span></div>;
}

function MemberPortrait({ member, featured }: { member: TeamMember; featured: boolean }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const photoSrc = member.photo ?? `/team/${member.id}.jpg`;
  const style = featured ? "border-primary-purple/60 text-primary-purple" : "border-tertiary-cyan/50 text-tertiary-cyan";

  if (photoFailed) return <div className={`relative grid aspect-[4/3] w-full place-items-center overflow-hidden border-b bg-gradient-to-br from-deep-nebula to-space-black ${style}`}><span className="font-display text-5xl font-semibold">{member.initials}</span><span className="absolute bottom-4 font-mono text-[9px] uppercase tracking-[0.2em] text-metallic-silver/65">Portrait pending</span></div>;

  return <img src={photoSrc} alt={`Portrait of ${member.name}`} onError={() => setPhotoFailed(true)} style={{ objectPosition: member.photoPosition ?? "center" }} className={`w-full border-b object-cover transition duration-500 group-hover:scale-[1.03] ${featured ? "aspect-[4/3]" : "aspect-[3/4]"} ${style}`} />;
}

function MemberCard({ member, index, featured = false }: { member: TeamMember; index: number; featured?: boolean }) {
  return (
    <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.38, delay: Math.min(index * 0.05, 0.25) }} className={`group relative overflow-hidden rounded-xl border ${featured ? "border-primary-purple/45 bg-deep-nebula/85" : "border-metallic-silver/20 bg-space-black/55"}`}>
      <div aria-hidden="true" className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-tertiary-cyan/10 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="relative overflow-hidden"><MemberPortrait member={member} featured={featured} /></div>
      <div className="relative p-5"><h3 className="font-display text-xl font-semibold text-starlight-white">{member.name}</h3><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.13em] text-metallic-silver">{member.role}</p></div>
    </motion.article>
  );
}

export function Team() {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => { getTeamMembers().then(setMembers); }, []);

  const staff = members.filter((member) => member.tier === "staff");
  const executive = members.filter((member) => member.tier === "executive");
  const groupedLeads = useMemo(() => {
    const groups = new Map<string, TeamMember[]>();
    members.filter((member) => member.tier === "lead").forEach((member) => {
      const department = member.department ?? "Operations";
      groups.set(department, [...(groups.get(department) ?? []), member]);
    });
    return [...groups.entries()];
  }, [members]);
  return (
    <div className="container-astra flex flex-col gap-16 py-20 sm:gap-24">
      <motion.header initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex max-w-2xl flex-col gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-tertiary-cyan">Crew manifest</span>
        <h1 className="font-display text-5xl font-bold text-starlight-white sm:text-6xl">Meet the team</h1>
        <p className="text-metallic-silver">Astra MEC is guided by staff, led by its executive command, and powered by focused teams across every department.</p>
      </motion.header>

      <div className="glass-panel flex flex-wrap gap-8 rounded-lg px-6 py-5">
        <RosterStat label="Staff in Charge" value={staff.length} />
        <RosterStat label="Executive Command" value={executive.length} />
        <RosterStat label="Departments" value={groupedLeads.length} />
        <RosterStat label="Established" value={siteConfig.foundedYear} />
      </div>

      <section className="flex flex-col gap-6" aria-labelledby="staff-title">
        <div><span className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary-cyan">Guidance</span><h2 id="staff-title" className="mt-2 font-display text-3xl font-semibold text-starlight-white">Staff in Charge</h2></div>
        <div className="grid gap-4 sm:grid-cols-2">{staff.map((member, index) => <MemberCard key={member.id} member={member} index={index} featured />)}</div>
      </section>

      <section className="flex flex-col gap-6" aria-labelledby="command-title">
        <div><span className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary-cyan">Executive command</span><h2 id="command-title" className="mt-2 font-display text-3xl font-semibold text-starlight-white">Core leadership</h2></div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{executive.map((member, index) => <MemberCard key={member.id} member={member} index={index} featured />)}</div>
      </section>

      <section className="flex flex-col gap-10" aria-labelledby="departments-title">
        <div><span className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary-cyan">Department leads</span><h2 id="departments-title" className="mt-2 font-display text-3xl font-semibold text-starlight-white">The crew network</h2></div>
        <div className="flex flex-col gap-12">
          {groupedLeads.map(([department, leads]) => <section key={department} className="flex flex-col gap-5"><div className="flex items-center gap-4"><h3 className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-tertiary-cyan">{department}</h3><div className="h-px flex-1 bg-metallic-silver/15" /><span className="font-mono text-[10px] uppercase tracking-[0.13em] text-metallic-silver/60">{leads.length} {leads.length === 1 ? "lead" : "leads"}</span></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{leads.map((member, index) => <MemberCard key={member.id} member={member} index={index} />)}</div></section>)}
        </div>
      </section>
    </div>
  );
}
