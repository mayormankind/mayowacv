import { supabase } from "@/lib/supabase/server";
import { keysToCamel } from "@/lib/utils/case-transform";

// app/api/projects/[slug]/route.ts
export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(keysToCamel(data));
}
