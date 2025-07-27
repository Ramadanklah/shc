
// Map hospital ID to translation key
export const getHospitalNameKey = (hospitalId: string): string => {
  const idToKeyMap: Record<string, string> = {
    "001": "al-byroni",
    "002": "al-tal"
  };
  
  return idToKeyMap[hospitalId] || "unknown-hospital";
};
