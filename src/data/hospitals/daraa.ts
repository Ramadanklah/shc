
import { Hospital } from "../types";

export const daraaHospitals: Hospital[] = [
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
  }
];
