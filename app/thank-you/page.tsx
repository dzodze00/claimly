'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SignupForm } from '@/components/signup-form'

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
            Every year, millions of people qualify for class action settlements but never claim them. 
            Check if you're eligible and file instantly.
          </p>
          
          <button 
            onClick={openModal}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md text-lg transition-colors"
          >
            Sign Up Now
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
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            Claim What's Yours in Just 3 Steps
          </h2>
          
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Our AI-powered system makes it easy to find and claim settlements you qualify for.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Search</h3>
              <p className="text-gray-600">
                Enter your email/phone to scan for eligible claims.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Match</h3>
              <p className="text-gray-600">
                AI finds class action lawsuits you qualify for.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">File & Track</h3>
              <p className="text-gray-600">
                Submit claims in one click and get updates.
              </p>
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
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <SignupFormContent onSuccess={(userId) => {
                closeModal();
                router.push(`/thank-you?id=${userId}`);
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Signup form content component
function SignupFormContent({ onSuccess }: { onSuccess: (userId: string) => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const form = event.currentTarget
    const formData = new FormData(form)
    
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      
      // Call the success callback with the user ID
      onSuccess(data.userId)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <>
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
            I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Processing...' : 'Start My Free Scan'}
        </button>
      </form>
    </>
  )
}
