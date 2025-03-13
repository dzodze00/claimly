import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Create a unique ID for this signup
    const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

    // Convert to JSON string
    const jsonData = JSON.stringify({
      ...data,
      id,
      timestamp: new Date().toISOString(),
    })

    // Save to Vercel Blob
    const blob = await put(`signups/${id}.json`, jsonData, {
      access: "public", // IMPORTANT: Must be "public" for free tier
      contentType: "application/json",
    })

    console.log("Signup saved:", blob.url)

    return NextResponse.json({
      success: true,
      message: "Signup saved successfully!",
      url: blob.url,
    })
  } catch (error) {
    console.error("Error saving signup:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to save signup. Please try again.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
