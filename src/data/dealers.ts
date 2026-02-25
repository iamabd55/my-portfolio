export interface Dealer {
  id: string;
  name: string;
  city: string;
  province: string;
  address: string;
  phone: string;
  type: "Dealer" | "Service Center" | "Dealer & Service";
  lat: number;
  lng: number;
}

export const dealers: Dealer[] = [
  { id: "d1", name: "Kama Lahore — Head Office", city: "Lahore", province: "Punjab", address: "Main Boulevard, Gulberg III, Lahore", phone: "+92 42 1234567", type: "Dealer & Service", lat: 31.5204, lng: 74.3587 },
  { id: "d2", name: "Kama Karachi Motors", city: "Karachi", province: "Sindh", address: "Shahrah-e-Faisal, Karachi", phone: "+92 21 9876543", type: "Dealer & Service", lat: 24.8607, lng: 67.0011 },
  { id: "d3", name: "Kama Islamabad", city: "Islamabad", province: "ICT", address: "Blue Area, Jinnah Avenue, Islamabad", phone: "+92 51 2345678", type: "Dealer", lat: 33.6844, lng: 73.0479 },
  { id: "d4", name: "Kama Faisalabad", city: "Faisalabad", province: "Punjab", address: "D Ground, Faisalabad", phone: "+92 41 3456789", type: "Dealer & Service", lat: 31.4504, lng: 73.135 },
  { id: "d5", name: "Kama Peshawar", city: "Peshawar", province: "KPK", address: "GT Road, Peshawar", phone: "+92 91 4567890", type: "Service Center", lat: 34.0151, lng: 71.5249 },
  { id: "d6", name: "Kama Multan", city: "Multan", province: "Punjab", address: "Bosan Road, Multan", phone: "+92 61 5678901", type: "Dealer", lat: 30.1575, lng: 71.5249 },
];

export const provinces = ["Punjab", "Sindh", "KPK", "ICT", "Balochistan"];
