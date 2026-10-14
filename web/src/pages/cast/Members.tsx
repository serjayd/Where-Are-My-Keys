"use client";
import { CAST_DATA } from "@/config/cast.data";
import MemberCard from "./MemberCard";
import { motion } from "motion/react";

export default function Members() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {CAST_DATA.map((item, index) => (
        <motion.div
          key={item.name}
          className={`
        col-span-1
        ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
      `}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        >
          <MemberCard item={item} />
        </motion.div>
      ))}
    </section>
  );
}
