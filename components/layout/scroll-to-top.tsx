"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CaretUp } from "@phosphor-icons/react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-6 bottom-6 z-50 flex size-11 items-center justify-center rounded-md bg-cinder text-smoke shadow-lg ring-1 ring-smoke/10 transition-colors hover:bg-ember hover:text-smoke hover:ring-ember focus-visible:ring-2 focus-visible:ring-ember focus-visible:outline-none"
        >
          <CaretUp size={18} weight="bold" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
