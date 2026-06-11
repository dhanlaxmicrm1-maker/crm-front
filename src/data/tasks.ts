export interface Task {
  id: number;
  title: string;
  client: string;
  employee: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Follow-up" | "Completed";
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Schedule portfolio review call",
    client: "Rohit Khanna",
    employee: "Amit Patel",
    dueDate: "2026-05-15",
    priority: "Low",
    status: "Pending",
  },
  {
    id: 2,
    title: "Call client Raju bhai for documents",
    client: "Rajubhai",
    employee: "Amit Patel",
    dueDate: "2026-05-20",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 3,
    title: "Reset trading password",
    client: "Divya Nair",
    employee: "Priya Mehta",
    dueDate: "2026-05-09",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Call new lead",
    client: "Karan Mehta",
    employee: "Neha Kumar",
    dueDate: "2026-05-10",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 5,
    title: "Process SIP registration ₹10,000",
    client: "Priya Iyer",
    employee: "Amit Patel",
    dueDate: "2026-05-11",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 6,
    title: "E-mandate follow up",
    client: "Sneha Kapoor",
    employee: "Vikram Singh",
    dueDate: "2026-05-13",
    priority: "Medium",
    status: "Follow-up",
  },
  {
    id: 7,
    title: "Send welcome kit",
    client: "Meera Gupta",
    employee: "Neha Kumar",
    dueDate: "2026-05-02",
    priority: "Low",
    status: "Completed",
  },
  {
    id: 8,
    title: "Collect KYC documents",
    client: "Rahul Sharma",
    employee: "Riya Shah",
    dueDate: "2026-05-12",
    priority: "High",
    status: "Completed",
  },
];
