
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Hospital, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';

// List of Syrian hospitals
const HOSPITALS = [
  // Damascus and surroundings
  {
    id: "001",
    name: "Al-Assad Krankenhaus",
    location: "Damaskus",
    beds: 800,
    description: "Ein großes, staatliches Krankenhaus, das eine breite Palette an Fachrichtungen abdeckt."
  },
  {
    id: "002",
    name: "Al-Mowassat Krankenhaus",
    location: "Damaskus",
    beds: 500,
    description: "Eines der bekanntesten Krankenhäuser in Damaskus, das sowohl Notfallversorgung als auch spezialisierte Behandlungen bietet."
  },
  {
    id: "003",
    name: "Tishreen Krankenhaus",
    location: "Damaskus",
    beds: 400,
    description: "Ein großes staatliches Krankenhaus, das in der Hauptstadt eine wichtige Rolle spielt."
  },
  {
    id: "004",
    name: "Al-Biruni Krankenhaus",
    location: "Damaskus",
    beds: 200,
    description: "Ein Krankenhaus, das auf spezialisierte Chirurgie und Notfallversorgung ausgerichtet ist."
  },
  {
    id: "005",
    name: "Al-Razi Krankenhaus",
    location: "Damaskus",
    beds: 150,
    description: "Ein weiteres Krankenhaus in Damaskus, das allgemeine medizinische Versorgung bietet."
  },
  
  // Aleppo
  {
    id: "006",
    name: "Al-Kindi Krankenhaus",
    location: "Aleppo",
    beds: 350,
    description: "Ein bedeutendes Krankenhaus, das sowohl die Bevölkerung in Aleppo als auch die umliegenden Regionen versorgt."
  },
  {
    id: "007",
    name: "Dar al-Shifa Krankenhaus",
    location: "Aleppo",
    beds: 400,
    description: "Ein Krankenhaus in Aleppo, das eine breite Palette an medizinischen Dienstleistungen anbietet."
  },
  
  // Homs
  {
    id: "008",
    name: "Al-Qassim Krankenhaus",
    location: "Homs",
    beds: 200,
    description: "Ein zentrales Krankenhaus in der Stadt Homs, das chirurgische Behandlungen und Notfalldienste anbietet."
  },
  {
    id: "009",
    name: "Al-Nour Krankenhaus",
    location: "Homs",
    beds: 150,
    description: "Ein wichtiges Krankenhaus in Homs, das Gesundheitsdienste für die Region bereitstellt."
  },
  
  // Latakia
  {
    id: "010",
    name: "Basil al-Assad Krankenhaus",
    location: "Latakia",
    beds: 500,
    description: "Das größte Krankenhaus in Latakia, das sowohl Notfallversorgung als auch spezialisierte Behandlungen anbietet."
  },
  {
    id: "011",
    name: "Jableh Krankenhaus",
    location: "Latakia",
    beds: 150,
    description: "Ein Krankenhaus, das grundlegende medizinische Versorgung und chirurgische Behandlungen bietet."
  },
  
  // Raqqa
  {
    id: "012",
    name: "Raqqa Stadtkrankenhaus",
    location: "Raqqa",
    beds: 150,
    description: "Ein Krankenhaus, das die zentrale medizinische Versorgung für Raqqa und Umgebung sicherstellt."
  },
  {
    id: "013",
    name: "Al-Tabqa Krankenhaus",
    location: "Raqqa",
    beds: 100,
    description: "Ein Krankenhaus in der Nähe von Raqqa, das grundlegende medizinische Dienstleistungen anbietet."
  },
  
  // Qamishli
  {
    id: "014",
    name: "Qamishli Stadtkrankenhaus",
    location: "Qamishli",
    beds: 300,
    description: "Das wichtigste staatliche Krankenhaus in Qamishli."
  },
  {
    id: "015",
    name: "Al-Hikma Krankenhaus",
    location: "Qamishli",
    beds: 100,
    description: "Ein privat betriebenes Krankenhaus, das eine Vielzahl medizinischer Behandlungen anbietet."
  },
  
  // Idlib
  {
    id: "016",
    name: "Idlib National Hospital",
    location: "Idlib",
    beds: 200,
    description: "Ein Krankenhaus, das die Gesundheitsversorgung in Idlib abdeckt."
  },
  {
    id: "017",
    name: "Al-Furqan Krankenhaus",
    location: "Idlib",
    beds: 100,
    description: "Ein Krankenhaus, das chirurgische und allgemeine medizinische Dienste anbietet."
  },
  
  // Daraa
  {
    id: "018",
    name: "Daraa National Hospital",
    location: "Daraa",
    beds: 150,
    description: "Ein zentrales Krankenhaus für Daraa und die umliegenden Gebiete."
  },
  {
    id: "019",
    name: "Al-Mazzeh Krankenhaus",
    location: "Daraa",
    beds: 100,
    description: "Ein kleineres Krankenhaus, das vor allem grundlegende medizinische Dienstleistungen bietet."
  },
  
  // Deir ez-Zor
  {
    id: "020",
    name: "Deir ez-Zor Krankenhaus",
    location: "Deir ez-Zor",
    beds: 150,
    description: "Ein Krankenhaus, das die Gesundheitsversorgung für die Region Deir ez-Zor übernimmt."
  }
];

const CaseDetailPage: React.FC = () => {
  const { id } = useParams();
  const hospital = HOSPITALS.find((h) => h.id === id);
  const { t } = useTranslation();

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 shadow flex flex-col mb-8">
            <div className="flex items-center mb-4">
              <Hospital className="w-6 h-6 text-syria-teal mr-2" />
              <h1 className="text-2xl font-bold">{hospital.name}</h1>
            </div>
            
            <div className="flex items-center mb-4">
              <MapPin className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-600">{hospital.location}</span>
            </div>
            
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <div className="font-medium">Bettenzahl: ~{hospital.beds}</div>
            </div>
            
            <p className="mb-6 text-gray-600">{hospital.description}</p>
            
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
