import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Les variables d'environnement Supabase ne sont pas configurées");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
