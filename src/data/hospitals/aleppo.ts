
import { Hospital } from "../types";

export const aleppoHospitals: Hospital[] = [
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
  }
];
