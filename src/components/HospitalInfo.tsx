
import React from "react";
import { Hospital as HospitalType } from "@/data/hospitals";
import { Hospital, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

interface HospitalInfoProps {
  hospital: HospitalType;
}

const HospitalInfo: React.FC<HospitalInfoProps> = ({ hospital }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex items-center mb-4">
        <Hospital className="w-6 h-6 text-syria-teal mr-2" />
        <h1 className="text-2xl font-bold">{hospital.name}</h1>
      </div>
      
      <div className="flex items-center mb-6">
        <MapPin className="w-4 h-4 text-gray-500 mr-2" />
        <span className="text-gray-600">{hospital.location}</span>
      </div>

      <div className="mb-4 p-3 bg-gray-50 rounded-md">
        <div className="font-medium">Bettenzahl: ~{hospital.beds}</div>
      </div>
      
      <p className="mb-6 text-gray-600">{hospital.description}</p>
    </div>
  );
};

export default HospitalInfo;
