"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextLightUpProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextLightUp({ children, className = "", delay = 0 }: TextLightUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = children.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ color: "rgba(255,255,255,0.15)" }}
          animate={isInView ? { color: "rgba(255,255,255,0.6)" } : { color: "rgba(255,255,255,0.15)" }}
          transition={{ duration: 0.4, delay: delay + i * 0.04, ease: "easeOut" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
