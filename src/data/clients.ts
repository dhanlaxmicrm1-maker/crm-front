export interface Client {
  id: number;
  date: string;
  client: string;
  phone: string;
  source: string;
  code: string;
  referredBy: string;
  task: string;
  processedBy: string;
  documents: string;
  account: string;
  mandate: string;
  sip: string;
}

export const clients: Client[] = [
  {
    id: 1,
    date: "2026-05-18",
    client: "Rajubhai",
    phone: "987654321",
    source: "Referral",
    code: "12-345",
    referredBy: "Website",
    task: "Account Opening",
    processedBy: "Neha Kumar",
    documents: "Pending",
    account: "Pending",
    mandate: "Pending",
    sip: "Pending",
  },
  {
    id: 2,
    date: "2026-05-18",
    client: "Rajubhai Shah",
    phone: "987654321",
    source: "Website",
    code: "123456",
    referredBy: "Website",
    task: "Account Opening",
    processedBy: "Amit Patel",
    documents: "Pending",
    account: "Pending",
    mandate: "Pending",
    sip: "Pending",
  },
  {
    id: 3,
    date: "2026-04-28",
    client: "Sneha Kapoor",
    phone: "+91 98101 11223",
    source: "MOSL",
    code: "MOSL10198",
    referredBy: "Sunita Joshi",
    task: "Mandate Setup",
    processedBy: "Vikram Singh",
    documents: "Completed",
    account: "Completed",
    mandate: "In Progress",
    sip: "Pending",
  },
  {
    id: 4,
    date: "2026-05-28",
    client: "Rahul Sharma",
    phone: "+91 98201 23456",
    source: "MOSL",
    code: "MOSL10234",
    referredBy: "Anil Verma",
    task: "Account Opening",
    processedBy: "Riya Shah",
    documents: "Completed",
    account: "In Progress",
    mandate: "Pending",
    sip: "Pending",
  },
  {
    id: 5,
    date: "2026-04-22",
    client: "Meera Gupta",
    phone: "+91 98765 43210",
    source: "NJ",
    code: "NJ55801",
    referredBy: "Anil Verma",
    task: "Account Opening",
    processedBy: "Neha Kumar",
    documents: "Completed",
    account: "Completed",
    mandate: "Completed",
    sip: "Completed",
  },
  {
    id: 6,
    date: "2026-05-01",
    client: "Divya Nair",
    phone: "+91 98765 11000",
    source: "MOSL",
    code: "MOSL10250",
    referredBy: "Mahesh Rao",
    task: "ID/Password Change",
    processedBy: "Priya Mehta",
    documents: "Completed",
    account: "Completed",
    mandate: "Completed",
    sip: "Completed",
  },
  {
    id: 7,
    date: "2026-05-04",
    client: "Priya Iyer",
    phone: "+91 99876 54321",
    source: "NJ",
    code: "NJ55821",
    referredBy: "Website",
    task: "SIP Registration",
    processedBy: "Amit Patel",
    documents: "Completed",
    account: "Completed",
    mandate: "Completed",
    sip: "In Progress",
  },
];