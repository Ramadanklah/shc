
import { Hospital } from "../types";

export const raqqaHospitals: Hospital[] = [
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
  }
];
