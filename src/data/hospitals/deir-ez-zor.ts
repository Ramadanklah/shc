
import { Hospital } from "../types";

export const deirEzZorHospitals: Hospital[] = [
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
