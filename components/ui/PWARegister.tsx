"use client";
import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // In dev a registered SW serves stale pages and /_next chunks cache-first,
    // which makes the UI render outdated code after hydration. Never register
    // outside production — and actively clean up any previous registration.
    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker
        .getRegistrations()
        .then((regs) => regs.forEach((reg) => reg.unregister()));
      caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
      return;
    }

    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .catch((err) => console.error("SW registration failed:", err));
  }, []);

  return null;
}
