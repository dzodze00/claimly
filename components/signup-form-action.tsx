"use client"

import { useState } from "react"
import { saveSignup } from "@/app/actions"

export function SignupFormAction() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setMessage(null)
    console.log("Form submitted with Server Action")

    try {
      const result = await saveSignup(formData)
      console.log("Server action result:", result)

      if (result.success) {
        setMessage({
          text: result.message,
          type: "success",
        })
      } else {
        setMessage({
          text: result.message,
          type: "error",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setMessage({
        text: error instanceof Error ? error.message : "Something went wrong",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Get Started</h2>

      {message && (
        <div
          className={`p-4 mb-4 rounded-md ${
            message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="your@email.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input type="text" id="lastName" name="lastName" required className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="flex items-start mt-4">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Processing..." : "Start My Free Scan"}
        </button>
      </form>
    </div>
  )
}

