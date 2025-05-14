
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DesktopNavigationProps {
  user: any;
  handleSignOut: () => Promise<void>;
}

const DesktopNavigation = ({ user, handleSignOut }: DesktopNavigationProps) => {
  const { t } = useTranslation();

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
  );
};

export default DesktopNavigation;
