
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';
import DonationModal from './DonationModal';
import DesktopNavigation from './header/DesktopNavigation';
import MobileNavigation from './header/MobileNavigation';
import MobileMenuButton from './header/MobileMenuButton';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  
  const isRTL = i18n.language === 'ar';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDonateModal = () => {
    setIsDonateModalOpen(true);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavigation user={user} handleSignOut={handleSignOut} />

        {/* Mobile Menu Button */}
        <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation 
        user={user} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        handleSignOut={handleSignOut} 
      />

      {/* Donation Modal */}
      <DonationModal open={isDonateModalOpen} onOpenChange={setIsDonateModalOpen} />
    </header>
  );
};

export default Header;
