
import React from 'react';
import { Heart, Hospital } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Hospital className="h-6 w-6 text-syria-teal" />
        <Heart className="h-4 w-4 text-syria-red absolute -bottom-1 -right-1" />
      </div>
      <span className="text-2xl font-bold text-syria-teal">
        SyriaHealthcare
      </span>
    </div>
  );
};

export default Logo;
