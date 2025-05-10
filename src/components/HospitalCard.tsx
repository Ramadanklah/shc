
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Hospital, MapPin, TestTube } from "lucide-react";
import type { Hospital as HospitalType } from "@/data/hospitals";
import { getHospitalNameKey } from "@/utils/hospitalTranslations";

interface HospitalCardProps {
  hospital: HospitalType;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  const { t } = useTranslation();

  return (
    <Card key={hospital.id} className="p-6 shadow flex flex-col">
      <div className="flex items-center mb-2">
        <Hospital className="w-5 h-5 text-syria-teal mr-2" />
        <div className="text-syria-teal font-medium">
          {t(`hospitals.names.${getHospitalNameKey(hospital.id)}`)}
        </div>
      </div>
      <div className="mb-1 text-sm text-gray-500 flex items-center">
        <MapPin className="w-4 h-4 mr-1" />
        {hospital.location}
      </div>
      <p className="mb-4 text-gray-600 text-sm">{hospital.description}</p>
      
      {/* Equipment Needs */}
      <div className="mb-4 mt-auto">
        <h3 className="text-sm font-medium mb-2 flex items-center">
          <TestTube className="w-4 h-4 mr-1 text-syria-teal" />
          {t('hospitals.equipmentNeeded')}:
        </h3>
        <ul className="text-sm text-gray-600">
          {hospital.equipment_needs.slice(0, 2).map(need => (
            <li key={need.id} className="flex items-center justify-between mb-1">
              <span>{need.name}</span>
              {need.urgency === 'high' && (
                <span className="bg-syria-red text-white px-2 py-0.5 rounded-full text-xs">
                  {t('cases.urgent')}
                </span>
              )}
            </li>
          ))}
          {hospital.equipment_needs.length > 2 && (
            <li className="text-syria-teal text-xs mt-1">+ {hospital.equipment_needs.length - 2} {t('hospitals.moreItems')}</li>
          )}
        </ul>
      </div>
      
      <Button asChild className="mt-auto bg-syria-teal hover:bg-syria-teal-dark">
        <Link to={`/cases/${hospital.id}`}>{t('cases.details')}</Link>
      </Button>
    </Card>
  );
};

export default HospitalCard;
