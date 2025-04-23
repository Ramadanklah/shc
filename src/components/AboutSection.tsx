
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-syria-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-syria-dark">{t('mission.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('mission.text1')}
            </p>
            <p className="text-gray-700 mb-4">
              {t('mission.text2')}
            </p>
            <p className="text-gray-700 mb-6">
              {t('mission.text3')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-syria-teal hover:bg-syria-teal-dark text-white"
                asChild
              >
                <Link to="/about">{t('mission.learnMore')}</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-syria-teal text-syria-teal hover:bg-syria-teal/10"
                asChild
              >
                <Link to="/volunteer">{t('joinMission.volunteer')}</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
                alt="Medical volunteers helping patients" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-syria-teal">100%</span>
                    <span className="text-sm text-gray-600">{t('mission.donationImpact')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-syria-teal text-4xl font-bold mb-2">2,471</div>
            <div className="text-gray-600">{t('mission.stats.cases')}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-syria-teal text-4xl font-bold mb-2">$1.3M</div>
            <div className="text-gray-600">{t('mission.stats.donations')}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-syria-teal text-4xl font-bold mb-2">17</div>
            <div className="text-gray-600">{t('mission.stats.hospitals')}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-syria-teal text-4xl font-bold mb-2">97</div>
            <div className="text-gray-600">{t('mission.stats.doctors')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
