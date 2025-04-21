
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-syria-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-syria-dark">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              SyriaHealthcare.com connects medical professionals and donors to provide 
              critical healthcare to families affected by the ongoing crisis in Syria.
            </p>
            <p className="text-gray-700 mb-4">
              We ensure your donation directly funds medical procedures, supplies, and 
              transportation for patients who would otherwise have no access to care.
            </p>
            <p className="text-gray-700 mb-6">
              Through transparency and accountability, we focus on making the biggest 
              impact possible with every dollar contributed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-syria-teal hover:bg-syria-teal-dark text-white"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-syria-teal text-syria-teal hover:bg-syria-teal/10"
                asChild
              >
                <Link to="/volunteer">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80" 
                alt="Medical volunteers helping patients" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-syria-teal">100%</span>
                    <span className="text-sm text-gray-600">of donations go to medical aid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-syria-teal text-4xl font-bold mb-2">2,471</div>
            <div className="text-gray-600">Medical Cases Funded</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-syria-teal text-4xl font-bold mb-2">$1.3M</div>
            <div className="text-gray-600">Total Donations</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-syria-teal text-4xl font-bold mb-2">17</div>
            <div className="text-gray-600">Partner Hospitals</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-syria-teal text-4xl font-bold mb-2">97</div>
            <div className="text-gray-600">Volunteer Doctors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
