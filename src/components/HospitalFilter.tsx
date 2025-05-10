
import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HospitalFilterProps {
  locations: string[];
  selectedLocation: string | null;
  onLocationChange: (location: string | null) => void;
}

const HospitalFilter: React.FC<HospitalFilterProps> = ({ 
  locations, 
  selectedLocation, 
  onLocationChange 
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-2">{t('hospitals.filterByLocation')}</h2>
      <Tabs 
        defaultValue="all" 
        className="w-full"
        onValueChange={(value) => onLocationChange(value === "all" ? null : value)}
        value={selectedLocation || "all"}
      >
        <TabsList className="bg-gray-100 p-1 flex flex-wrap">
          <TabsTrigger value="all" className="data-[state=active]:bg-white">
            {t('hospitals.allLocations')}
          </TabsTrigger>
          {locations.map(location => (
            <TabsTrigger 
              key={location} 
              value={location}
              className="data-[state=active]:bg-white"
            >
              {location}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default HospitalFilter;
