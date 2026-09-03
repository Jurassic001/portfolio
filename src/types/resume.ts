// ─── Resume Data Type Definitions ───

export interface Basics {
  name: string;
  email: string;
  /** Canonical site URL; referenced by the privacy policy. */
  website: string;
  image: string;
  avatarUrl: string;
  profiles: Profile[];
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  /** Organization or event the work was done for, if any. */
  org?: string;
  /** Role held, shown alongside the org. */
  role?: string;
  /** Human-readable date range, e.g. "2025 - Present". */
  period?: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  outcomes: string[];
  image?: string;
}

export interface ResumeData {
  basics: Basics;
  summary: string;
  projects: ProjectEntry[];
}
