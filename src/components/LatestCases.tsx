
import React from 'react';
import { Button } from "@/components/ui/button";
import CaseCard from "./CaseCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LatestCases = () => {
  const { t } = useTranslation();
  
  // Sample data for the latest equipment needs
  const LATEST_EQUIPMENT = [
    {
      id: "case-001",
      title: t('medicalCases.case1.title'),
      description: t('medicalCases.case1.description'),
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
      urgency: 'high' as const,
    },
    {
      id: "case-002",
      title: t('medicalCases.case2.title'),
      description: t('medicalCases.case2.description'),
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b19b1?auto=format&fit=crop&q=80",
      urgency: 'medium' as const,
    },
    {
      id: "case-003",
      title: t('medicalCases.case3.title'),
      description: t('medicalCases.case3.description'),
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80",
      urgency: 'low' as const,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-syria-dark">{t('cases.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_EQUIPMENT.map(caseItem => (
            <CaseCard 
              key={caseItem.id}
              id={caseItem.id}
              title={caseItem.title}
              description={caseItem.description}
              image={caseItem.image}
              urgency={caseItem.urgency}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-syria-teal text-syria-teal hover:bg-syria-teal/10"
            asChild
          >
            <Link to="/cases">{t('cases.viewAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestCases;
