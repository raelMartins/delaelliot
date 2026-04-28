"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  const ringTargetX = useMotionValue(0);
  const ringTargetY = useMotionValue(0);

  const ringX = useSpring(ringTargetX, { stiffness: 180, damping: 22, mass: 0.35 });
  const ringY = useSpring(ringTargetY, { stiffness: 180, damping: 22, mass: 0.35 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX - 6);
      dotY.set(e.clientY - 6);
      ringTargetX.set(e.clientX - 18);
      ringTargetY.set(e.clientY - 18);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, dotX, dotY, ringTargetX, ringTargetY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor" style={{ x: dotX, y: dotY, translateZ: 0 }} />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, translateZ: 0 }}
      />
    </>
  );
}
