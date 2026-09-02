import { cn } from "../../utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-colors duration-200",
        hover && "hover:border-[var(--color-border-hover)]",
        className
      )}
    >
      {children}
    </div>
  );
}
