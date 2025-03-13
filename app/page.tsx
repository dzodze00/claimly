"use client"

import type React from "react"

import { useState } from "react"
import { saveSignup } from "./actions"

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState("")
  const [debugInfo, setDebugInfo] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError("")
    setDebugInfo(null)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      // Basic email validation
      const email = formData.get("email")
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (email && typeof email === "string" && !emailRegex.test(email)) {
        setFormError("Please enter a valid email address")
        return
      }

      // Test the Blob API first
      const testResponse = await fetch("/api/test-blob")
      const testResult = await testResponse.json()

      setDebugInfo({
        testBlobResult: testResult,
      })

      if (!testResult.success) {
        setFormError(`Blob test failed: ${testResult.message}`)
        return
      }

      // Now try the actual signup
      const result = await saveSignup(formData)

      setDebugInfo((prev) => ({
        ...prev,
        signupResult: result,
      }))

      if (result.success) {
        // Show success state
        setFormSubmitted(true)

        // Close modal after 3 seconds
        setTimeout(() => {
          setDialogOpen(false)
          setFormSubmitted(false)
        }, 3000)
      } else {
        setFormError(result.message)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormError("An error occurred. Please try again.")
      setDebugInfo((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : String(error),
      }))
    }
  }

  // Rest of your component remains the same, but add this debug info display

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Modal/Popup */}
      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setDialogOpen(false)} />
          <div className="relative z-10 w-full max-w-md bg-white p-6 m-4 rounded-lg shadow-xl">
            <button
              onClick={() => setDialogOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!formSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Sign Up for Claimly</h2>
                <p className="mb-6 text-gray-600">
                  Join thousands of people who have already claimed millions in settlement money.
                </p>

                {formError && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{formError}</div>}

                {debugInfo && (
                  <div className="mb-4 p-3 bg-gray-100 text-gray-700 rounded-md text-xs overflow-auto max-h-40">
                    <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input type="text" name="firstName" className="w-full p-2 border rounded-md" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input type="text" name="lastName" className="w-full p-2 border rounded-md" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" name="email" className="w-full p-2 border rounded-md" required />
                    <p className="text-xs text-gray-500 mt-1">
                      We'll send a verification email to confirm your address.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="agreeTerms" name="agreeTerms" className="h-4 w-4" required />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                      I agree to the Terms of Service and Privacy Policy
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md"
                  >
                    Sign Up
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="mb-4 text-green-600 text-5xl">✓</div>
                <h2 className="mb-2 text-2xl font-bold text-blue-800">Thanks for Signing Up!</h2>
                <p className="text-gray-600">
                  We'll be in touch soon with more information about available settlements.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Rest of your component remains the same */}
      {/* ... */}
    </div>
  )
}
