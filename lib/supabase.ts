import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for the browser
const createBrowserClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables for browser client")
    // Return a dummy client that logs errors
    return {
      from: () => ({
        select: () => Promise.resolve({ data: null, error: new Error("Supabase configuration missing") }),
        insert: () => Promise.resolve({ data: null, error: new Error("Supabase configuration missing") }),
      }),
    } as any
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// Create a single supabase client for server components
const createServerClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Missing Supabase environment variables for server client")
    // Return a dummy client that logs errors
    return {
      from: () => ({
        select: () => Promise.resolve({ data: null, error: new Error("Supabase configuration missing") }),
        insert: () => Promise.resolve({ data: null, error: new Error("Supabase configuration missing") }),
      }),
    } as any
  }

  return createClient(supabaseUrl, supabaseServiceKey)
}

// Client singleton to avoid multiple instances
let browserClient: any = null

export const getSupabaseBrowserClient = () => {
  if (!browserClient) {
    browserClient = createBrowserClient()
  }
  return browserClient
}

export const getSupabaseServerClient = () => {
  return createServerClient()
}

