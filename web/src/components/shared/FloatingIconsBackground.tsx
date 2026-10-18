"use client";

import { motion } from "motion/react";
import {
  KeyRound,
  Ghost,
  BookOpen,
  Soup,
  Lamp,
  Clock,
  Coffee,
  Headphones,
  Glasses,
  type LucideIcon,
} from "lucide-react";

const icons: LucideIcon[] = [
  KeyRound,
  Ghost,
  BookOpen,
  Soup,
  Lamp,
  Clock,
  Coffee,
  Headphones,
  Glasses,
];

const floatingIcons = icons.flatMap((Icon, i) =>
  Array.from({ length: 2 }, (_, j) => ({
    Icon,
    id: `${i}-${j}`,
    left: `${(i * 23.5 + j * 31 + 7) % 95}%`,
    top: `${(i * 37.3 + j * 29 + 5) % 90}%`,
    delay: (i * 0.8 + j * 2) % 10,
    duration: 8 + ((i + j) % 6),
    highlight: j === 0,
  })),
);

export default function FloatingIconsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingIcons.map(
        ({ Icon, id, left, top, delay, duration, highlight }) => (
          <motion.div
            key={id}
            className={`absolute ${
              highlight ? "text-primary" : "text-muted-foreground"
            }`}
            style={{ left, top }}
            animate={{
              opacity: highlight ? [0.15, 0.7, 0.15] : [0, 0.3, 0],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className={`size-10 lg:size-12`} strokeWidth={1.2} />
          </motion.div>
        ),
      )}
    </div>
  );
}
