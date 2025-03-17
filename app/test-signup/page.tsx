import { TestForm } from "@/components/test-form"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Test Signup Form</h1>
        <TestForm />
      </div>
    </div>
  )
}

