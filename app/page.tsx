"use client"

import { useState } from "react"
import Link from "next/link"
import { SignupFormAction } from "@/components/signup-form-action"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
            Sign Me Up
          </button>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="bg-white px-4 py-2 rounded-md shadow-sm">T-Mobile</div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm">Equifax</div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm">Facebook</div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm">+ 100s more</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">Claim What's Yours in Just 3 Steps</h2>

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
              <SignupFormAction />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
