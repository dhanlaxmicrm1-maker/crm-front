export interface VehiclePolicy {
  id: number;
  owner: string;
  vehicleNumber: string;
  vehicleType: string;
  premium: number;
  renewalDate: string;
}

export const vehiclePolicies: VehiclePolicy[] = [
  {
    id: 1,
    owner: "Aarav Sharma",
    vehicleNumber: "MH11AB1037",
    vehicleType: "Four Wheeler",
    premium: 8650,
    renewalDate: "2026-06-16",
  },
  {
    id: 2,
    owner: "Vivaan Patel",
    vehicleNumber: "MH12CD1074",
    vehicleType: "Four Wheeler",
    premium: 9300,
    renewalDate: "2026-06-27",
  },
  {
    id: 3,
    owner: "Aditya Reddy",
    vehicleNumber: "MH13EF1111",
    vehicleType: "Two Wheeler",
    premium: 9950,
    renewalDate: "2026-07-08",
  },
  {
    id: 4,
    owner: "Vihaan Gupta",
    vehicleNumber: "MH14GH1148",
    vehicleType: "Four Wheeler",
    premium: 10600,
    renewalDate: "2026-07-19",
  },
  {
    id: 5,
    owner: "Raj Patel",
    vehicleNumber: "GJ01AA9999",
    vehicleType: "Four Wheeler",
    premium: 12500,
    renewalDate: "2026-08-11",
  },
];
