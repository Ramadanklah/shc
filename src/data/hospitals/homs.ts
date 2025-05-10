
import { Hospital } from "../types";

export const homsHospitals: Hospital[] = [
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
  }
];
