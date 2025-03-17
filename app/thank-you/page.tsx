'use client'

import { useState, useEffect } from 'react'
import { getSupabaseBrowserClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { id?: string }
}) {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  
  useEffect(() => {
    async function fetchUserData() {
      if (!searchParams.id) {
        router.push('/')
        return
      }
      
      try {
        const supabase = getSupabaseBrowserClient()
        const { data, error } = await supabase
          .from('users')
          .select('first_name, last_name, points')
          .eq('id', searchParams.id)
          .single()
        
        if (error || !data) {
          console.error('Error fetching user:', error)
          router.push('/')
          return
        }
        
        setUser(data)
      } catch (error) {
        console.error('Error:', error)
        router.push('/')
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchUserData()
  }, [searchParams.id, router])
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Thank You, {user.first_name}!</h1>
        <p className="text-gray-600 mb-6">
          Your information has been submitted successfully. We'll match you with eligible lawsuits and be in touch soon.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
