
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LatestCases from "../components/LatestCases";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <LatestCases />
        
        <section className="py-16 bg-gradient-to-br from-syria-teal/20 to-syria-blue/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-syria-dark">
                  {t('joinMission.title')}
                </h2>
                <p className="text-gray-700 mb-6">
                  {t('joinMission.text')}
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-syria-teal/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-syria-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-syria-dark">{t('donate.tracking')}</h3>
                      <p className="text-sm text-gray-600">{t('donate.trackingDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-syria-teal/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-syria-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-syria-dark">{t('donate.secure')}</h3>
                      <p className="text-sm text-gray-600">{t('donate.secureDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-syria-teal/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-syria-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-syria-dark">{t('donate.taxDeductible')}</h3>
                      <p className="text-sm text-gray-600">{t('donate.taxDeductibleDesc')}</p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="bg-syria-teal hover:bg-syria-teal-dark text-white"
                  size="lg"
                  asChild
                >
                  <Link to="/register-organisation">{t('nav.registerOrg')}</Link>
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-syria-dark text-center">
                  {t('register.title')}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  Register your organization to contribute resources, equipment, or volunteer services.
                </p>
                <Button 
                  className="w-full bg-syria-teal hover:bg-syria-teal-dark text-white py-6"
                  size="lg"
                  asChild
                >
                  <Link to="/register-organisation">{t('register.submit')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-syria-dark">{t('testimonials.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('testimonials.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-syria-light p-6 rounded-lg relative">
                <div className="text-syria-teal text-5xl absolute -top-4 left-4">"</div>
                <div className="pt-4">
                  <p className="text-gray-700 mb-4 italic">
                    {t('testimonials.quote1')}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-syria-dark">Fatima S.</h4>
                      <p className="text-xs text-gray-500">{t('testimonials.patient1')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-syria-light p-6 rounded-lg relative">
                <div className="text-syria-teal text-5xl absolute -top-4 left-4">"</div>
                <div className="pt-4">
                  <p className="text-gray-700 mb-4 italic">
                    {t('testimonials.quote2')}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-syria-dark">Dr. Hassan M.</h4>
                      <p className="text-xs text-gray-500">{t('testimonials.doctor')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-syria-light p-6 rounded-lg relative">
                <div className="text-syria-teal text-5xl absolute -top-4 left-4">"</div>
                <div className="pt-4">
                  <p className="text-gray-700 mb-4 italic">
                    {t('testimonials.quote3')}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-syria-dark">Amina K.</h4>
                      <p className="text-xs text-gray-500">{t('testimonials.mother')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-syria-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t('joinMission.title')}</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              {t('joinMission.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-syria-teal hover:bg-gray-100"
                size="lg"
                asChild
              >
                <Link to="/register-organisation">{t('register.submit')}</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                size="lg"
                asChild
              >
                <Link to="/volunteer">{t('joinMission.volunteer')}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
