"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div">;

export function Reveal({ children, ...rest }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const content = children as ReactNode;

  if (reduceMotion) {
    return (
      <div {...(rest as ComponentProps<"div">)}>{content}</div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {content}
    </motion.div>
  );
}
