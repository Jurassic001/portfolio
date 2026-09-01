export interface PrivacyLink {
  label: string;
  url: string;
}

export interface PrivacySection {
  id: string;
  title: string;
  /** Paragraphs, rendered in order. */
  body: string[];
  bullets?: string[];
  /** External references, rendered beneath the section body. */
  links?: PrivacyLink[];
}

export interface PrivacyPolicy {
  title: string;
  effectiveDate: string;
  intro: string[];
  sections: PrivacySection[];
}
