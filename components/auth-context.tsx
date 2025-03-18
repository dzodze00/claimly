"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type User = {
  id: string
  name: string
  email: string
  points: number
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for saved user on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("demoUser")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  // Demo login function
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo, accept any email/password with basic validation
    if (!email.includes("@") || password.length < 6) {
      setIsLoading(false)
      return false
    }
    
    // Create demo user
    const demoUser = {
      id: "demo-user-1",
      name: email.split("@")[0],
      email,
      points: 15
    }
    
    // Save to localStorage for persistence
    localStorage.setItem("demoUser", JSON.stringify(demoUser))
    setUser(demoUser)
    setIsLoading(false)
    return true
  }

  // Demo signup functio
