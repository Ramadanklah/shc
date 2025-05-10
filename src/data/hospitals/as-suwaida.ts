
import { Hospital } from "../types";

export const asSuwaidaHospitals: Hospital[] = [
  {
    id: "029",
    name: "As-Suwaida National Hospital",
    location: "As-Suwaida",
    beds: 200,
    description: "Das zentrale Krankenhaus der Provinz As-Suwaida, das umfassende medizinische Dienste anbietet.",
    equipment_needs: [
      { id: "e054", name: "CT-Scanner", urgency: "high", quantity: 1, description: "Für präzise Diagnosen und Behandlungsplanung." },
      { id: "e055", name: "Dialysegeräte", urgency: "high", quantity: 3, description: "Für Patienten mit Nierenversagen." }
    ]
  },
  {
    id: "030",
    name: "Salchad Hospital",
    location: "As-Suwaida",
    beds: 100,
    description: "Ein regionales Krankenhaus, das medizinische Versorgung für die Gemeinde Salchad und Umgebung bietet.",
    equipment_needs: [
      { id: "e056", name: "Chirurgische Lampen", urgency: "medium", quantity: 2, description: "Für den Operationssaal." },
      { id: "e057", name: "Sterilisationsgeräte", urgency: "medium", quantity: 1, description: "Für die sichere Aufbereitung medizinischer Instrumente." }
    ]
  }
];
