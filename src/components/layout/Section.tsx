import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../utils/cn";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "px-4 py-20 sm:px-6 lg:py-24",
        className
      )}
    >
      <motion.div
        className="mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {title && (
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <div className="mx-auto mt-4 h-px w-12 bg-brand-500" />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
