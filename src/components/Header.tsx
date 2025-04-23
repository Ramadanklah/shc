
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DonationModal from './DonationModal';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDonateModal = () => {
    setIsDonateModalOpen(true);
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close mobile menu when opening donate modal
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-syria-teal">
            SyriaHealthcare<span className="text-syria-red">.com</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-syria-teal font-medium transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/cases" className="text-gray-700 hover:text-syria-teal font-medium transition-colors">
            {t('nav.medicalCases')}
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-syria-teal font-medium transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/volunteer" className="text-gray-700 hover:text-syria-teal font-medium transition-colors">
            {t('nav.volunteer')}
          </Link>
          <Link to="/register-organisation" className="text-gray-700 hover:text-syria-teal font-semibold transition-colors">
            {t('nav.registerOrg')}
          </Link>
          <Link to="/organisations/contributions" className="text-gray-700 hover:text-syria-teal font-semibold transition-colors">
            {t('nav.orgContributions')}
          </Link>
          <LanguageSwitcher />
          <Button 
            className="bg-syria-teal hover:bg-syria-teal-dark text-white ml-2"
            onClick={openDonateModal}
          >
            {t('nav.donate')}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-syria-teal font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/cases" 
              className="text-gray-700 hover:text-syria-teal font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.medicalCases')}
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-syria-teal font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/volunteer" 
              className="text-gray-700 hover:text-syria-teal font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.volunteer')}
            </Link>
            <Link 
              to="/register-organisation"
              className="text-gray-700 hover:text-syria-teal font-semibold py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.registerOrg')}
            </Link>
            <Link 
              to="/organisations/contributions"
              className="text-gray-700 hover:text-syria-teal font-semibold py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.orgContributions')}
            </Link>
            <Button 
              className="bg-syria-teal hover:bg-syria-teal-dark text-white mt-2 w-full"
              onClick={openDonateModal}
            >
              {t('nav.donate')}
            </Button>
          </div>
        </div>
      )}

      {/* Donation Modal */}
      <DonationModal open={isDonateModalOpen} onOpenChange={setIsDonateModalOpen} />
    </header>
  );
};

export default Header;
