export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  tier: "staff" | "executive" | "lead";
  department?: string;
  /** Public image path, for example: /team/parvathy-gopu.jpg */
  photo?: string;
}
