import { cn } from "../../utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors duration-200",
        "hover:border-[var(--color-border-hover)]",
        className
      )}
    >
      {children}
    </div>
  );
}
