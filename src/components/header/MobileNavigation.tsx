
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface MobileNavigationProps {
  user: any;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleSignOut: () => Promise<void>;
}

const MobileNavigation = ({ user, isMenuOpen, setIsMenuOpen, handleSignOut }: MobileNavigationProps) => {
  const { t } = useTranslation();

  if (!isMenuOpen) return null;

  return (
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
  );
};

export default MobileNavigation;
