
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-syria-light clip-path-slant relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80')" 
        }}
      ></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="md:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-syria-dark mb-6">
            Help Save Lives in <span className="text-syria-teal">Syria</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Your donation directly funds critical medical care for those who need it most.
            Join us in providing hope and healing to Syrian families affected by crisis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-syria-teal hover:bg-syria-teal-dark text-white text-lg py-6 px-8" 
              asChild
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-syria-teal text-syria-teal hover:bg-syria-teal/10 text-lg py-6 px-8"
              asChild
            >
              <Link to="/cases">View Medical Cases</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-start gap-4">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold border-2 border-white">S</div>
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold border-2 border-white">A</div>
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold border-2 border-white">M</div>
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold border-2 border-white">J</div>
            </div>
            <p className="text-sm text-gray-600">Join <span className="font-bold">547 donors</span> who've already made a difference</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
