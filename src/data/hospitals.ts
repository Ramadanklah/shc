
export interface EquipmentNeed {
  id: string;
  name: string;
  urgency: 'high' | 'medium' | 'low';
  quantity: number;
  description: string;
}

export interface Hospital {
  id: string;
  name: string;
  location: string;
  beds: number;
  description: string;
  equipment_needs: EquipmentNeed[];
}

export const HOSPITALS: Hospital[] = [
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
