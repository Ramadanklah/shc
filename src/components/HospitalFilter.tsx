
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "react-i18next";

interface HospitalFilterProps {
  locations: string[];
  selectedLocation: string | null;
  onLocationChange: (location: string | null) => void;
}

const HospitalFilter: React.FC<HospitalFilterProps> = ({
  locations,
  selectedLocation,
  onLocationChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <span className="text-gray-700 font-medium">{t('hospitals.filterByLocation')}:</span>
        <Select 
          value={selectedLocation || 'all'} 
          onValueChange={(value) => onLocationChange(value === 'all' ? null : value)}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder={t('hospitals.allLocations')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('hospitals.allLocations')}</SelectItem>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default HospitalFilter;
