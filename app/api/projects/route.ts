// app/api/projects/route.ts

import { supabase } from "@/lib/supabase/server";
import { keysToCamel } from "@/lib/utils/case-transform";

export async function GET() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("updated_at", { ascending: false });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(keysToCamel(data));
}
