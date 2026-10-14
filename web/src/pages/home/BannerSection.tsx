"use client";

import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function BannerSection() {
  return (
    <section className="bg-secondary/50 py-16">
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center sm:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-10 flex items-center justify-center gap-4 sm:mb-14"
        >
          <span className="h-px w-8 bg-primary" />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
            A question from the dark
          </p>
          <span className="h-px w-8 bg-primary" />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]"
        >
          &ldquo;What if we
          <span className="mt-2 block italic text-primary sm:mt-4">
            aren&apos;t alone?&rdquo;
          </span>
        </motion.h2>

        <motion.div variants={itemVariants} className="mx-auto mt-8 max-w-lg">
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            Not all hauntings are frightening.
            <span className="mt-1 block font-serif text-xl italic text-foreground sm:text-2xl">
              Some of them wash your dishes.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
