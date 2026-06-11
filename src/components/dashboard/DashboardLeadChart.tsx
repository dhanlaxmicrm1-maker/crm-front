import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Dec", leads: 18, conversions: 9 },
  { month: "Jan", leads: 24, conversions: 14 },
  { month: "Feb", leads: 22, conversions: 12 },
  { month: "Mar", leads: 31, conversions: 19 },
  { month: "Apr", leads: 28, conversions: 17 },
  { month: "May", leads: 34, conversions: 21 },
];

export default function DashboardLeadChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        <Bar
          dataKey="leads"
          fill="#1d72b8"
          radius={[6, 6, 0, 0]}
        />

        <Bar
          dataKey="conversions"
          fill="#14b8a6"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}