export default function LeadTable() {
  const leads = [
    {
      name: "Rahul Sharma",
      source: "Website",
      status: "Hot",
      advisor: "Riya",
    },
    {
      name: "Priya Patel",
      source: "Referral",
      status: "Warm",
      advisor: "Neha",
    },
    {
      name: "Amit Verma",
      source: "MOSL",
      status: "Cold",
      advisor: "Amit",
    },
    {
      name: "Neha Shah",
      source: "NJ",
      status: "Hot",
      advisor: "Vikram",
    },
  ];

  const badge = (status: string) => {
    if (status === "Hot")
      return "bg-red-100 text-red-600";

    if (status === "Warm")
      return "bg-yellow-100 text-yellow-600";

    return "bg-blue-100 text-blue-600";
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">

      <table className="w-full">

        <thead className="bg-slate-50">
          <tr>

            <th className="text-left p-4">
              Client
            </th>

            <th className="text-left p-4">
              Source
            </th>

            <th className="text-left p-4">
              Advisor
            </th>

            <th className="text-left p-4">
              Status
            </th>

          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.name}
              className="border-t hover:bg-slate-50"
            >
              <td className="p-4">
                {lead.name}
              </td>

              <td className="p-4">
                {lead.source}
              </td>

              <td className="p-4">
                {lead.advisor}
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${badge(
                    lead.status
                  )}`}
                >
                  {lead.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}