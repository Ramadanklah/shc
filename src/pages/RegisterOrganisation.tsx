
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";
import { Upload, MessageCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const RegisterOrganisation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Local state for image upload preview
  const [logo, setLogo] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form validation schema
  const formSchema = z.object({
    orgName: z.string().min(2, t('register.nameRequired')),
    location: z.string().min(2, t('register.locationRequired')),
    contactPerson: z.string().min(2, t('register.contactPersonRequired')),
    email: z.string().email(t('register.validEmail')),
    license: z.string().optional(),
    about: z.string().optional(),
    whatsapp: z.string()
      .refine(val => !val || val.match(/^\+?[1-9]\d{1,14}$/), { 
        message: t('register.invalidWhatsapp') 
      }).optional(),
  });

  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orgName: "",
      location: "",
      contactPerson: "",
      email: "",
      license: "",
      about: "",
      whatsapp: "",
    },
  });

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(t('register.logoTooLarge'));
        return;
      }
      
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setLogo(null);
      setLogoPreview(null);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
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
      
      // Success!
      toast.success(t('register.success'), {
        description: t('register.successDescription')
      });
      
      // Send password reset email so user can set their own password
      await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      // Redirect to home page
      setTimeout(() => navigate('/'), 2000);
      
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(t('register.error'), {
        description: error instanceof Error ? error.message : t('register.errorDescription')
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Generate a secure random password
  const generateSecurePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center bg-syria-light">
        <div className="w-full max-w-xl mt-12 mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-syria-teal flex items-center gap-2">
            <Upload className="w-7 h-7 text-syria-teal" /> {t('register.title')}
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="orgName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      {t('register.orgName')} *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. Syrian Health Initiative"
                        className="bg-gray-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <label className="block font-semibold mb-1">
                  {t('register.logo')}
                </label>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-syria-teal text-white rounded hover:bg-syria-teal-dark">
                    <Upload className="w-5 h-5" />
                    <span>{t('register.uploadLogo')}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoChange}
                    />
                  </label>
                  {logoPreview && (
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-12 h-12 object-cover rounded-full border"
                    />
                  )}
                </div>
              </div>

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      {t('register.location')} *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g. Aleppo, Syria"
                        className="bg-gray-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      {t('register.contactPerson')} *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Full name of main contact"
                        className="bg-gray-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      {t('register.contactEmail')} *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="organisation@email.com"
                        className="bg-gray-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="license"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      {t('register.license')}
                      <span className="text-xs text-gray-500"> ({t('register.licenseOptional')})</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Reg # or leave blank"
                        className="bg-gray-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">{t('register.about')}</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={t('register.aboutPlaceholder')}
                        className="bg-gray-50"
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      {t('register.whatsapp')}
                      <span className="text-xs text-gray-500"> ({t('register.whatsappCode')})</span>
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <Input
                          {...field}
                          placeholder="+1234567890"
                          className="bg-gray-50"
                          type="tel"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between items-center mt-4">
                <Button
                  className="bg-syria-teal hover:bg-syria-teal-dark text-white"
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t('register.submitting')}
                    </>
                  ) : (
                    t('register.submit')
                  )}
                </Button>
                <Link to="/" className="text-syria-teal underline">
                  {t('register.cancel')}
                </Link>
              </div>
            </form>
          </Form>
        </div>
        <div className="mb-16 text-gray-500 text-sm">
          {t('register.alreadyRegistered')}{" "}
          <Link to="/login" className="text-syria-teal underline">
            {t('register.login')}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterOrganisation;
