export interface VehiclePolicy {
  id: number;
  customerName: string;
  vehicleType: string;
  vehicleNumber: string;
  mobileNumber: string;
  premium: number;
  offerPrice: number;
  discount: number;
  cost: number;
  insurer: string;
  agentCompany: string;
}

export const vehiclePolicies: VehiclePolicy[] = [
  {
    id: 1,
    customerName: "Rahul Sharma",
    vehicleType: "Car",
    vehicleNumber: "GJ10AB1234",
    mobileNumber: "9876543210",
    premium: 18000,
    offerPrice: 17500,
    discount: 500,
    cost: 16000,
    insurer: "ICICI Lombard",
    agentCompany: "ABC Insurance",
  },
];
