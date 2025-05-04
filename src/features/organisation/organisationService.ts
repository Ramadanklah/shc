
import { supabase } from "@/integrations/supabase/client";
import { OrganisationFormValues } from "./schema";

// Generate a secure random password
export const generateSecurePassword = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export const registerOrganisation = async (
  values: OrganisationFormValues, 
  logo: File | null
) => {
  // Generate a secure password
  const password = generateSecurePassword();
  
  // Step 1: Register user account with email
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: values.email,
    password: password, 
    options: {
      data: {
        full_name: values.contactPerson,
        org_name: values.orgName
      }
    }
  });
  
  if (authError) throw authError;
  
  if (!authData.user) {
    throw new Error("User registration failed");
  }
  
  // Step 2: Create organization record
  const { error: orgError } = await supabase
    .from('organisations')
    .insert({
      id: authData.user.id,
      name: values.orgName,
      description: values.about || null,
      location: values.location,
      contact_person: values.contactPerson,
      contact_email: values.email,
      license: values.license || null,
      whatsapp: values.whatsapp || null
    });
  
  if (orgError) throw orgError;
  
  // Step 3: Upload logo if provided
  if (logo) {
    const fileExt = logo.name.split('.').pop();
    const filePath = `${authData.user.id}/${Date.now()}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('org_logos')
      .upload(filePath, logo);
    
    if (uploadError) {
      console.error("Logo upload failed:", uploadError);
      // Continue anyway, logo is optional
    } else {
      // Update organization with logo URL
      const { data: urlData } = supabase.storage
        .from('org_logos')
        .getPublicUrl(filePath);
      
      await supabase
        .from('organisations')
        .update({ logo_url: urlData.publicUrl })
        .eq('id', authData.user.id);
    }
  }
  
  // Send password reset email so user can set their own password
  await supabase.auth.resetPasswordForEmail(values.email, {
    redirectTo: `${window.location.origin}/auth`,
  });

  // Attempt to sign in the user immediately 
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: password
  });
  
  if (signInError) {
    console.error("Auto sign-in failed, user will need to check email for password reset:", signInError);
  }

  return authData.user;
};
