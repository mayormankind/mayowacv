"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ViewTracker() {
  const pathname = usePathname();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    // Avoid double-tracking the same path (strict mode / fast navigation)
    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;

    const referrer = document.referrer || undefined;

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname, referrer }),
      // Fire-and-forget: don't block rendering
    }).catch(() => {/* silently ignore network errors */});
  }, [pathname]);

  return null;
}
