import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kzahkdkpigutzspxwrpq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6YWhrZGtwaWd1dHpzcHh3cnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4NzA1NjYsImV4cCI6MjAwNjQ0NjU2Nn0.xnTNsYPGURhKCJqGh1lgQKRrxJQN0D13WSwzV9tDVGQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
