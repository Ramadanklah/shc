
import { Hospital } from "../types";

export const tartusHospitals: Hospital[] = [
  {
    id: "026",
    name: "Tartus National Hospital",
    location: "Tartus",
    beds: 250,
    description: "Das Hauptkrankenhaus der Stadt Tartus, das ein breites Spektrum an medizinischen Dienstleistungen anbietet.",
    equipment_needs: [
      { id: "e050", name: "MRI-Gerät", urgency: "high", quantity: 1, description: "Dringend benötigt für genaue Diagnosen." },
      { id: "e051", name: "Notfallwagen", urgency: "medium", quantity: 2, description: "Voll ausgestattete Wagen für schnelle Reaktionen bei kritischen Fällen." }
    ]
  },
  {
    id: "027",
    name: "Alkindi Hospital",
    location: "Tartus",
    beds: 150,
    description: "Ein privates Krankenhaus, das spezialisierte medizinische Behandlungen anbietet.",
    equipment_needs: [
      { id: "e052", name: "Endoskopiegeräte", urgency: "medium", quantity: 1, description: "Für minimalinvasive diagnostische Verfahren." }
    ]
  },
  {
    id: "028",
    name: "Al-Annazah Health Centre",
    location: "Tartus",
    beds: 25,
    description: "Ein Gesundheitszentrum, das primäre Gesundheitsversorgung für die lokale Bevölkerung bietet.",
    equipment_needs: [
      { id: "e053", name: "EKG-Geräte", urgency: "low", quantity: 2, description: "Für die kardiale Überwachung und Diagnose." }
    ]
  }
];
