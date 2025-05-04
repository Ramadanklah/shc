
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import ContributionForm from "@/components/ContributionForm";
import ContributionsList from "@/components/ContributionsList";
import NeedForm from "@/components/needs/NeedForm";
import NeedsList from "@/components/needs/NeedsList";
import Footer from "@/components/Footer";
import { Upload, Heart, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';
import { supabase } from "@/integrations/supabase/client";

const OrganisationContributions = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [contributions, setContributions] = useState([]);
  const [needs, setNeeds] = useState([]);
  const [organization, setOrganization] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrganizationData = async () => {
      if (!user) return;
      
      try {
        // Fetch organization data
        const { data: orgData, error: orgError } = await supabase
          .from('organisations')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();
        
        if (orgError) throw orgError;
        
        if (orgData) {
          setOrganization(orgData);
          
          // Fetch contributions for this organization
          const { data: contributionsData, error: contributionsError } = await supabase
            .from('contributions')
            .select('*')
            .eq('organisation_id', user.id);
          
          if (contributionsError) throw contributionsError;
          setContributions(contributionsData || []);
          
          // Fetch needs for this organization
          const { data: needsData, error: needsError } = await supabase
            .from('needs')
            .select('*')
            .eq('organisation_id', user.id);
          
          if (needsError) throw needsError;
          setNeeds(needsData || []);
        } else {
          // User doesn't have an organization profile yet
          toast.error(t('organisations.noProfile'), {
            description: t('organisations.createProfile')
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(t('errors.fetchFailed'), {
          description: error instanceof Error ? error.message : t('errors.unknown')
        });
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizationData();
  }, [user, t]);

  const handleContributionSubmit = async (form: any) => {
    if (!user || !organization) return;
    
    try {
      // Insert contribution to database
      const { data, error } = await supabase
        .from('contributions')
        .insert({
          ...form,
          organisation_id: user.id
        })
        .select()
        .single();
      
      if (error) throw error;
      
      // Update local state
      setContributions([data, ...contributions]);
      
      toast.success(t('contributions.submitSuccess'), {
        description: t('contributions.submitDescription', { title: form.title })
      });
    } catch (error) {
      console.error("Error submitting contribution:", error);
      toast.error(t('errors.submissionFailed'), {
        description: error instanceof Error ? error.message : t('errors.unknown')
      });
    }
  };

  const handleNeedSubmit = async (form: any) => {
    if (!user || !organization) return;
    
    try {
      // Insert need to database
      const { data, error } = await supabase
        .from('needs')
        .insert({
          ...form,
          organisation_id: user.id
        })
        .select()
        .single();
      
      if (error) throw error;
      
      // Update local state
      setNeeds([data, ...needs]);
      
      toast.success(t('contributions.needSubmitSuccess'), {
        description: t('contributions.needSubmitDescription', { title: form.title })
      });
    } catch (error) {
      console.error("Error submitting need:", error);
      toast.error(t('errors.submissionFailed'), {
        description: error instanceof Error ? error.message : t('errors.unknown')
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-syria-teal animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!organization) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <h1 className="text-2xl font-bold text-syria-teal mb-4">{t('organisations.noProfile')}</h1>
          <p className="text-gray-600 mb-6 text-center max-w-md">
            {t('organisations.registerFirst')}
          </p>
          <a href="/register-organisation" className="bg-syria-teal hover:bg-syria-teal-dark text-white py-2 px-4 rounded">
            {t('organisations.register')}
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-syria-light">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-10">
        <h1 className="text-3xl font-bold text-syria-teal mb-2 flex items-center gap-2">
          <Upload className="w-7 h-7 text-syria-teal" />
          {t('contributions.title')}
        </h1>
        <p className="text-gray-600 mb-6">
          {t('contributions.description')}
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h2 className="font-medium text-lg">{organization.name}</h2>
          <p className="text-sm text-gray-600">{organization.location}</p>
        </div>
        
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-syria-teal mb-3">{t('contributions.offers')}</h2>
          <ContributionForm onSubmit={handleContributionSubmit} />
          <ContributionsList contributions={contributions} />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-syria-teal mb-3">{t('contributions.needs')}</h2>
          <NeedForm onSubmit={handleNeedSubmit} />
          <NeedsList needs={needs} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrganisationContributions;
