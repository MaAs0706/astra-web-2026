export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  tier: "staff" | "executive" | "lead";
  department?: string;
  /** Optional override for the automatic /team/<member-id>.jpg portrait path. */
  photo?: string;
}
