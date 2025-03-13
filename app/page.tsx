"use client"

import type React from "react"

import { useState } from "react"

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email && typeof email === "string" && !emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    // Show success state
    setFormSubmitted(true)

    // Close modal after 3 seconds
    setTimeout(() => {
      setDialogOpen(false)
      setFormSubmitted(false)
    }, 3000)
  }

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

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="font-bold text-blue-600 text-xl">Claimly</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDialogOpen(true)}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl mb-6">
                Find Out If You're Owed Money From Lawsuits<span className="text-green-600">—In Seconds!</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8">
                Every year, millions of people qualify for class action settlements but never claim them. Check if
                you're eligible and file instantly.
              </p>
              <button
                onClick={() => setDialogOpen(true)}
                className="inline-block rounded-md bg-green-600 px-6 py-3 text-lg font-medium text-white hover:bg-green-700"
              >
                Sign Up Now
              </button>

              <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
                <div className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 font-medium text-sm">T-Mobile</div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 font-medium text-sm">Equifax</div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 font-medium text-sm">Facebook</div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-gray-600 font-medium text-sm">+ 100s more</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Claim What's Yours in Just 3 Steps</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our AI-powered system makes it easy to find and claim settlements you qualify for.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Search</h3>
                <p className="text-gray-600 text-center">Enter your email/phone to scan for eligible claims.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Match</h3>
                <p className="text-gray-600 text-center">AI finds class action lawsuits you qualify for.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">File & Track</h3>
                <p className="text-gray-600 text-center">Submit claims in one click and get updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Settlements Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Featured Settlements</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                These are just a few of the settlements our users are claiming right now.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  T
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">T-Mobile Data Breach</h3>
                <p className="text-green-600 font-bold text-center text-xl mb-2">$25,000 max payout</p>
                <p className="text-gray-600 text-center mb-4">Claim before April 2025</p>
                <button
                  onClick={() => setDialogOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-center"
                >
                  Sign Up to Claim
                </button>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  F
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Facebook Privacy Settlement</h3>
                <p className="text-green-600 font-bold text-center text-xl mb-2">$397 per person</p>
                <p className="text-gray-600 text-center mb-4">Claim closed in 2024</p>
                <button
                  onClick={() => setDialogOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-center"
                >
                  Sign Up to Claim
                </button>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  L
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">loanDepot Settlement</h3>
                <p className="text-green-600 font-bold text-center text-xl mb-2">Up to $5,000</p>
                <p className="text-gray-600 text-center mb-4">Open until May 2025</p>
                <button
                  onClick={() => setDialogOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-center"
                >
                  Sign Up to Claim
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Trust Us?</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We've helped thousands of people claim what's rightfully theirs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">AI-Powered Claim Matching</h3>
                <p className="text-gray-600 text-center">Finds lawsuits you didn't even know you qualified for.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Secure & Private</h3>
                <p className="text-gray-600 text-center">We never share your data without consent.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Trusted by Thousands</h3>
                <p className="text-gray-600 text-center">$10M+ in claims filed through our system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stop Leaving Money on the Table</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              It takes less than 60 seconds to check if you're eligible for compensation.
            </p>
            <button
              onClick={() => setDialogOpen(true)}
              className="inline-block rounded-md bg-white text-blue-600 px-6 py-3 text-lg font-medium hover:bg-gray-100"
            >
              Sign Up Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span className="font-bold text-white text-xl">Claimly</span>
              </div>
              <p className="text-gray-400">Making it easy to find and claim settlements you qualify for.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Settlement Database
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Claimly. All rights reserved.</p>
            <p className="mt-2">Claimly is not a law firm and does not provide legal advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
