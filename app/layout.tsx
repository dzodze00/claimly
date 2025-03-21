import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { AuthProvider } from "@/components/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Claimly - Find & File Class Action Claims",
  description: "Claimly helps you find and file class action claims you're eligible for by scanning your digital footprint.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
