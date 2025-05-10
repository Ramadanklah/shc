
import { Hospital } from "../types";

export const hamaHospitals: Hospital[] = [
  {
    id: "021",
    name: "Hama National Hospital",
    location: "Hama",
    beds: 300,
    description: "Das zentrale staatliche Krankenhaus der Stadt Hama, das umfassende medizinische Dienstleistungen anbietet.",
    equipment_needs: [
      { id: "e043", name: "Röntgengerät", urgency: "high", quantity: 2, description: "Ersatz für veraltete Geräte, die nicht mehr zuverlässig funktionieren." },
      { id: "e044", name: "Medizinische Monitore", urgency: "medium", quantity: 5, description: "Für die Überwachung von Patienten auf der Intensivstation." }
    ]
  },
  {
    id: "022",
    name: "Mhardeh Hospital",
    location: "Hama",
    beds: 120,
    description: "Ein regionales Krankenhaus, das der Gemeinschaft Mhardeh und Umgebung dient.",
    equipment_needs: [
      { id: "e045", name: "Beatmungsgeräte", urgency: "high", quantity: 3, description: "Dringend benötigt für die Intensivpflege und Notfallversorgung." }
    ]
  },
  {
    id: "023",
    name: "Kafr Zita Cave Hospital",
    location: "Hama",
    beds: 50,
    description: "Ein unterirdisches Feldkrankenhaus, das in Krisengebieten grundlegende medizinische Versorgung anbietet.",
    equipment_needs: [
      { id: "e046", name: "Tragbare Stromgeneratoren", urgency: "high", quantity: 2, description: "Für eine zuverlässige Stromversorgung in Notfallsituationen." },
      { id: "e047", name: "Chirurgische Instrumente", urgency: "medium", quantity: 3, description: "Sets für Notfalloperationen." }
    ]
  },
  {
    id: "024",
    name: "Latamneh Hospital",
    location: "Hama",
    beds: 80,
    description: "Ein Gemeindekrankenhaus, das primäre und sekundäre Gesundheitsversorgung bietet.",
    equipment_needs: [
      { id: "e048", name: "Ultraschallgeräte", urgency: "medium", quantity: 1, description: "Für diagnostische Zwecke." }
    ]
  },
  {
    id: "025",
    name: "Al-Annazah Health Centre",
    location: "Hama",
    beds: 30,
    description: "Ein kleines Gesundheitszentrum, das grundlegende medizinische Dienste für die lokale Gemeinschaft anbietet.",
    equipment_needs: [
      { id: "e049", name: "Laborausstattung", urgency: "low", quantity: 1, description: "Für grundlegende diagnostische Tests." }
    ]
  }
];
