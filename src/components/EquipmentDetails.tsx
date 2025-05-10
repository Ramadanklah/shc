
import React from "react";
import { TestTube } from "lucide-react";
import { useTranslation } from "react-i18next";
import { EquipmentNeed } from "@/data/hospitals";

interface EquipmentDetailsProps {
  equipmentNeeds: EquipmentNeed[];
}

const EquipmentDetails: React.FC<EquipmentDetailsProps> = ({ equipmentNeeds }) => {
  const { t } = useTranslation();

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return <span className="bg-syria-red text-white px-2 py-0.5 rounded-full text-xs font-bold">Urgent</span>;
      case 'medium':
        return <span className="bg-syria-orange text-white px-2 py-0.5 rounded-full text-xs font-bold">High Need</span>;
      default:
        return <span className="bg-gray-400 text-white px-2 py-0.5 rounded-full text-xs font-bold">Normal</span>;
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-syria-dark">{t('hospitals.requiredEquipment')}</h2>
      
      <div className="space-y-4">
        {equipmentNeeds.map((item) => (
          <div key={item.id} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <TestTube className="w-5 h-5 text-syria-teal" />
                <h3 className="font-medium">{item.name}</h3>
              </div>
              {getUrgencyBadge(item.urgency)}
            </div>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-700">
                {t('hospitals.quantity')}: {item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentDetails;
