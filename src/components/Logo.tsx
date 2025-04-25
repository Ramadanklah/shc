
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { i18n } = useTranslation();
  
  // Fallback to a placeholder if the main logo fails
  const logoSrc = "https://raw.githubusercontent.com/gptengineer-public/5a4a8a22-d922-4c24-b50e-39bab94d2d7c/main/338db15b-c9ba-4e53-a069-85d1fcf8e4df.png";
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
