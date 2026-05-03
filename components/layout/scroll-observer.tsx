"use client";

import { useEffect } from "react";
import { useUIStore } from "@/lib/store/ui-store";

/**
 * Registers a single passive scroll listener at the marketing layout level
 * (PRD §8.2 — one listener, not per-component).
 * Renders nothing — purely a side-effect component.
 */
export function ScrollObserver() {
  const setScrolled = useUIStore((s) => s.setScrolled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Sync initial state (e.g. page loaded mid-scroll via browser restore)
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrolled]);

  return null;
}
