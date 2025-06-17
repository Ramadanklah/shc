import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import LanguageSwitcher from '../LanguageSwitcher';

interface MobileNavigationProps {
  user: any;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleSignOut: () => void;
  openDonateModal: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  user, 
  isMenuOpen, 
  setIsMenuOpen, 
  handleSignOut,
  openDonateModal 
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  if (!isMenuOpen) return null;

  return (
    <nav className="md:hidden bg-white border-t">
      <div className="container mx-auto px-4 py-4 space-y-4">
        <Link 
          to="/cases" 
          className="block text-gray-700 hover:text-syria-teal py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.medicalCases')}
        </Link>
        <Link 
          to="/about" 
          className="block text-gray-700 hover:text-syria-teal py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          {t('nav.about')}
        </Link>
        <div className="pt-4 border-t">
          <Button 
            className="w-full bg-red-500 hover:bg-red-600 text-white"
            onClick={() => {
              openDonateModal();
              setIsMenuOpen(false);
            }}
          >
            {t('nav.donate')}
          </Button>
        </div>
        <div className="pt-4 border-t">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
