/** Shared Framer Motion configuration for the Cindariq design system. */

/** easeOutExpo — snappy deceleration that feels premium */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/** Standard viewport config for whileInView — triggers once, 60px before edge */
export const VIEWPORT_ONCE = { once: true, margin: "-60px" } as const;
