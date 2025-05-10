
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HospitalCard from "@/components/HospitalCard";
import HospitalFilter from "@/components/HospitalFilter";
import { HOSPITALS } from "@/data/hospitals";

const CasesPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Get unique locations for filtering
  const locations = Array.from(new Set(HOSPITALS.map(h => h.location)));
  
  // Filter hospitals based on selected location
  const filteredHospitals = selectedLocation 
    ? HOSPITALS.filter(h => h.location === selectedLocation)
    : HOSPITALS;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-syria-dark mb-8">{t('hospitals.title')}</h1>
          
          <HospitalFilter
            locations={locations}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHospitals.map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CasesPage;
