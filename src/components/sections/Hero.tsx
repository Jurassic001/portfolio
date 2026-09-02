import { motion } from "framer-motion";
import { ArrowDown, FileText, Github } from "lucide-react";
import resumeData from "../../data/resume";
import Button from "../ui/Button";

export default function Hero() {
  const { basics } = resumeData;
  const github = basics.profiles.find((p) => p.network === "GitHub");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 pt-20 sm:px-6"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-brand-500 uppercase">
            {basics.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&rsquo;m{" "}
            <span className="text-brand-500">{basics.name}</span>
          </h1>
          <p className="mt-4 text-xl text-[var(--color-text-secondary)] sm:text-2xl">
            {basics.label} @ Texas A&amp;M University
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)] lg:max-w-lg">
            Passionate about aerospace innovation, control system modeling, embedded systems, and computer architecture. I build things that fly, sense, and compute.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              href="https://jurassic001.github.io/autoCV/cv.pdf" 
              external
              variant="primary"
              size="lg"
            >
              <FileText size={18} />
              View Resume
            </Button>
            <Button
              href={github!.url}
              external
              variant="secondary"
              size="lg"
            >
              <Github size={18} />
              GitHub
            </Button>
            <Button
              href="#contact"
              variant="ghost"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative">
            <img
              src={basics.image}
              alt={`${basics.name} professional headshot`}
              width={280}
              height={280}
              className="relative h-56 w-56 rounded-full object-cover object-top ring-1 ring-[var(--color-border)] shadow-md sm:h-72 sm:w-72"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown
          size={20}
          className="text-[var(--color-text-muted)]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
