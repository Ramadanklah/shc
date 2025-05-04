
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload } from "lucide-react";
import { OrganisationForm } from "@/features/organisation/OrganisationForm";
import { registerOrganisation } from "@/features/organisation/organisationService";
import { OrganisationFormValues } from "@/features/organisation/schema";

const RegisterOrganisation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: OrganisationFormValues, logo: File | null) => {
    setIsSubmitting(true);
    
    try {
      await registerOrganisation(values, logo);
      
      // Success!
      toast.success(t('register.success'), {
        description: t('register.successDescription')
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center bg-syria-light">
        <div className="w-full max-w-xl mt-12 mb-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-syria-teal flex items-center gap-2">
            <Upload className="w-7 h-7 text-syria-teal" /> {t('register.title')}
          </h2>
          
          <OrganisationForm 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
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
