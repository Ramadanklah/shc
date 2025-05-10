
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Hospital, 
  MapPin, 
  TestTube 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HOSPITALS } from "@/data/hospitals";

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
  
  const whatsappNumber = "+1234567890";
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in helping ${hospital.name} (ID: ${hospital.id})`
  );

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 shadow flex flex-col mb-8">
            <div className="flex items-center mb-4">
              <Hospital className="w-6 h-6 text-syria-teal mr-2" />
              <h1 className="text-2xl font-bold">{hospital.name}</h1>
            </div>
            
            <div className="flex items-center mb-6">
              <MapPin className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-600">{hospital.location}</span>
            </div>

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
                <div className="mb-4 p-3 bg-gray-50 rounded-md">
                  <div className="font-medium">Bettenzahl: ~{hospital.beds}</div>
                </div>
                
                <p className="mb-6 text-gray-600">{hospital.description}</p>
              </TabsContent>
              
              <TabsContent value="equipment" className="mt-0">
                <h2 className="text-lg font-semibold mb-4 text-syria-dark">{t('hospitals.requiredEquipment')}</h2>
                
                <div className="space-y-4">
                  {hospital.equipment_needs.map((item) => (
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
              </TabsContent>
            </Tabs>
            
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                className="flex-1 border-syria-teal text-syria-teal hover:bg-syria-teal/10"
                asChild
              >
                <Link to="/register-organisation">
                  {t('register.submit')}
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-green-600 border-green-600 hover:bg-green-50"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('caseDetail.contact')}
                </a>
              </Button>
            </div>
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
