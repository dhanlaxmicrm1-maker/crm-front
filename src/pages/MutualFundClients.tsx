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

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Mutual Fund Clients</h1>
        <p className="text-gray-500">Track investments and SIPs</p>
      </div>

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-4">

        {/* SEARCH */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search investor..."
            className="border pl-9 pr-3 py-2 rounded-lg w-64"
          />
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">

          <button className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2">
            <Download size={16} />
            Export
          </button>

          <button
            onClick={() => navigate("/add-mf-client")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={16} />
            Add Investor
          </button>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Investors</p>
          <h2 className="text-xl font-bold">
            {mutualFundClients.length}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total AUM</p>
          <h2 className="text-xl font-bold">
            ₹{totalAUM.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Monthly SIP</p>
          <h2 className="text-xl font-bold">
            ₹{totalSIP.toLocaleString()}
          </h2>
        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Investor</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">AMC</th>
              <th className="p-3">Investment</th>
              <th className="p-3">SIP</th>
            </tr>
          </thead>

          <tbody>
            {mutualFundClients.map((client) => (
              <tr key={client.id} className="border-t hover:bg-gray-50">

                <td className="p-3 font-medium">
                  {client.customerName}
                </td>

                <td className="p-3">
                  {client.mobile}
                </td>

                <td className="p-3">
                  {client.amc}
                </td>

                <td className="p-3">
                  ₹{client.investment.toLocaleString()}
                </td>

                <td className="p-3">
                  ₹{client.sipAmount.toLocaleString()}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
