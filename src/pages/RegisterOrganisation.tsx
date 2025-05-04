
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

const RegisterOrganisation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Form state
  const [orgName, setOrgName] = useState("");
  const [logo, setLogo] = useState<File | null>(null);
  const [location, setLocation] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [license, setLicense] = useState("");
  const [about, setAbout] = useState("");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setLogo(file || null);
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setLogoPreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (whatsapp && !whatsapp.match(/^\+?[1-9]\d{1,14}$/)) {
      toast.error(t('register.invalidWhatsapp'));
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Step 1: Register user account with email
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password: generateSecurePassword(), // In a real app, you would let the user choose their password
        options: {
          data: {
            full_name: contactPerson,
            org_name: orgName
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
          name: orgName,
          description: about,
          location,
          contact_person: contactPerson,
          contact_email: email,
          license,
          whatsapp
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
      
      // Clear form
      setOrgName("");
      setLogo(null);
      setLocation("");
      setContactPerson("");
      setEmail("");
      setLicense("");
      setAbout("");
      setLogoPreview(null);
      setWhatsapp("");
      
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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold mb-1">
                {t('register.orgName')} *
              </label>
              <Input
                required
                value={orgName}
                onChange={e => setOrgName(e.target.value)}
                placeholder="e.g. Syrian Health Initiative"
                className="bg-gray-50"
              />
            </div>
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
            <div>
              <label className="block font-semibold mb-1">
                {t('register.location')} *
              </label>
              <Input
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="e.g. Aleppo, Syria"
                className="bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                {t('register.contactPerson')} *
              </label>
              <Input
                required
                value={contactPerson}
                onChange={e => setContactPerson(e.target.value)}
                placeholder="Full name of main contact"
                className="bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                {t('register.contactEmail')} *
              </label>
              <Input
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="organisation@email.com"
                className="bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">
                {t('register.license')}
                <span className="text-xs text-gray-500"> ({t('register.licenseOptional')})</span>
              </label>
              <Input
                value={license}
                onChange={e => setLicense(e.target.value)}
                placeholder="Reg # or leave blank"
                className="bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">{t('register.about')}</label>
              <Textarea
                value={about}
                onChange={e => setAbout(e.target.value)}
                placeholder={t('register.aboutPlaceholder')}
                className="bg-gray-50"
                rows={3}
              />
            </div>
            <div className="text-center">
              <label className="block font-semibold mb-1">
                {t('register.whatsapp')}
                <span className="text-xs text-gray-500"> ({t('register.whatsappCode')})</span>
              </label>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <Input
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                  placeholder="+1234567890"
                  className="bg-gray-50"
                  type="tel"
                />
              </div>
            </div>
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
