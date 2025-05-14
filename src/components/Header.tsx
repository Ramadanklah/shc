
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import DonationModal from './DonationModal';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <Link to="/volunteer" className="text-gray-700 hover:text-syria-teal font-medium transition-colors">
            {t('nav.volunteer')}
          </Link>
          {!user ? (
            <Link to="/register-organisation" className="text-gray-700 hover:text-syria-teal font-semibold transition-colors">
              {t('nav.registerOrg')}
            </Link>
          ) : (
            <Link to="/organisations/contributions" className="text-gray-700 hover:text-syria-teal font-semibold transition-colors">
              {t('nav.orgContributions')}
            </Link>
          )}
          <LanguageSwitcher />
          {!user ? (
            <Link to="/auth">
              <Button variant="outline" className="border-syria-teal text-syria-teal hover:bg-syria-teal hover:text-white">
                {t('nav.signin')}
              </Button>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-syria-teal">
                  <User className="w-4 h-4 mr-2" />
                  {user.email?.split('@')[0]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/organisations/contributions" className="flex items-center w-full">
                    {t('nav.orgContributions')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-red-600 cursor-pointer">
                  <LogOut className="w-4 h-4 mr-2" />
                  {t('nav.signout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
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
            {!user ? (
              <Link 
                to="/register-organisation"
                className="text-gray-700 hover:text-syria-teal font-semibold py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.registerOrg')}
              </Link>
            ) : (
              <Link 
                to="/organisations/contributions"
                className="text-gray-700 hover:text-syria-teal font-semibold py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.orgContributions')}
              </Link>
            )}
            {!user ? (
              <Link 
                to="/auth"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-syria-teal hover:bg-syria-teal-dark">
                  {t('nav.signin')}
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={async () => {
                  await handleSignOut();
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="w-full text-red-600 border-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                {t('nav.signout')}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Donation Modal */}
      <DonationModal open={isDonateModalOpen} onOpenChange={setIsDonateModalOpen} />
    </header>
  );
};

export default Header;
