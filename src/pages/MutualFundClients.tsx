import { mutualFundClients } from "../data/mutualFundClients";
import { Search, Download, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MutualFundClients() {
  const navigate = useNavigate();

  const totalAUM = mutualFundClients.reduce(
    (sum, client) => sum + client.investment,
    0
  );

  const totalSIP = mutualFundClients.reduce(
    (sum, client) => sum + client.sipAmount,
    0
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      <h1 className="text-3xl font-bold mb-4">
        Mutual Fund Clients
      </h1>

      {/* Top Actions */}
      <div className="flex justify-between mb-4">

        <input
          placeholder="Search..."
          className="border p-2 rounded w-64"
        />

        <button
          onClick={() => navigate("/add-mf-client")}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} />
          Add Investor
        </button>

      </div>

      {/* Stats */}
      <div className="flex gap-4 mb-4">
        <div>Total Investors: {mutualFundClients.length}</div>
        <div>Total AUM: ₹{totalAUM}</div>
        <div>Total SIP: ₹{totalSIP}</div>
      </div>

      {/* Table */}
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Mobile</th>
            <th className="p-2">AMC</th>
            <th className="p-2">Investment</th>
            <th className="p-2">SIP</th>
          </tr>
        </thead>

        <tbody>
          {mutualFundClients.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="p-2">{c.customerName}</td>
              <td className="p-2">{c.mobile}</td>
              <td className="p-2">{c.amc}</td>
              <td className="p-2">₹{c.investment}</td>
              <td className="p-2">₹{c.sipAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
