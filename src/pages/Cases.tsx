import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hospital, MapPin, TestTube } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CasesPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const hospitals = [
    // Damascus and surroundings
    {
      id: "001",
      name: "Al-Assad Krankenhaus",
      location: "Damaskus",
      beds: 800,
      description: "Ein großes, staatliches Krankenhaus, das eine breite Palette an Fachrichtungen abdeckt.",
      equipment_needs: [
        { id: "e001", name: "MRI-Gerät", urgency: "high", quantity: 1, description: "Ersatz für veraltetes 10-jähriges Gerät benötigt." },
        { id: "e002", name: "Beatmungsgeräte", urgency: "medium", quantity: 5, description: "Für die Intensivstation und für COVID-19 Patienten." },
        { id: "e003", name: "OP-Beleuchtung", urgency: "low", quantity: 2, description: "Aktualisierung der bestehenden Beleuchtungssysteme für Operationsräume." }
      ]
    },
    {
      id: "002",
      name: "Al-Mowassat Krankenhaus",
      location: "Damaskus",
      beds: 500,
      description: "Eines der bekanntesten Krankenhäuser in Damaskus, das sowohl Notfallversorgung als auch spezialisierte Behandlungen bietet.",
      equipment_needs: [
        { id: "e004", name: "Ultraschallgeräte", urgency: "medium", quantity: 3, description: "Für die Abteilungen für Gynäkologie und allgemeine Diagnose." },
        { id: "e005", name: "Dialysemaschinen", urgency: "high", quantity: 4, description: "Dringend benötigt für die wachsende Anzahl von Niereninsuffizienz-Patienten." }
      ]
    },
    {
      id: "003",
      name: "Tishreen Krankenhaus",
      location: "Damaskus",
      beds: 400,
      description: "Ein großes staatliches Krankenhaus, das in der Hauptstadt eine wichtige Rolle spielt.",
      equipment_needs: [
        { id: "e006", name: "CT-Scanner", urgency: "high", quantity: 1, description: "Ersatz für nicht funktionsfähiges Gerät, das für Diagnosen unerlässlich ist." },
        { id: "e007", name: "Anästhesiegeräte", urgency: "medium", quantity: 2, description: "Für Operationsräume, um die Patientenversorgung zu verbessern." }
      ]
    },
    {
      id: "004",
      name: "Al-Biruni Krankenhaus",
      location: "Damaskus",
      beds: 200,
      description: "Ein Krankenhaus, das auf spezialisierte Chirurgie und Notfallversorgung ausgerichtet ist.",
      equipment_needs: [
        { id: "e008", name: "Endoskopiegeräte", urgency: "high", quantity: 1, description: "Ersatz für veraltetes Gerät, das für spezifische Chirurgien unerlässlich ist." },
        { id: "e009", name: "Radiologiegeräte", urgency: "medium", quantity: 3, description: "Für die Radiologieabteilung." }
      ]
    },
    {
      id: "005",
      name: "Al-Razi Krankenhaus",
      location: "Damaskus",
      beds: 150,
      description: "Ein weiteres Krankenhaus in Damaskus, das allgemeine medizinische Versorgung bietet.",
      equipment_needs: [
        { id: "e010", name: "Laborgeräte", urgency: "low", quantity: 2, description: "Für die Laborabteilung." }
      ]
    },
    
    // Aleppo
    {
      id: "006",
      name: "Al-Kindi Krankenhaus",
      location: "Aleppo",
      beds: 350,
      description: "Ein bedeutendes Krankenhaus, das sowohl die Bevölkerung in Aleppo als auch die umliegenden Regionen versorgt.",
      equipment_needs: [
        { id: "e012", name: "Röntgengerät", urgency: "high", quantity: 1, description: "Digitales System als Ersatz für veraltetes analoges System." },
        { id: "e013", name: "Notfallwagen", urgency: "high", quantity: 3, description: "Vollständig ausgestattete Wagen für schnelle Reaktion bei kritischen Fällen." }
      ]
    },
    {
      id: "007",
      name: "Dar al-Shifa Krankenhaus",
      location: "Aleppo",
      beds: 400,
      description: "Ein Krankenhaus in Aleppo, das eine breite Palette an medizinischen Dienstleistungen anbietet.",
      equipment_needs: [
        { id: "e014", name: "Inkubatoren", urgency: "high", quantity: 5, description: "Für die neonatologische Intensivstation." },
        { id: "e015", name: "Defibrillator", urgency: "medium", quantity: 3, description: "Für die Notaufnahme und kardiologische Station." }
      ]
    },
    
    // Homs
    {
      id: "008",
      name: "Al-Qassim Krankenhaus",
      location: "Homs",
      beds: 200,
      description: "Ein zentrales Krankenhaus in der Stadt Homs, das chirurgische Behandlungen und Notfalldienste anbietet.",
      equipment_needs: [
        { id: "e016", name: "Spectrometrie", urgency: "medium", quantity: 1, description: "Für die Analyse von Stoffmengen in der Klinik." }
      ]
    },
    {
      id: "009",
      name: "Al-Nour Krankenhaus",
      location: "Homs",
      beds: 150,
      description: "Ein wichtiges Krankenhaus in Homs, das Gesundheitsdienste für die Region bereitstellt.",
      equipment_needs: [
        { id: "e017", name: "Laborgeräte", urgency: "low", quantity: 2, description: "Für die Laborabteilung." }
      ]
    },
    
    // Latakia
    {
      id: "010",
      name: "Basil al-Assad Krankenhaus",
      location: "Latakia",
      beds: 500,
      description: "Das größte Krankenhaus in Latakia, das sowohl Notfallversorgung als auch spezialisierte Behandlungen anbietet.",
      equipment_needs: [
        { id: "e018", name: "Radiologiegeräte", urgency: "high", quantity: 2, description: "Für die Radiologieabteilung." },
        { id: "e019", name: "CT-Scanner", urgency: "medium", quantity: 1, description: "Ersatz für nicht funktionsfähiges Gerät, das für Diagnosen unerlässlich ist." }
      ]
    },
    {
      id: "011",
      name: "Jableh Krankenhaus",
      location: "Latakia",
      beds: 150,
      description: "Ein Krankenhaus, das grundlegende medizinische Versorgung und chirurgische Behandlungen bietet.",
      equipment_needs: [
        { id: "e020", name: "Laborgeräte", urgency: "low", quantity: 2, description: "Für die Laborabteilung." }
      ]
    },
    
    // Raqqa
    {
      id: "012",
      name: "Raqqa Stadtkrankenhaus",
      location: "Raqqa",
      beds: 150,
      description: "Ein Krankenhaus, das die zentrale medizinische Versorgung für Raqqa und Umgebung sicherstellt.",
      equipment_needs: [
        { id: "e021", name: "Radiologiegeräte", urgency: "high", quantity: 2, description: "Für die Radiologieabteilung." },
        { id: "e022", name: "CT-Scanner", urgency: "medium", quantity: 1, description: "Ersatz für nicht funktionsfähiges Gerät, das für Diagnosen unerlässlich ist." }
      ]
    },
    {
      id: "013",
      name: "Al-Tabqa Krankenhaus",
      location: "Raqqa",
      beds: 100,
      description: "Ein Krankenhaus in der Nähe von Raqqa, das grundlegende medizinische Dienstleistungen anbietet.",
      equipment_needs: [
        { id: "e023", name: "Laborgeräte", urgency: "low", quantity: 2, description: "Für die Laborabteilung." }
      ]
    },
    
    // Qamishli
    {
      id: "014",
      name: "Qamishli Stadtkrankenhaus",
      location: "Qamishli",
      beds: 300,
      description: "Das wichtigste staatliche Krankenhaus in Qamishli.",
      equipment_needs: [
        { id: "e024", name: "Radiologiegeräte", urgency: "high", quantity: 2, description: "Für die Radiologieabteilung." },
        { id: "e025", name: "CT-Scanner", urgency: "medium", quantity: 1, description: "Ersatz für nicht funktionsfähiges Gerät, das für Diagnosen unerlässlich ist." }
      ]
    },
    {
      id: "015",
      name: "Al-Hikma Krankenhaus",
      location: "Qamishli",
      beds: 100,
      description: "Ein privat betriebenes Krankenhaus, das eine Vielzahl medizinischer Behandlungen anbietet.",
      equipment_needs: [
        { id: "e026", name: "Laborgeräte", urgency: "low", quantity: 2, description: "Für die Laborabteilung." }
      ]
    },
    
    // Idlib
    {
      id: "016",
      name: "Idlib National Hospital",
      location: "Idlib",
      beds: 200,
      description: "Ein Krankenhaus, das die Gesundheitsversorgung in Idlib abdeckt.",
      equipment_needs: [
        { id: "e027", name: "Radiologiegeräte", urgency: "high", quantity: 2, description: "Für die Radiologieabteilung." },
        { id: "e028", name: "CT-Scanner", urgency: "medium", quantity: 1, description: "Ersatz für nicht funktionsfähiges Gerät, das für Diagnosen unerlässlich ist." }
      ]
    },
    {
      id: "017",
      name: "Al-Furqan Krankenhaus",
      location: "Idlib",
      beds: 100,
      description: "Ein Krankenhaus, das chirurgische und allgemeine medizinische Dienste anbietet.",
      equipment_needs: [
        { id: "e029", name: "Laborgeräte", urgency: "low", quantity: 2, description: "Für die Laborabteilung." }
      ]
    },
    
    // Daraa
    {
      id: "018",
      name: "Daraa National Hospital",
      location: "Daraa",
      beds: 150,
      description: "Ein zentrales Krankenhaus für Daraa und die umliegenden Gebiete.",
      equipment_needs: [
        { id: "e030", name: "Radiologiegeräte", urgency: "high", quantity: 2, description: "Für die Radiologieabteilung." },
        { id: "e031", name: "CT-Scanner", urgency: "medium", quantity: 1, description: "Ersatz für nicht funktionsfähiges Gerät, das für Diagnosen unerlässlich ist." }
      ]
    },
    {
      id: "019",
      name: "Al-Mazzeh Krankenhaus",
      location: "Daraa",
      beds: 100,
      description: "Ein kleineres Krankenhaus, das vor allem grundlegende medizinische Dienstleistungen bietet.",
      equipment_needs: [
        { id: "e032", name: "Laborgeräte", urgency: "low", quantity: 2, description: "Für die Laborabteilung." }
      ]
    },
    
    // Deir ez-Zor
    {
      id: "020",
      name: "Deir ez-Zor Krankenhaus",
      location: "Deir ez-Zor",
      beds: 150,
      description: "Ein Krankenhaus, das die Gesundheitsversorgung für die Region Deir ez-Zor übernimmt.",
      equipment_needs: [
        { id: "e040", name: "MRI-Gerät", urgency: "high", quantity: 1, description: "Dringend benötigt für genaue Diagnosen." },
        { id: "e041", name: "Chirurgische Instrumente", urgency: "medium", quantity: 5, description: "Sets für verschiedene Operationen." },
        { id: "e042", name: "Dialysegeräte", urgency: "high", quantity: 3, description: "Für Patienten mit Nierenversagen." }
      ]
    }
  ];

  // Get unique locations for filtering
  const locations = Array.from(new Set(hospitals.map(h => h.location)));
  
  // Filter hospitals based on selected location
  const filteredHospitals = selectedLocation 
    ? hospitals.filter(h => h.location === selectedLocation)
    : hospitals;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-syria-dark mb-8">{t('hospitals.title')}</h1>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-2">{t('hospitals.filterByLocation')}</h2>
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={(value) => setSelectedLocation(value === "all" ? null : value)}
            >
              <TabsList className="bg-gray-100 p-1 flex flex-wrap">
                <TabsTrigger value="all" className="data-[state=active]:bg-white">
                  {t('hospitals.allLocations')}
                </TabsTrigger>
                {locations.map(location => (
                  <TabsTrigger 
                    key={location} 
                    value={location}
                    className="data-[state=active]:bg-white"
                  >
                    {location}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHospitals.map((hospital) => (
              <Card key={hospital.id} className="p-6 shadow flex flex-col">
                <div className="flex items-center mb-2">
                  <Hospital className="w-5 h-5 text-syria-teal mr-2" />
                  <div className="text-syria-teal font-medium">{hospital.name}</div>
                </div>
                <div className="mb-1 text-sm text-gray-500 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hospital.location}
                </div>
                <div className="mb-3 text-sm font-medium">Bettenzahl: ~{hospital.beds}</div>
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CasesPage;
