export default function Activity() {
  const activities = [
    {
      text: "New lead added - Rahul Sharma",
      color: "blue",
    },
    {
      text: "SIP Activated - Priya Patel",
      color: "green",
    },
    {
      text: "Client Onboarded - Neha Shah",
      color: "purple",
    },
    {
      text: "KYC Approved - Amit Verma",
      color: "orange",
    },
  ];

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.text}
          className="flex gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>

          <div>
            <p className="font-medium">
              {activity.text}
            </p>

            <p className="text-xs text-gray-500">
              2 hours ago
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}