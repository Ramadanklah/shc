
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Hospital, 
  MapPin, 
  Microscope, 
  Syringe,
  TestTube 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// List of Syrian hospitals
const HOSPITALS = [
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
      { id: "e008", name: "Chirurgische Instrumente", urgency: "medium", quantity: 10, description: "Sets für komplexe Operationen." },
      { id: "e009", name: "Sterilisationsgeräte", urgency: "high", quantity: 2, description: "Für die sichere Wiederverwendung chirurgischer Instrumente." }
    ]
  },
  {
    id: "005",
    name: "Al-Razi Krankenhaus",
    location: "Damaskus",
    beds: 150,
    description: "Ein weiteres Krankenhaus in Damaskus, das allgemeine medizinische Versorgung bietet.",
    equipment_needs: [
      { id: "e010", name: "EKG-Geräte", urgency: "low", quantity: 4, description: "Für die kardiologische Abteilung." },
      { id: "e011", name: "Patientenmonitore", urgency: "medium", quantity: 8, description: "Für die Überwachung von Patienten auf allen Stationen." }
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
      { id: "e016", name: "OP-Tische", urgency: "medium", quantity: 2, description: "Moderne Operationstische mit hydraulischen Systemen." },
      { id: "e017", name: "Labormikroskope", urgency: "low", quantity: 4, description: "Für präzise diagnostische Tests." }
    ]
  },
  {
    id: "009",
    name: "Al-Nour Krankenhaus",
    location: "Homs",
    beds: 150,
    description: "Ein wichtiges Krankenhaus in Homs, das Gesundheitsdienste für die Region bereitstellt.",
    equipment_needs: [
      { id: "e018", name: "Blutgasanalysator", urgency: "high", quantity: 1, description: "Für die Intensivstation zur Überwachung kritischer Patienten." },
      { id: "e019", name: "Infusionspumpen", urgency: "medium", quantity: 10, description: "Für präzise Medikamentendosierung." }
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
      { id: "e020", name: "Endoskopiegeräte", urgency: "medium", quantity: 2, description: "Für minimalinvasive diagnostische Verfahren." },
      { id: "e021", name: "Mammographie-Einheit", urgency: "high", quantity: 1, description: "Für Brustkrebsfrüherkennung, derzeit nicht verfügbar." }
    ]
  },
  {
    id: "011",
    name: "Jableh Krankenhaus",
    location: "Latakia",
    beds: 150,
    description: "Ein Krankenhaus, das grundlegende medizinische Versorgung und chirurgische Behandlungen bietet.",
    equipment_needs: [
      { id: "e022", name: "Blutdruckmessgeräte", urgency: "low", quantity: 15, description: "Für allgemeine Patientenuntersuchungen." },
      { id: "e023", name: "Sauerstoffkonzentratoren", urgency: "high", quantity: 8, description: "Für die Versorgung von Patienten mit Atembeschwerden." }
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
      { id: "e024", name: "Tragbare Ultraschallgeräte", urgency: "medium", quantity: 2, description: "Für Hausbesuche und entlegene Gebiete." },
      { id: "e025", name: "Zentrifugen", urgency: "low", quantity: 3, description: "Für das medizinische Labor." }
    ]
  },
  {
    id: "013",
    name: "Al-Tabqa Krankenhaus",
    location: "Raqqa",
    beds: 100,
    description: "Ein Krankenhaus in der Nähe von Raqqa, das grundlegende medizinische Dienstleistungen anbietet.",
    equipment_needs: [
      { id: "e026", name: "EEG-Gerät", urgency: "medium", quantity: 1, description: "Für neurologische Untersuchungen." },
      { id: "e027", name: "Rollstühle", urgency: "low", quantity: 10, description: "Für Patienten mit eingeschränkter Mobilität." }
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
      { id: "e028", name: "Entbindungsbetten", urgency: "high", quantity: 4, description: "Für die Geburtshilfeabteilung." },
      { id: "e029", name: "Phototherapiegeräte", urgency: "medium", quantity: 2, description: "Für die Behandlung von Neugeborenen mit Gelbsucht." }
    ]
  },
  {
    id: "015",
    name: "Al-Hikma Krankenhaus",
    location: "Qamishli",
    beds: 100,
    description: "Ein privat betriebenes Krankenhaus, das eine Vielzahl medizinischer Behandlungen anbietet.",
    equipment_needs: [
      { id: "e030", name: "Audiometer", urgency: "low", quantity: 1, description: "Für die HNO-Abteilung." },
      { id: "e031", name: "Ophthalmoskope", urgency: "medium", quantity: 2, description: "Für Augenuntersuchungen." }
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
      { id: "e032", name: "Beatmungsgeräte", urgency: "high", quantity: 6, description: "Dringend benötigt für Intensivpatienten." },
      { id: "e033", name: "Bluttransfusionsgeräte", urgency: "medium", quantity: 3, description: "Für die Notaufnahme und Operationsräume." }
    ]
  },
  {
    id: "017",
    name: "Al-Furqan Krankenhaus",
    location: "Idlib",
    beds: 100,
    description: "Ein Krankenhaus, das chirurgische und allgemeine medizinische Dienste anbietet.",
    equipment_needs: [
      { id: "e034", name: "Narkosegeräte", urgency: "high", quantity: 2, description: "Für chirurgische Eingriffe." },
      { id: "e035", name: "EKG-Geräte", urgency: "medium", quantity: 3, description: "Für die kardiologische Überwachung." }
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
      { id: "e036", name: "Röntgengeräte", urgency: "high", quantity: 1, description: "Digitales System für bessere Diagnosequalität." },
      { id: "e037", name: "Beatmungsgeräte", urgency: "medium", quantity: 4, description: "Für die Intensivstation." }
    ]
  },
  {
    id: "019",
    name: "Al-Mazzeh Krankenhaus",
    location: "Daraa",
    beds: 100,
    description: "Ein kleineres Krankenhaus, das vor allem grundlegende medizinische Dienstleistungen bietet.",
    equipment_needs: [
      { id: "e038", name: "Ultraschallgeräte", urgency: "medium", quantity: 1, description: "Für grundlegende Diagnosen." },
      { id: "e039", name: "Mikroskope", urgency: "low", quantity: 2, description: "Für das Labor und Blutuntersuchungen." }
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
