
export interface EquipmentNeed {
  id: string;
  name: string;
  urgency: 'high' | 'medium' | 'low';
  quantity: number;
  description: string;
}

export interface Hospital {
  id: string;
  name: string;
  location: string;
  beds: number;
  description: string;
  equipment_needs: EquipmentNeed[];
}
