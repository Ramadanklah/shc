
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col items-center gap-2 group">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src="/lovable-uploads/338db15b-c9ba-4e53-a069-85d1fcf8e4df.png" 
            alt="Syria Healthcare Logo" 
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;

