
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
        
        
        <AboutSection />
        
        <section className="py-16 bg-syria-teal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t('joinMission.title')}</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              {t('joinMission.text')}
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
