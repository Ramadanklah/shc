
import { Hospital } from "../types";

export const damascusHospitals: Hospital[] = [
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
  }
];
