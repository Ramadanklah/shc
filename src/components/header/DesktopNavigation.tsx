import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import LanguageSwitcher from '../LanguageSwitcher';

interface DesktopNavigationProps {
  user: any;
  handleSignOut: () => void;
  openDonateModal: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ user, handleSignOut, openDonateModal }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <nav className="hidden md:flex items-center gap-6">
      <div className="ml-6">
        <Link to="/" className="text-gray-700 hover:text-syria-teal font-medium transition-colors">
          {t('nav.home')}
        </Link>
      </div>
      <Link to="/cases" className="text-gray-700 hover:text-syria-teal font-medium transition-colors">
        {t('nav.medicalCases')}
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-syria-teal font-medium transition-colors">
        {t('nav.about')}
      </Link>
      <LanguageSwitcher />
      <Button 
        className="bg-red-500 hover:bg-red-600 text-white"
        onClick={openDonateModal}
      >
        {t('nav.donate')}
      </Button>
    </nav>
  );
};

export default DesktopNavigation;
