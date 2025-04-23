
import React from 'react';
import { Heart, Hospital } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative transform transition-transform duration-300 group-hover:scale-110">
        <Hospital 
          className="h-7 w-7 text-syria-teal transition-colors duration-300 group-hover:text-syria-teal-dark" 
          strokeWidth={1.5}
        />
        <Heart 
          className="h-5 w-5 text-syria-red absolute -bottom-1.5 -right-1.5 animate-pulse" 
          fill="currentColor"
          strokeWidth={1.5}
        />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-syria-teal to-syria-teal-dark bg-clip-text text-transparent">
        SyriaHealthcare
      </span>
    </div>
  );
};

export default Logo;
