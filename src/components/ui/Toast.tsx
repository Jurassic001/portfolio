import { AnimatePresence, motion } from "framer-motion";

interface ToastProps {
  message: string;
  visible: boolean;
}

export default function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[var(--color-bg-card)] px-5 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] shadow-lg ring-1 ring-[var(--color-border)] backdrop-blur-sm"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
