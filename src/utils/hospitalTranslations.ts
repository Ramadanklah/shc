
// Map hospital ID to translation key
export const getHospitalNameKey = (hospitalId: string): string => {
  const idToKeyMap: Record<string, string> = {
    "001": "Al-Byroni Krankenhaus",
    "002": "Al-Tal Krankenhaus"
  };
  
  return idToKeyMap[hospitalId] || "unknown-hospital";
};
