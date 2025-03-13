"use server"

import { put } from "@vercel/blob"

export async function saveSignup(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string

    // Create a unique ID for this signup
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

    // Create a JSON object with the signup data
    const signupData = {
      id,
      firstName,
      lastName,
      email,
      timestamp: new Date().toISOString(),
    }

    // Convert to JSON string
    const jsonData = JSON.stringify(signupData)

    // Save to Vercel Blob
    const blob = await put(`signups/${id}.json`, jsonData, {
      access: "public", // Changed from private to public
      contentType: "application/json",
    })

    console.log("Signup saved:", blob.url) // This will appear in your Vercel logs

    return { success: true, message: "Signup saved successfully!" }
  } catch (error) {
    console.error("Error saving signup:", error)
    return { success: false, message: "Failed to save signup. Please try again." }
  }
}
