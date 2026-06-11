export default function Followups() {
  const data = [
    {
      name: "Rahul Sharma",
      task: "Collect KYC Documents",
      date: "Today",
    },
    {
      name: "Priya Patel",
      task: "SIP Registration",
      date: "Tomorrow",
    },
    {
      name: "Amit Verma",
      task: "Portfolio Review",
      date: "May 22",
    },
    {
      name: "Neha Shah",
      task: "Investment Planning",
      date: "May 25",
    },
  ];

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div
          key={item.name}
          className="border rounded-xl p-4 hover:bg-slate-50"
        >
          <h3 className="font-medium">
            {item.task}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {item.name}
          </p>

          <p className="text-xs text-blue-600 mt-2">
            {item.date}
          </p>
        </div>
      ))}
    </div>
  );
}