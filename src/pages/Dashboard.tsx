import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  Shield,
  Car,
  Landmark,
  IndianRupee,
  ClipboardCheck,
  Calendar,
  Clock,
} from "lucide-react";
const revenueData = [
  { month: "Jan", revenue: 1200000 },
  { month: "Feb", revenue: 1450000 },
  { month: "Mar", revenue: 1650000 },
  { month: "Apr", revenue: 1820000 },
  { month: "May", revenue: 2100000 },
  { month: "Jun", revenue: 2804450 },
];

const serviceData = [
  {
    name: "Insurance",
    value: 40,
  },
  {
    name: "Vehicle",
    value: 30,
  },
  {
    name: "Mutual Funds",
    value: 30,
  },
];

const COLORS = [
  "#2563eb",
  "#14b8a6",
  "#f59e0b",
];

export default function Dashboard() {
  return (
    <div className="p-4 bg-slate-50 min-h-screen">

      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-800">
          Executive Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Live business analytics across all modules
        </p>
      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-5">

        <Card title="Total Leads" value="22" icon={<Users size={18} />} />
        <Card title="Insurance Clients" value="22" icon={<Shield size={18} />} />
        <Card title="Vehicle Insurance" value="22" icon={<Car size={18} />} />
        <Card title="Mutual Fund Clients" value="22" icon={<Landmark size={18} />} />
        <Card title="Monthly Revenue" value="₹28,04,450" icon={<IndianRupee size={18} />} />

        <Card title="Monthly Commission" value="₹3,99,410" icon={<IndianRupee size={18} />} />
        <Card title="Upcoming Renewals" value="7" icon={<Calendar size={18} />} />
        <Card title="Today's Follow-Ups" value="1" icon={<Clock size={18} />} />
        <Card title="Pending Tasks" value="8" icon={<ClipboardCheck size={18} />} />

      </div>

      {/* CHARTS */}

      <div className="grid xl:grid-cols-4 gap-4 mb-5">

        <div className="xl:col-span-3 bg-white rounded-xl shadow-sm p-4">

          <h2 className="font-semibold text-sm mb-3">
            Revenue Trend (6 mo)
          </h2>

          <div className="h-[280px]">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={revenueData}>
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="month" />

      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#2563eb"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4">

          <h2 className="font-semibold text-sm mb-3">
            Service Distribution
          </h2>

         <div className="h-[280px]">
<ResponsiveContainer width="100%" height={220}>
  <PieChart>
    <Pie
      data={serviceData}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="38%"
      innerRadius={45}
      outerRadius={70}
      paddingAngle={1}
    >
      {serviceData.map((_, index) => (
        <Cell
          key={index}
          fill={COLORS[index]}
        />
      ))}
    </Pie>

    <Tooltip />
  </PieChart>
</ResponsiveContainer>

  <div className="flex justify-center gap-4 mt-2 text-sm">
    <span className="text-blue-600">
      ● Insurance
    </span>

    <span className="text-teal-600">
      ● Vehicle
    </span>

    <span className="text-amber-500">
      ● Mutual Funds
    </span>
  </div>
</div>
        </div>

      </div>

      {/* FOLLOWUPS + ACTIVITY */}

      <div className="grid xl:grid-cols-4 gap-4 mb-5">

        <div className="xl:col-span-3 bg-white rounded-xl shadow-sm">

          <div className="p-3 border-b flex justify-between">
            <h2 className="font-semibold text-sm">
              Upcoming Follow-ups
            </h2>

            <button className="text-xs text-blue-600">
              View all
            </button>
          </div>

          <div className="divide-y">

            <Item
              title="Collect KYC documents"
              sub="Rahul Sharma • Due 2026-05-12"
              badge="In Progress"
            />

            <Item
              title="Process SIP registration ₹10,000"
              sub="Priya Iyer • Due 2026-05-11"
              badge="In Progress"
            />

            <Item
              title="Call new lead"
              sub="Karan Mehta • Due 2026-05-10"
              badge="Pending"
            />

            <Item
              title="E-mandate follow up"
              sub="Sneha Kapoor • Due 2026-05-13"
              badge="Follow-up Required"
            />

          </div>

        </div>

        <div className="bg-white rounded-xl shadow-sm">

          <div className="p-3 border-b">
            <h2 className="font-semibold text-sm">
              Recent Activity
            </h2>
          </div>

          <div className="divide-y">

            <Activity text="New lead from website" time="10 min ago" />
            <Activity text="Task completed" time="1 hr ago" />
            <Activity text="KYC uploaded" time="2 hr ago" />
            <Activity text="Account opened" time="Yesterday" />

          </div>

        </div>

      </div>

      {/* WEBSITE INQUIRIES */}

      <div className="bg-white rounded-xl shadow-sm">

        <div className="p-3 flex justify-between">
          <h2 className="font-semibold text-sm">
            New Website Inquiries
          </h2>

          <button className="text-xs text-blue-600">
            All leads
          </button>
        </div>

        <div className="divide-y">

          <Inquiry name="Karan Mehta" phone="+91 90123 45678" />
          <Inquiry name="Arjun Desai" phone="+91 91234 87654" />
          <Inquiry name="Rohit Khanna" phone="+91 90090 12121" />

        </div>

      </div>

    </div>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex justify-between mb-3">
        <span className="text-xs text-slate-500">{title}</span>
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-800">
        {value}
      </h3>
    </div>
  );
}

function Item({
  title,
  sub,
  badge,
}: {
  title: string;
  sub: string;
  badge: string;
}) {
  return (
    <div className="p-3 flex justify-between items-center">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>

      <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">
        {badge}
      </span>
    </div>
  );
}

function Activity({
  text,
  time,
}: {
  text: string;
  time: string;
}) {
  return (
    <div className="p-3">
      <p className="text-sm">{text}</p>
      <p className="text-xs text-slate-500">{time}</p>
    </div>
  );
}

function Inquiry({
  name,
  phone,
}: {
  name: string;
  phone: string;
}) {
  return (
    <div className="p-3 flex justify-between items-center">
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-slate-500">
          {phone} • Website
        </p>
      </div>

      <button className="text-xs text-blue-600">
        Open
      </button>
    </div>
  );
}
