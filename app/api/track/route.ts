// app/api/track/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/server";

// Known bot UA substrings — extend as needed
const BOT_PATTERNS =
  /bot|crawl|spider|slurp|search|facebookexternalhit|preview|lighthouse|google-read-aloud|adsbot/i;

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const ua = req.headers.get("user-agent") ?? "";
    if (BOT_PATTERNS.test(ua)) {
      return NextResponse.json({ ok: true, skipped: "bot" });
    }

    const body = await req.json().catch(() => ({}));
    const path: string = typeof body.path === "string" ? body.path : "/";
    const referrer: string | undefined =
      typeof body.referrer === "string" ? body.referrer : undefined;

    // Country from Vercel/Cloudflare header (no-op on local dev)
    const country =
      req.headers.get("x-vercel-ip-country") ??
      req.headers.get("cf-ipcountry") ??
      undefined;

    const { error } = await supabase.from("page_views").insert({
      path,
      referrer: referrer || null,
      country: country || null,
    });

    if (error) {
      // Don't surface DB errors to the client
      console.error("[track] supabase error:", error.message);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[track] unexpected error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
