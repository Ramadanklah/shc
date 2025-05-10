
import { Hospital } from "../types";

export const latakiaHospitals: Hospital[] = [
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
  }
];
