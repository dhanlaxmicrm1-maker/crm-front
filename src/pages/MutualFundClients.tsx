import { mutualFundClients } from "../data/mutualFundClients";
import { Search, Download, Plus } from "lucide-react";

export default function MutualFundClients() {
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

      <div className="mb-6">
        <h1 className="text-4xl font-bold text-slate-900">
          Mutual Fund Clients
        </h1>

        <p className="text-slate-500 mt-2">
          Track investments, SIPs and folios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white rounded-2xl shadow-sm p-5">
          <p className="text-sm text-slate-500">
            Total Investors
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {mutualFundClients.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5">
          <p className="text-sm text-slate-500">
            Total AUM
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹{totalAUM.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5">
          <p className="text-sm text-slate-500">
            Monthly SIP
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹{totalSIP.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5">
          <p className="text-sm text-slate-500">
            Active Folios
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {mutualFundClients.length}
          </h2>
        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-sm">

        <div className="p-5 flex justify-between items-center">

          <div className="relative w-[400px]">

            <Search
              size={18}
              className="absolute left-3 top-3 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search investor..."
              className="w-full bg-slate-50 rounded-xl pl-10 py-2.5 outline-none"
            />

          </div>

          <div className="flex gap-3">

            <button className="bg-slate-100 hover:bg-slate-200 rounded-xl px-4 py-2 flex items-center gap-2 transition">
              <Download size={16} />
              Export
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 flex items-center gap-2 transition">
              <Plus size={16} />
              Add Investor
            </button>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr className="text-left text-slate-600">

                <th className="p-4">Investor</th>
                <th className="p-4">Mobile</th>
                <th className="p-4">Folio</th>
                <th className="p-4">AMC</th>
                <th className="p-4">Investment</th>
                <th className="p-4">SIP</th>

              </tr>

            </thead>

            <tbody>

              {mutualFundClients.map((client) => (

                <tr
                  key={client.id}
                  className="hover:bg-slate-50 transition"
                >

                  <td className="p-4 font-medium">
                    {client.customerName}
                  </td>

                  <td className="p-4">
                    {client.mobile}
                  </td>

                  <td className="p-4">
                    {client.folioNo}
                  </td>

                  <td className="p-4">
                    {client.amc}
                  </td>

                  <td className="p-4">
                    ₹{client.investment.toLocaleString()}
                  </td>

                  <td className="p-4">
                    ₹{client.sipAmount.toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}