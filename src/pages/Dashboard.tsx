import { useEffect, useState } from "react";

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

const COLORS = [
  "#2563eb",
  "#14b8a6",
  "#f59e0b",
];

export default function Dashboard() {

  const [stats, setStats] = useState<any>({});

  const [revenueData, setRevenueData] = useState<any[]>([]);

  const [serviceData, setServiceData] = useState<any[]>([]);

  const [followups, setFollowups] = useState<any[]>([]);

  const [activities, setActivities] = useState<any[]>([]);

  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const res = await api.get("/dashboard");

      setStats(res.data.stats);

      setRevenueData(
        res.data.revenueData
      );

      setServiceData(
        res.data.serviceData
      );

      setFollowups(
        res.data.followups
      );

      setActivities(
        res.data.activities
      );

      setInquiries(
        res.data.inquiries
      );

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

          Live business analytics

        </p>

      </div>

      {/* KPI */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-5">

        <Card
          title="Total Leads"
          value={stats.totalLeads || 0}
          icon={<Users size={18} />}
        />

        <Card
          title="Insurance Clients"
          value={stats.insuranceClients || 0}
          icon={<Shield size={18} />}
        />

        <Card
          title="Vehicle Insurance"
          value={stats.vehicleInsurance || 0}
          icon={<Car size={18} />}
        />

        <Card
          title="Mutual Fund Clients"
          value={stats.mutualFundClients || 0}
          icon={<Landmark size={18} />}
        />

        <Card
          title="Monthly Revenue"
          value={`₹${stats.monthlyRevenue || 0}`}
          icon={<IndianRupee size={18} />}
        />

        <Card
          title="Monthly Commission"
          value={`₹${stats.monthlyCommission || 0}`}
          icon={<IndianRupee size={18} />}
        />

        <Card
          title="Upcoming Renewals"
          value={stats.upcomingRenewals || 0}
          icon={<Calendar size={18} />}
        />

        <Card
          title="Today's Follow-Ups"
          value={stats.followups || 0}
          icon={<Clock size={18} />}
        />

        <Card
          title="Pending Tasks"
          value={stats.pendingTasks || 0}
          icon={<ClipboardCheck size={18} />}
        />

      </div>

      {/* Charts */}

      <div className="grid xl:grid-cols-4 gap-4 mb-5">

        <div className="xl:col-span-3 bg-white rounded-xl shadow-sm p-4">

          <h2 className="font-semibold text-sm mb-3">

            Revenue Trend

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
                >

                  {serviceData.map(
                    (_, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* Followups */}

      <div className="grid xl:grid-cols-4 gap-4 mb-5">

        <div className="xl:col-span-3 bg-white rounded-xl shadow-sm">

          <div className="p-3 border-b">

            <h2 className="font-semibold text-sm">

              Upcoming Follow-ups

            </h2>

          </div>

          <div className="divide-y">

            {followups.map((item:any) => (

              <Item
                key={item._id}
                title={item.title}
                sub={item.sub}
                badge={item.badge}
              />

            ))}

          </div>

        </div>

        <div className="bg-white rounded-xl shadow-sm">

          <div className="p-3 border-b">

            <h2 className="font-semibold text-sm">

              Recent Activity

            </h2>

          </div>

          <div className="divide-y">

            {activities.map((item:any) => (

              <Activity
                key={item._id}
                text={item.text}
                time={item.time}
              />

            ))}

          </div>

        </div>

      </div>

      {/* Website Inquiries */}

      <div className="bg-white rounded-xl shadow-sm">

        <div className="p-3 border-b">

          <h2 className="font-semibold text-sm">

            New Website Inquiries

          </h2>

        </div>

        <div className="divide-y">

          {inquiries.map((item:any) => (

            <Inquiry
              key={item._id}
              name={item.name}
              phone={item.phone}
            />

          ))}

        </div>

      </div>

    </div>

  );
}

function Card({ title, value, icon }: any) {

  return (

    <div className="bg-white rounded-xl p-4 shadow-sm">

      <div className="flex justify-between mb-3">

        <span className="text-xs text-slate-500">

          {title}

        </span>

        {icon}

      </div>

      <h3 className="text-2xl font-bold">

        {value}

      </h3>

    </div>

  );

}

function Item({ title, sub, badge }: any) {

  return (

    <div className="p-3 flex justify-between">

      <div>

        <p className="text-sm font-medium">

          {title}

        </p>

        <p className="text-xs text-slate-500">

          {sub}

        </p>

      </div>

      <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">

        {badge}

      </span>

    </div>

  );

}

function Activity({ text, time }: any) {

  return (

    <div className="p-3">

      <p className="text-sm">

        {text}

      </p>

      <p className="text-xs text-slate-500">

        {time}

      </p>

    </div>

  );

}

function Inquiry({ name, phone }: any) {

  return (

    <div className="p-3 flex justify-between">

      <div>

        <p className="text-sm font-medium">

          {name}

        </p>

        <p className="text-xs text-slate-500">

          {phone}

        </p>

      </div>

      <button className="text-xs text-blue-600">

        Open

      </button>

    </div>

  );

}
