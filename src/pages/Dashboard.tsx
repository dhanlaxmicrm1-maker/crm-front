import React, { useEffect, useState } from "react";

import api from "../services/api";

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

  const [stats, setStats] = useState({
    leads: 0,
    insurance: 0,
    vehicle: 0,
    mutual: 0,
    tasks: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {

    try {

      const [
        leadsRes,
        insuranceRes,
        vehicleRes,
        mutualRes,
        taskRes,
      ] = await Promise.all([
        api.get("/leads"),
        api.get("/insurance"),
        api.get("/vehicle"),
        api.get("/mutualfund"),
        api.get("/tasks"),
      ]);

      setStats({
        leads: leadsRes.data.length,
        insurance: insuranceRes.data.length,
        vehicle: vehicleRes.data.length,
        mutual: mutualRes.data.length,
        tasks: taskRes.data.length,
      });

    }

    catch (err) {

      console.log(err);

    }
  };

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

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-5">

        <Card
          title="Total Leads"
          value={String(stats.leads)}
          icon={<Users size={18} />}
        />

        <Card
          title="Insurance Clients"
          value={String(stats.insurance)}
          icon={<Shield size={18} />}
        />

        <Card
          title="Vehicle Insurance"
          value={String(stats.vehicle)}
          icon={<Car size={18} />}
        />

        <Card
          title="Mutual Fund Clients"
          value={String(stats.mutual)}
          icon={<Landmark size={18} />}
        />

        <Card
          title="Monthly Revenue"
          value="₹28,04,450"
          icon={<IndianRupee size={18} />}
        />

        <Card
          title="Monthly Commission"
          value="₹3,99,410"
          icon={<IndianRupee size={18} />}
        />

        <Card
          title="Upcoming Renewals"
          value="7"
          icon={<Calendar size={18} />}
        />

        <Card
          title="Today's Follow-Ups"
          value="1"
          icon={<Clock size={18} />}
        />

        <Card
          title="Pending Tasks"
          value={String(stats.tasks)}
          icon={<ClipboardCheck size={18} />}
        />

      </div>

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

        <span className="text-xs text-slate-500">
          {title}
        </span>

        {icon}

      </div>

      <h3 className="text-2xl font-bold text-slate-800">

        {value}

      </h3>

    </div>

  );
}
