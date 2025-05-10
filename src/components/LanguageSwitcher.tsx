
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const languageNames = {
  en: "English",
  de: "Deutsch",
  ar: "العربية"
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Enhanced language switching with visual feedback
  const handleLanguageChange = (lang: string) => {
    if (i18n.language === lang) return;
    
    // Add a brief visual indication of language change
    document.documentElement.classList.add('language-transition');
    
    i18n.changeLanguage(lang);
    
    // Remove the transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('language-transition');
    }, 500);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
          <div className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-syria-teal text-white rounded-full w-4 h-4 flex items-center justify-center">
            {i18n.language.substring(0, 2)}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`${code === 'ar' ? 'text-right' : ''} ${
              i18n.language === code ? 'bg-accent' : ''
            }`}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
