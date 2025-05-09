
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Hospital, MapPin, TestTube } from "lucide-react";

const LatestCases = () => {
  const { t } = useTranslation();
  
  // Sample data for featured hospitals
  const FEATURED_HOSPITALS = [
    {
      id: "001",
      name: "Al-Assad Krankenhaus",
      location: "Damaskus",
      beds: 800,
      description: "Ein großes, staatliches Krankenhaus, das eine breite Palette an Fachrichtungen abdeckt.",
      equipment_needs: [
        { id: "e001", name: "MRI-Gerät", urgency: "high", quantity: 1 },
        { id: "e002", name: "Beatmungsgeräte", urgency: "medium", quantity: 5 }
      ]
    },
    {
      id: "006",
      name: "Al-Kindi Krankenhaus",
      location: "Aleppo",
      beds: 350,
      description: "Ein bedeutendes Krankenhaus, das sowohl die Bevölkerung in Aleppo als auch die umliegenden Regionen versorgt.",
      equipment_needs: [
        { id: "e012", name: "Röntgengerät", urgency: "high", quantity: 1 },
        { id: "e013", name: "Notfallwagen", urgency: "high", quantity: 3 }
      ]
    },
    {
      id: "020",
      name: "Deir ez-Zor Krankenhaus",
      location: "Deir ez-Zor",
      beds: 150,
      description: "Ein Krankenhaus, das die Gesundheitsversorgung für die Region Deir ez-Zor übernimmt.",
      equipment_needs: [
        { id: "e040", name: "MRI-Gerät", urgency: "high", quantity: 1 },
        { id: "e042", name: "Dialysegeräte", urgency: "high", quantity: 3 }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-syria-dark">{t('hospitals.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('hospitals.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_HOSPITALS.map(hospital => (
            <Card key={hospital.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <Hospital className="w-5 h-5 text-syria-teal mr-2" />
                  <div className="text-syria-teal font-medium">{hospital.name}</div>
                </div>
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hospital.location}
                </div>
                <div className="mb-3 text-sm font-medium">
                  {t('hospitals.bedCount')}: ~{hospital.beds}
                </div>
                <p className="mb-4 text-gray-600 text-sm">{hospital.description}</p>
                
                {/* Equipment Needs */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2 flex items-center">
                    <TestTube className="w-4 h-4 mr-1 text-syria-teal" />
                    {t('hospitals.topNeeds')}:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {hospital.equipment_needs.map((need, index) => (
                      <li key={need.id} className="flex items-center justify-between">
                        <span>{need.name}</span>
                        {need.urgency === 'high' && (
                          <span className="bg-syria-red text-white px-2 py-0.5 rounded-full text-xs">
                            {t('cases.urgent')}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4">
                  <Button 
                    className="w-full bg-syria-teal hover:bg-syria-teal-dark"
                    asChild
                  >
                    <Link to={`/cases/${hospital.id}`}>{t('cases.details')}</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-syria-teal text-syria-teal hover:bg-syria-teal/10"
            asChild
          >
            <Link to="/cases">{t('hospitals.viewAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestCases;
