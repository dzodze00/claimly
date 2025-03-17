"use server"

import { getSupabaseServerClient } from "@/lib/supabase"

export async function saveSignup(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    
    if (!firstName || !lastName || !email) {
      return {
        success: false,
        message: "Missing required fields"
      }
    }
    
    // Get Supabase client
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
    
    return {
      success: true,
      message: "User information saved successfully",
      userId
    }
  } catch (error) {
    console.error('Error saving user data:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred"
    }
  }
}

// If you need file upload functionality, here's how to do it with Supabase Storage
export async function uploadFile(bucket: string, filePath: string, file: File) {
  try {
    const supabase = getSupabaseServerClient()
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
      })
    
    if (error) throw error
    
    // Get the public URL
    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath)
    
    return {
      success: true,
      url: urlData.publicUrl
    }
  } catch (error) {
    console.error('Error uploading file:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "An unexpected error occurred"
    }
  }
}
