
import { Hospital } from "../types";

export const qamishliHospitals: Hospital[] = [
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
  }
];
