export type VehicleCategory = "Light Truck" | "Van" | "Bus" | "EV" | "Special";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  series: string;
  tagline: string;
  description: string;
  price: string;
  featured: boolean;
  specs: {
    engine: string;
    power: string;
    transmission: string;
    payload: string;
    fuelType: string;
    gvw: string;
  };
  features: string[];
  image: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "joylong-ef1",
    name: "Joylong EF1",
    category: "Light Truck",
    series: "EF Series",
    tagline: "Built for last-mile delivery",
    description: "A versatile light truck designed for urban logistics and last-mile delivery operations. Euro II compliant with superior fuel efficiency.",
    price: "Inquire for Pricing",
    featured: true,
    specs: {
      engine: "2.8L Turbo Diesel",
      power: "116 HP",
      transmission: "5-Speed Manual",
      payload: "2,500 kg",
      fuelType: "Diesel",
      gvw: "4,200 kg",
    },
    features: ["Power steering", "AC cabin", "Anti-lock brakes", "Heavy-duty suspension", "12V auxiliary port"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
  },
  {
    id: "joylong-hkl6600",
    name: "Joylong HKL6600",
    category: "Van",
    series: "HKL Series",
    tagline: "Premium passenger transport",
    description: "A 15-seat passenger van ideal for corporate shuttles, school transport, and tourism. Spacious cabin with modern amenities.",
    price: "Inquire for Pricing",
    featured: true,
    specs: {
      engine: "2.8L CRDi Diesel",
      power: "136 HP",
      transmission: "6-Speed Manual",
      payload: "1,800 kg",
      fuelType: "Diesel",
      gvw: "3,600 kg",
    },
    features: ["15 seats", "Rear AC", "Sliding door", "Luggage compartment", "GPS ready"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
  },
  {
    id: "joylong-hkl6700",
    name: "Joylong HKL6700",
    category: "Bus",
    series: "HKL Series",
    tagline: "Mid-size bus for city & intercity",
    description: "A robust mid-size bus suitable for intercity routes, staff transport, and tourism. Seating for up to 30 passengers.",
    price: "Inquire for Pricing",
    featured: true,
    specs: {
      engine: "3.8L Turbo Diesel",
      power: "160 HP",
      transmission: "6-Speed Manual",
      payload: "3,200 kg",
      fuelType: "Diesel",
      gvw: "7,500 kg",
    },
    features: ["30 seats", "Full AC system", "Luggage bay", "Emergency exits", "PA system"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
  },
  {
    id: "kama-ev100",
    name: "Kama EV-100",
    category: "EV",
    series: "EV Series",
    tagline: "Zero-emission urban logistics",
    description: "Pakistan's first locally distributed electric commercial vehicle. Designed for sustainable last-mile delivery in urban environments.",
    price: "Inquire for Pricing",
    featured: true,
    specs: {
      engine: "Electric Motor",
      power: "80 kW",
      transmission: "Single-Speed Auto",
      payload: "1,500 kg",
      fuelType: "Electric",
      gvw: "3,000 kg",
    },
    features: ["200 km range", "Fast charging", "Regenerative braking", "Silent operation", "Low maintenance"],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
  },
  {
    id: "joylong-ef5",
    name: "Joylong EF5",
    category: "Light Truck",
    series: "EF Series",
    tagline: "Heavy-duty workhorse",
    description: "A larger-capacity light truck for construction, agriculture, and logistics operations requiring higher payload.",
    price: "Inquire for Pricing",
    featured: false,
    specs: {
      engine: "3.8L Turbo Diesel",
      power: "150 HP",
      transmission: "6-Speed Manual",
      payload: "5,000 kg",
      fuelType: "Diesel",
      gvw: "8,500 kg",
    },
    features: ["Power steering", "Air brakes", "Heavy-duty chassis", "Dual rear wheels", "Tow hook"],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  },
  {
    id: "kama-ambulance",
    name: "Kama Ambulance",
    category: "Special",
    series: "Special Vehicles",
    tagline: "Emergency response vehicle",
    description: "A purpose-built ambulance on the Joylong van platform. Fully equipped for emergency medical services.",
    price: "Inquire for Pricing",
    featured: false,
    specs: {
      engine: "2.8L CRDi Diesel",
      power: "136 HP",
      transmission: "6-Speed Manual",
      payload: "1,200 kg",
      fuelType: "Diesel",
      gvw: "3,400 kg",
    },
    features: ["Stretcher bay", "Medical oxygen port", "Emergency lights", "Siren system", "Rear AC"],
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80",
  },
];

export const categories: VehicleCategory[] = ["Light Truck", "Van", "Bus", "EV", "Special"];
