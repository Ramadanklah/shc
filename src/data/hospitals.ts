
import { Hospital, EquipmentNeed } from "./types";
import { damascusHospitals } from "./hospitals/damascus";
import { aleppoHospitals } from "./hospitals/aleppo";
import { homsHospitals } from "./hospitals/homs";
import { latakiaHospitals } from "./hospitals/latakia";
import { raqqaHospitals } from "./hospitals/raqqa";
import { qamishliHospitals } from "./hospitals/qamishli";
import { idlibHospitals } from "./hospitals/idlib";
import { daraaHospitals } from "./hospitals/daraa";
import { deirEzZorHospitals } from "./hospitals/deir-ez-zor";
import { hamaHospitals } from "./hospitals/hama";
import { tartusHospitals } from "./hospitals/tartus";
import { asSuwaidaHospitals } from "./hospitals/as-suwaida";

// Export types
export type { EquipmentNeed, Hospital };

// Export all hospitals as a flattened array
export const HOSPITALS: Hospital[] = [
  ...damascusHospitals,
  ...aleppoHospitals,
  ...homsHospitals,
  ...latakiaHospitals,
  ...raqqaHospitals,
  ...qamishliHospitals,
  ...idlibHospitals,
  ...daraaHospitals,
  ...deirEzZorHospitals,
  ...hamaHospitals,
  ...tartusHospitals,
  ...asSuwaidaHospitals
];
