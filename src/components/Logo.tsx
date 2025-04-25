
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { i18n } = useTranslation();
  
  // Use the same logo for now, but structure allows future language-specific logos
  const logoSrc = `/lovable-uploads/338db15b-c9ba-4e53-a069-85d1fcf8e4df.png`;

  return (
    <Link to="/" className="flex flex-col items-center gap-2 group">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src={logoSrc} 
            alt={`Syria Healthcare Logo (${i18n.language})`} 
            className="h-40 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;

