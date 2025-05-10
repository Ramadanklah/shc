
import { Hospital } from "../types";

export const idlibHospitals: Hospital[] = [
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
  }
];
