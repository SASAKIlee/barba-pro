import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Initialize as undefined to handle SSR (Server-Side Rendering)
  // This prevents hydration mismatches where the server renders "false" 
  // but the client initially calculates "true" before the effect runs.
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Safety check for non-browser environments
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      // Use mql.matches for better accuracy than window.innerWidth
      setIsMobile(mql.matches);
    };

    // Set initial state on mount
    setIsMobile(mql.matches);

    // Add listener for changes (e.g., resizing window or rotating device)
    mql.addEventListener("change", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  // Return false if undefined (SSR state) or the actual boolean value
  return !!isMobile;
}