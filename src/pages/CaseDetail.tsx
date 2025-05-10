
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HOSPITALS } from "@/data/hospitals";
import HospitalInfo from "@/components/HospitalInfo";
import EquipmentDetails from "@/components/EquipmentDetails";
import ContactSection from "@/components/ContactSection";

const CaseDetailPage: React.FC = () => {
  const { id } = useParams();
  const hospital = HOSPITALS.find((h) => h.id === id);
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("info");

  if (!hospital) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-white py-16 flex flex-col items-center justify-center">
          <div className="bg-gray-100 rounded p-8 shadow text-center">
            <p className="text-xl font-bold mb-4">{t('caseDetail.notFound')}</p>
            <Link to="/cases">
              <Button variant="outline">{t('caseDetail.back')}</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 shadow flex flex-col mb-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 bg-gray-100 p-1">
                <TabsTrigger value="info" className="data-[state=active]:bg-white">
                  {t('hospitals.generalInfo')}
                </TabsTrigger>
                <TabsTrigger value="equipment" className="data-[state=active]:bg-white">
                  {t('hospitals.equipmentNeeds')}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="mt-0">
                <HospitalInfo hospital={hospital} />
              </TabsContent>
              
              <TabsContent value="equipment" className="mt-0">
                <EquipmentDetails equipmentNeeds={hospital.equipment_needs} />
              </TabsContent>
            </Tabs>
            
            <ContactSection hospitalId={hospital.id} hospitalName={hospital.name} />
          </Card>
          <div className="text-center">
            <Link to="/cases">
              <Button variant="outline" className="mt-2">{t('caseDetail.back')}</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseDetailPage;
