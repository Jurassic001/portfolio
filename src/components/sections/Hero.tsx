import { motion } from "framer-motion";
import { FileText, Github } from "lucide-react";
import resumeData from "../../data/resume";
import Button from "../ui/Button";

export default function Hero() {
  const { basics, summary } = resumeData;
  const github = basics.profiles.find((p) => p.network === "GitHub");

  return (
    <section
      id="hero"
      className="px-4 pt-28 pb-14 sm:px-6 lg:pt-32 lg:pb-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-14">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {basics.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-brand-500">
            {basics.headline} '{basics.graduation.split(" ").pop().slice(-2)}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            {summary}
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              href="https://jurassic001.github.io/autoCV/cv.pdf"
              external
              variant="primary"
              size="lg"
            >
              <FileText size={18} />
              View Resume
            </Button>
            <Button href={github!.url} external variant="secondary" size="lg">
              <Github size={18} />
              GitHub
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Get in Touch
            </Button>
          </div>
        </motion.div>

        {/* Headshot, with the GitHub avatar tucked into its lower corner */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <img
            src={basics.avatarUrl}
            alt={`${basics.name} professional headshot`}
            width={280}
            height={280}
            className="h-44 w-44 rounded-2xl object-cover object-top ring-1 ring-[var(--color-border)] sm:h-60 sm:w-60"
            loading="eager"
            fetchPriority="high"
          />
          <img
            src={basics.image}
            alt={`${basics.name} GitHub avatar`}
            width={112}
            height={112}
            className="absolute -bottom-3 -left-3 h-14 w-14 rounded-full object-cover object-top ring-4 ring-[var(--color-bg)] sm:h-20 sm:w-20 lg:-right-3 lg:left-auto"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}
