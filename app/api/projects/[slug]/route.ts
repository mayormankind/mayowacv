// app/api/projects/[slug]/route.ts
export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", params.slug)
    .eq("status", "published")
    .single();

  if (error) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(data);
}
