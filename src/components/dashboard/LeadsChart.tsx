import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Dec", leads: 18, converted: 9 },
  { month: "Jan", leads: 24, converted: 13 },
  { month: "Feb", leads: 22, converted: 11 },
  { month: "Mar", leads: 31, converted: 19 },
  { month: "Apr", leads: 28, converted: 17 },
  { month: "May", leads: 34, converted: 21 },
];

export default function LeadsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />
        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="leads"
          stroke="#2563eb"
          strokeWidth={3}
        />

        <Line
          type="monotone"
          dataKey="converted"
          stroke="#14b8a6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}