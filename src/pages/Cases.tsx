
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hospital } from "lucide-react";

const CasesPage: React.FC = () => {
  const { t } = useTranslation();

  const hospitals = [
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-syria-dark mb-8">{t('hospitals.title')}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="p-6 shadow flex flex-col">
                <div className="flex items-center mb-2">
                  <Hospital className="w-5 h-5 text-syria-teal mr-2" />
                  <div className="text-syria-teal font-medium">{hospital.name}</div>
                </div>
                <div className="mb-1 text-sm text-gray-500">{hospital.location}</div>
                <div className="mb-3 text-sm font-medium">Bettenzahl: ~{hospital.beds}</div>
                <p className="mb-4 text-gray-600 text-sm">{hospital.description}</p>
                <Button asChild className="mt-auto bg-syria-teal hover:bg-syria-teal-dark">
                  <Link to={`/cases/${hospital.id}`}>{t('cases.details')}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CasesPage;
