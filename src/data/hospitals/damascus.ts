
import { Hospital } from "../types";

export const damascusHospitals: Hospital[] = [
  {
    id: "001",
    name: "Al-Byroni Krankenhaus",
    location: "Damaskus",
    beds: 350,
    description: "Ein spezialisiertes Krankenhaus für die Diagnose und Behandlung von Krebserkrankungen.",
    equipment_needs: [
      { id: "e001", name: "MRT-Gerät", urgency: "high", quantity: 1, description: "Bestehendes MRT-Gerät aus dem Jahr 2004 mit nur 0,23 Tesla ist technisch überholt (weniger als ein Viertel Tesla) und über 20 Jahre alt. Dringender Ersatz durch ein modernes Hochfeld-MRT-System erforderlich." },
      { id: "e002", name: "Linearbeschleuniger", urgency: "high", quantity: 3, description: "Ein Hochenergie-Beschleuniger aus dem Jahr 2004 hat seine Lebensdauer überschritten. Zwei neuere Low-Energy-Geräte (Varian, gespendet, seit 2 Jahren in Betrieb) sind vorhanden. Aufgrund hoher Auslastung (Behandlungsbeginn für Patienten oft erst nach 2–3 Monaten) wird dringend ein zusätzlicher Linearbeschleuniger benötigt."},
      { id: "e003", name: "Kobalt-Therapiegerät", urgency: "high", quantity: 1, description: "Vorhandene Geräte sind stark veraltet. Die Strahlenquellen verlieren mit der Zeit an Intensität, was zu längeren Bestrahlungszeiten führt. Dies erhöht das Risiko für Schäden an gesundem Gewebe und reduziert die Behandlungsqualität. Ein moderner Ersatz ist dringend erforderlich."},
    ]
  },
  {
    id: "002",
    name: "Al-Tal Krankenhaus",
    location: "Damaskus",
    beds: 400,
    description: "Ein Allgemeinkrankenhaus mit allen Fachrichtungen – spezialisiert auf die Behandlung von Verbrennungen.",
    equipment_needs: [
      { id: "e004", name: "Dialysegerät", urgency: "high", quantity: 5, description: "Ein Dialysegerät zur Blutreinigung bei Nierenversagen" }
    ]
  }
];
