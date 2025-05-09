
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';

const EQUIPMENT_NEEDS = [
  {
    id: "001",
    patient: "Deir al-Zor Hospital",
    title: "MRI Machine for Deir al-Zor Hospital",
    description: "The main hospital in Deir al-Zor urgently needs an MRI machine to diagnose hundreds of patients monthly. This 1.5T MRI system will enable accurate diagnosis of neurological conditions, injuries, and other critical health issues. The hospital currently transfers patients over 100km for these scans, delaying critical care and putting patients at risk during transport. Your support will help purchase and install this critical equipment, serving a population of over 500,000 people in eastern Syria.",
    amountRaised: 42300,
    goalAmount: 175000,
  },
  {
    id: "002",
    patient: "Idlib Medical Center",
    title: "Ventilators for Idlib Medical Center",
    description: "Idlib Medical Center requires additional ventilators to treat respiratory conditions and support critical care patients. These advanced life-support devices will be used in the ICU for patients with severe breathing difficulties. Contributions will fund 5 units for their intensive care department, helping save lives during emergencies and for ongoing respiratory support.",
    amountRaised: 28450,
    goalAmount: 50000,
  },
  {
    id: "003",
    patient: "Rural Damascus Clinic",
    title: "Ultrasound Equipment for Rural Clinics",
    description: "Mobile clinics serving rural Damascus need portable ultrasound devices to provide essential diagnostic services to remote communities. These portable units will enable prenatal care, emergency diagnostics, and general healthcare in areas with limited access to medical facilities. Your contribution will provide 3 high-quality portable ultrasound machines serving over 200 patients weekly across multiple villages.",
    amountRaised: 12300,
    goalAmount: 25000,
  },
];

const CaseDetailPage: React.FC = () => {
  const { id } = useParams();
  const equipmentNeed = EQUIPMENT_NEEDS.find((c) => c.id === id);
  const { t } = useTranslation();

  if (!equipmentNeed) {
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

  const percent = Math.min((equipmentNeed.amountRaised / equipmentNeed.goalAmount) * 100, 100);
  
  const whatsappNumber = "+1234567890";
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in helping with "${equipmentNeed.title}" (ID: ${equipmentNeed.id})`
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 shadow flex flex-col mb-8">
            <div className="mb-2 text-syria-teal font-medium text-sm">{equipmentNeed.patient}</div>
            <h1 className="text-2xl font-bold mb-2">{equipmentNeed.title}</h1>
            <p className="mb-4 text-gray-600">{equipmentNeed.description}</p>
            <Progress value={percent} className="mb-3" />
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold">${equipmentNeed.amountRaised.toLocaleString()} {t('cases.amountRaised')}</span>
              <span className="text-gray-500">{t('cases.of')} ${equipmentNeed.goalAmount.toLocaleString()}</span>
            </div>
            
            <div className="flex gap-4 mt-4">
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
