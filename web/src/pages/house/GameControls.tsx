"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

interface Props {
  foundCount: number;
  onStart: () => void;
}

export default function GameControls({ foundCount, onStart }: Props) {
  return (
    <section className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        className="flex items-center gap-4"
      >
        <span className="h-px w-8 bg-primary" />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
          The Room
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex items-center gap-6"
      >
        <span className="font-mono text-sm uppercase text-primary">
          {foundCount} / 9 clues
        </span>

        <Button size="lg" onClick={onStart}>
          Start the Search
        </Button>
      </motion.div>
    </section>
  );
}
