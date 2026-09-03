import resumeData from "../../data/resume";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer
      className="border-t bg-[var(--color-bg-card)] border-[var(--color-border)] py-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} {resumeData.basics.name}
          </p>
          <a
            href="/privacy"
            className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-brand-500"
          >
            Privacy Policy
          </a>
        </div>
        <SocialLinks size={18} />
      </div>
    </footer>
  );
}
