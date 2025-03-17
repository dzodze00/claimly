"use server"

import { getSupabaseServerClient } from "@/lib/supabase"

export async function saveSignup(formData: FormData) {
  console.log("Server action triggered")

  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string

    console.log("Form data received:", { firstName, lastName, email })

    if (!firstName || !lastName || !email) {
      console.log("Missing required fields")
      return {
        success: false,
        message: "Please fill out all required fields",
      }
    }

    // Get Supabase client
    const supabase = getSupabaseServerClient()

    // Insert into users table
    const { data, error } = await supabase.from("users").insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
    })

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        message: error.message,
      }
    }

    console.log("Insert successful")

    return {
      success: true,
      message: "Thank you for signing up!",
    }
  } catch (error) {
    console.error("Server action error:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}

