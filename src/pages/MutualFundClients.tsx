import { useState } from "react";
import { mutualFundClients } from "../data/mutualFundClients";
import { Search, Download, Plus } from "lucide-react";

export default function MutualFundClients() {

  const [investors, setInvestors] = useState(mutualFundClients);

  const [showModal, setShowModal] = useState(false);

  const [newInvestor, setNewInvestor] = useState({
    customerName: "",
    mobile: "",
    folioNo: "",
    amc: "",
    investment: "",
    sipAmount: "",
  });

  const addInvestor = () => {
    setInvestors([
      ...investors,
      {
        id: investors.length + 1,
        customerName: newInvestor.customerName,
        mobile: newInvestor.mobile,
        folioNo: newInvestor.folioNo,
        amc: newInvestor.amc,
        investment: Number(newInvestor.investment),
        sipAmount: Number(newInvestor.sipAmount),
      },
    ]);

    setShowModal(false);

    setNewInvestor({
      customerName: "",
      mobile: "",
      folioNo: "",
      amc: "",
      investment: "",
      sipAmount: "",
    });
  };

  const totalAUM = investors.reduce(
    (sum, client) => sum + client.investment,
    0
  );

const totalSIP = investors.reduce(
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
            {investors.length}
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
            {investors.length}
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

            <button
  onClick={() => setShowModal(true)}
  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 flex items-center gap-2 transition"
>
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

              {investors.map((client) => (

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
{showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-2xl w-[650px]">

      <h2 className="text-xl font-bold mb-4">
        Add Investor
      </h2>

      <div className="grid grid-cols-2 gap-3">

        <input
          placeholder="Investor Name"
          value={newInvestor.customerName}
          onChange={(e) =>
            setNewInvestor({
              ...newInvestor,
              customerName: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Mobile"
          value={newInvestor.mobile}
          onChange={(e) =>
            setNewInvestor({
              ...newInvestor,
              mobile: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Folio No"
          value={newInvestor.folioNo}
          onChange={(e) =>
            setNewInvestor({
              ...newInvestor,
              folioNo: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="AMC"
          value={newInvestor.amc}
          onChange={(e) =>
            setNewInvestor({
              ...newInvestor,
              amc: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Investment"
          value={newInvestor.investment}
          onChange={(e) =>
            setNewInvestor({
              ...newInvestor,
              investment: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

        <input
          placeholder="Monthly SIP"
          value={newInvestor.sipAmount}
          onChange={(e) =>
            setNewInvestor({
              ...newInvestor,
              sipAmount: e.target.value,
            })
          }
          className="border p-3 rounded-xl"
        />

      </div>

      <div className="flex gap-3 mt-5">

        <button
          onClick={addInvestor}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          Save
        </button>

        <button
          onClick={() => setShowModal(false)}
          className="border px-5 py-2 rounded-xl"
        >
          Cancel
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}
      
