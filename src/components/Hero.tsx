import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DonationModal from './DonationModal';
import StatsSlider from './StatsSlider';

interface HeroProps {
  openDonateModal?: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  const { t } = useTranslation();
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  
  return (
    <div className="bg-syria-light clip-path-slant relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80')" 
        }}
      ></div>
      <div className="mx-auto px-4 py-12 md:py-20 relative flex flex-col items-center">
     
        <div className="w-full z-0 mb-8">
          <StatsSlider />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl justify-center z-10">
          <Button 
            className="bg-red-500 hover:bg-red-600 text-white text-lg py-6 px-8 animate-pulse"
            onClick={() => setIsDonateModalOpen(false)}
          >
            {t('donate.contribute')}
          </Button>
          <Button 
            variant="outline" 
            className="border-syria-teal text-syria-teal hover:bg-syria-teal/10 text-lg py-6 px-8"
            asChild
          >
            <Link to="/cases">{t('hero.viewCases')}</Link>
          </Button>
        </div>
        
      </div>
      <DonationModal open={isDonateModalOpen} onOpenChange={setIsDonateModalOpen} />
    </div>
  );
};

export default Hero;
