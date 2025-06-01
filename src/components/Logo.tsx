
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { i18n } = useTranslation();
  
  // Fallback to a placeholder if the main logo fails
  const logoSrc = "/public/SHC_LOGO.png";
  const placeholderLogo = "/placeholder.svg";

  return (
    <Link to="/" className="flex flex-col items-center gap-2 group">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src={logoSrc} 
            alt={`Syria Healthcare Logo (${i18n.language})`} 
            className="h-40 w-auto transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              console.error("Error loading main logo, switching to placeholder");
              e.currentTarget.src = placeholderLogo;
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
