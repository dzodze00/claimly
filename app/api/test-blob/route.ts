import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Create a test file
    const testData = JSON.stringify({ test: "This is a test", timestamp: new Date().toISOString() })

    // Save to Vercel Blob
    const blob = await put(`test/test-${Date.now()}.json`, testData, {
      access: "public",
      contentType: "application/json",
    })

    return NextResponse.json({
      success: true,
      message: "Test file created successfully!",
      url: blob.url,
    })
  } catch (error) {
    console.error("Error creating test file:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create test file",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
