export default function TestSupabasePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">Supabase Connection Test</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p>This is a simple test page to verify routing is working.</p>
          <p className="mt-4">Environment variables:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || "Not set"}</li>
            <li>
              NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Set (hidden)" : "Not set"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

