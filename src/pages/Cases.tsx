
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CasesPage: React.FC = () => {
  const { t } = useTranslation();

  const equipmentNeeds = [
    {
      id: "001",
      patient: t('medicalCases.case1.patient'),
      title: t('medicalCases.case1.title'),
      description: t('medicalCases.case1.description'),
      goalAmount: 175000,
    },
    {
      id: "002",
      patient: t('medicalCases.case2.patient'),
      title: t('medicalCases.case2.title'),
      description: t('medicalCases.case2.description'),
      goalAmount: 50000,
    },
    {
      id: "003",
      patient: t('medicalCases.case3.patient'),
      title: t('medicalCases.case3.title'),
      description: t('medicalCases.case3.description'),
      goalAmount: 25000,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-syria-dark mb-8">{t('cases.title')}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentNeeds.map((c) => {
              return (
                <Card key={c.id} className="p-6 shadow flex flex-col">
                  <div className="mb-2 text-syria-teal font-medium text-sm">{c.patient}</div>
                  <h2 className="text-xl font-bold mb-2">{c.title}</h2>
                  <p className="mb-4 text-gray-600">{c.description}</p>
                  <div className="text-sm mb-2">
                    <span className="text-gray-500">{t('cases.estimatedCost')}: ${c.goalAmount.toLocaleString()}</span>
                  </div>
                  <Button asChild className="mt-auto bg-syria-teal hover:bg-syria-teal-dark">
                    <Link to={`/cases/${c.id}`}>{t('cases.details')}</Link>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CasesPage;
