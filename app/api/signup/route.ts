import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email } = await request.json()
    
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const supabase = getSupabaseServerClient()
    
    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .maybeSingle()
    
    let userId
    
    if (existingUser) {
      // Update existing user
      const { error } = await supabase
        .from('users')
        .update({
          first_name: firstName,
          last_name: lastName,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingUser.id)
      
      if (error) throw error
      userId = existingUser.id
    } else {
      // Insert new user
      const { data, error } = await supabase
        .from('users')
        .insert({
          email,
          first_name: firstName,
          last_name: lastName,
          points: 10, // Starting points for new users
        })
        .select('id')
        .single()
      
      if (error) throw error
      userId = data.id
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'User information saved successfully',
      userId 
    })
  } catch (error) {
    console.error('Error saving user data:', error)
    return NextResponse.json(
      { error: 'Failed to save user information' },
      { status: 500 }
    )
  }
}
