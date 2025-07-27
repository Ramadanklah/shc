
// Map hospital ID to translation key
export const getHospitalNameKey = (hospitalId: string): string => {
  const idToKeyMap: Record<string, string> = {
<<<<<<< HEAD
    "001": "al-byroni",
    "002": "al-tal"
=======
    "001": "al-assad",
    "002": "al-mowassat",
    "003": "tishreen",
    "004": "al-biruni",
    "005": "al-razi",
    "006": "al-kindi",
    "007": "dar-al-shifa",
    "008": "al-qassim",
    "009": "al-nour",
    "010": "basil-al-assad",
    "011": "jableh",
    "012": "raqqa-city",
    "013": "al-tabqa",
    "014": "qamishli-city",
    "015": "al-hikma",
    "016": "idlib-national",
    "017": "al-furqan",
    "018": "daraa-national",
    "019": "al-mazzeh",
    "020": "deir-ez-zor",
    "021": "hama-national",
    "022": "mhardeh",
    "023": "kafr-zita-cave",
    "024": "latamneh",
    "025": "al-annazah-hama",
    "026": "tartus-national",
    "027": "alkindi-tartus",
    "028": "al-annazah-tartus",
    "029": "as-suwaida-national",
    "030": "salchad"
>>>>>>> parent of 9847152 (fixing minor text stuff - Scrum-2)
  };
  
  return idToKeyMap[hospitalId] || "unknown-hospital";
};
