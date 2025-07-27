
import { Hospital, EquipmentNeed } from "./types";
import { damascusHospitals } from "./hospitals/damascus";

// Export types
export type { EquipmentNeed, Hospital };

// Export all hospitals as a flattened array
export const HOSPITALS: Hospital[] = [
  ...damascusHospitals
];
