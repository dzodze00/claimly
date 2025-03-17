"use server"

import { getSupabaseServerClient } from "@/lib/supabase"

export async function saveSignup(formData: FormData) {
  // Create a detailed log object we can return to the client
  const logs = ["Server action triggered at " + new Date().toISOString()]

  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string

    logs.push(`Form data received: ${JSON.stringify({ firstName, lastName, email })}`)

    if (!firstName || !lastName || !email) {
      logs.push("Missing required fields")
      return {
        success: false,
        message: "Please fill out all required fields",
        logs,
      }
    }

    // Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    logs.push(`Environment check: URL ${supabaseUrl ? "exists" : "missing"}, Key ${supabaseKey ? "exists" : "missing"}`)

    if (!supabaseUrl || !supabaseKey) {
      return {
        success: false,
        message: "Database configuration error. Please contact support.",
        logs,
      }
    }

    // Get Supabase client
    logs.push("Initializing Supabase client")
    const supabase = getSupabaseServerClient()

    // Insert into users table
    logs.push("Attempting to insert user into database")
    const { data, error } = await supabase.from("users").insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      created_at: new Date().toISOString(),
    })

    if (error) {
      logs.push(`Supabase error: ${error.message}`)
      logs.push(`Error details: ${JSON.stringify(error)}`)

      return {
        success: false,
        message: "Database error: " + error.message,
        logs,
      }
    }

    logs.push("Insert successful")

    return {
      success: true,
      message: "Thank you for signing up!",
      logs,
    }
  } catch (error) {
    logs.push(`Exception: ${error instanceof Error ? error.message : "Unknown error"}`)
    if (error instanceof Error && error.stack) {
      logs.push(`Stack trace: ${error.stack}`)
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred",
      logs,
    }
  }
}

