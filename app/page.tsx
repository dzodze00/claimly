"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SignupForm } from "@/components/signup-form"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2">
              <span className="font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-blue-700">Claimly</span>
          </Link>

          <button
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-700">Find Out If You're Owed Money From Lawsuits</span>
            <span className="text-green-600">—In Seconds!</span>
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Every year, millions of people qualify for class action settlements but never claim them. Check if you're
            eligible and file instantly.
          </p>

          <button
            onClick={openModal}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md text-lg transition-colors"
          >
            Sign Up Now
          </button>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-gray-100 px-4 py-2 rounded-full">T-Mobile</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full">Equifax</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full">Facebook</div>
            <div className="bg-gray-100 px-4 py-2 rounded-full">+ 100s more</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Claim What's Yours in Just 3 Steps</h2>

          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Our AI-powered system makes it easy to find and claim settlements you qualify for.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Search</h3>
              <p className="text-gray-600">Enter your email/phone to scan for eligible claims.</p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Match</h3>
              <p className="text-gray-600">AI finds class action lawsuits you qualify for.</p>
            </div>

            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">File & Track</h3>
              <p className="text-gray-600">Submit claims in one click and get updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Settlements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Settlements</h2>
          <p className="text-center text-gray-600 mb-12">
            These are just a few of the settlements our users are claiming right now.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mb-4">
                  T
                </div>
                <h3 className="text-xl font-bold mb-2">T-Mobile Data Breach</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">$25,000 max payout</p>
                <p className="text-sm text-gray-500 mb-6">Claim before April 2025</p>
              </div>
              <div className="bg-gray-50 p-4">
                <button
                  onClick={openModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Sign Up to Claim
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mb-4">
                  F
                </div>
                <h3 className="text-xl font-bold mb-2">Facebook Privacy Settlement</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">$397 per person</p>
                <p className="text-sm text-gray-500 mb-6">Claim closed in 2024</p>
              </div>
              <div className="bg-gray-50 p-4">
                <button
                  onClick={openModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Sign Up to Claim
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mb-4">
                  L
                </div>
                <h3 className="text-xl font-bold mb-2">loanDepot Settlement</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">Up to $5,000</p>
                <p className="text-sm text-gray-500 mb-6">Open until May 2025</p>
              </div>
              <div className="bg-gray-50 p-4">
                <button
                  onClick={openModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Sign Up to Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Trust Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Claim Matching</h3>
              <p className="text-gray-600">Finds lawsuits you didn't even know you qualified for.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
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
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-gray-600">We never share your data without consent.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted by Thousands</h3>
              <p className="text-gray-600">$10M+ in claims filed through our system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stop Leaving Money on the Table</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            It takes less than 60 seconds to check if you're eligible for compensation.
          </p>
          <button
            onClick={openModal}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-md text-lg transition-colors"
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span className="text-blue-600 text-xl font-semibold">Claimly</span>
              </div>
              <p className="text-gray-600 mb-6">Making it easy to find and claim settlements you qualify for.</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Settlement Database
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">© 2025 Claimly. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Claimly is not a law firm and does not provide legal advice.</p>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-blue-700">Get Started with Claimly</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700" aria-label="Close">
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
            </div>

            <div className="p-6">
              <SignupForm />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

