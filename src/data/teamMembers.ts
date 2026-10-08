import type { TeamMember } from "@/types/TeamMember";

/**
 * Astra MEC crew manifest. The Team page groups this list into staff,
 * executive command, and department leads. Portraits are loaded automatically
 * from public/team/<member-id>.jpg; no roster edit is required for photos.
 */
export const teamMembers: TeamMember[] = [
  { id: "vyshnavi-b", name: "Vyshnavi B", role: "Staff in Charge", initials: "VB", tier: "staff" },
  { id: "ananthalakshmi-ka", name: "Ananthalakshmi KA", role: "Staff in Charge", initials: "AK", tier: "staff", photoPosition: "center 68%" },

  { id: "parvathy-gopu", name: "Parvathy Gopu", role: "Chairperson", initials: "PG", tier: "executive" },
  { id: "rohit-ramesh", name: "Rohit Ramesh", role: "Vice Chairperson", initials: "RR", tier: "executive", photoPosition: "center 78%" },
  { id: "husna-ea", name: "Husna EA", role: "Secretary", initials: "HE", tier: "executive", photoPosition: "center 75%" },
  { id: "prarthana-suresh", name: "Prarthana Suresh", role: "Treasurer", initials: "PS", tier: "executive" },

  { id: "shreyas-mp", name: "Shreyas MP", role: "Space Lead", initials: "SM", tier: "lead", department: "Space" },
  { id: "meekhal-mariam", name: "Meekhal Mariam", role: "Publicity Lead", initials: "MM", tier: "lead", department: "Publicity" },
  { id: "gautham-chandra", name: "Gautham Chandra", role: "Publicity Lead", initials: "GC", tier: "lead", department: "Publicity" },
  { id: "aldrin-antony", name: "Aldrin Antony", role: "Tech Lead", initials: "AA", tier: "lead", department: "Tech" },
  { id: "nikhil-p-dennis", name: "Nikhil P Dennis", role: "Tech Lead", initials: "ND", tier: "lead", department: "Tech" },
  { id: "shamil-fiyaz-s", name: "Shamil Fiyaz S", role: "Ambience Lead", initials: "SF", tier: "lead", department: "Ambience" },
  { id: "mischell-maria-martin", name: "Mischell Maria Martin", role: "Content Head", initials: "MM", tier: "lead", department: "Content" },
  { id: "gayathri-vimaldev", name: "Gayathri Vimaldev", role: "Content Head", initials: "GV", tier: "lead", department: "Content" },
  { id: "adithya-nanda-gopal", name: "Adithya Nanda Gopal", role: "Robotics Lead", initials: "AG", tier: "lead", department: "Robotics" },
  { id: "ganga-satheesh", name: "Ganga Satheesh", role: "Marketing Lead", initials: "GS", tier: "lead", department: "Marketing" },
  { id: "lakshmi-sajikumar", name: "Lakshmi Sajikumar", role: "Marketing Lead", initials: "LS", tier: "lead", department: "Marketing" },
  { id: "neel-a-ved", name: "Neel A Ved", role: "Marketing Lead", initials: "NV", tier: "lead", department: "Marketing" },
  { id: "aparna-r", name: "Aparna R", role: "Documentation Lead", initials: "AR", tier: "lead", department: "Documentation" },
  { id: "krishna-santhosh", name: "Krishna Santhosh", role: "Media Lead", initials: "KS", tier: "lead", department: "Media" },
  { id: "nevin-simon", name: "Nevin Simon", role: "Design Lead", initials: "NS", tier: "lead", department: "Design", photoPosition: "center top" },
  { id: "vyshakhi-yogesh", name: "Vyshakhi Yogesh", role: "Events Lead", initials: "VY", tier: "lead", department: "Events" },
  { id: "meghashree-girish", name: "Meghashree Girish", role: "Events Lead", initials: "MG", tier: "lead", department: "Events" },
  { id: "krishna-mohan", name: "Krishna Mohan", role: "Outreach Lead", initials: "KM", tier: "lead", department: "Outreach" },
];
