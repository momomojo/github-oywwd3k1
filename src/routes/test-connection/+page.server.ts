import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({
  locals: { supabaseServiceRole, session },
}) => {
  const { data, error: err } = await supabaseServiceRole
    .from("profiles")
    .select("*")
    .limit(1)

  if (err) {
    console.error("Database connection error:", err)
    error(500, "Failed to connect to database")
  }

  return {
    session,
    connectionStatus: data ? "Connected successfully" : "No data but connected",
    data,
  }
}
