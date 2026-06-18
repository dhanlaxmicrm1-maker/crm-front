import { useState } from "react";
import { Search, Download, Plus } from "lucide-react";

export default function MutualFundClients() {

  const [clients, setClients] = useState([]);

  const [form, setForm] = useState({
    customerName: "",
    mobile: "",
    folioNo: "",
    amc: "",
    investment: "",
    sipAmount: ""
  });

  const [showForm, setShowForm] = useState(false);

  // 🔢 Calculations
  const totalAUM = clients.reduce((sum, c) => sum + Number(c.investment || 0), 0);
  const totalSIP = clients.reduce((sum, c) => sum + Number(c.sipAmount || 0), 0);

  // ✏️ Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ Add Investor
  const addInvestor = () => {
    if (!form.customerName) return;

    setClients([
      ...clients,
      {
        id: Date.now(),
        ...form,
        investment: Number(form.investment),
        sipAmount: Number(form.sipAmount)
      }
    ]);

    setForm({
      customerName: "",
      mobile: "",
      folioNo: "",
      amc: "",
      investment: "",
      sipAmount: ""
    });

    setShowForm(false);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">Mutual Fund Clients</h1>
        <p className="text-slate-500 mt-2">
          Track investments, SIPs and folios
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white rounded-2xl p-5">
          <p className="text-sm text-slate-500">Total Investors</p>
          <h2 className="text-3xl font-bold mt-2">{clients.length}</h2>
        </div>

        <div className="bg-white rounded-2xl p-5">
          <p className="text-sm text-slate-500">Total AUM</p>
          <h2 className="text-3xl font-bold mt-2">
            ₹{totalAUM.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5">
          <p className="text-sm text-slate-500">Monthly SIP</p>
          <h2 className="text-3xl font-bold mt-2">
            ₹{totalSIP.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5">
          <p className="text-sm text-slate-500">Active Folios</p>
          <h2 className="text-3xl font-bold mt-2">{clients.length}</h2>
        </div>

      </div>

      {/* FORM (MODAL STYLE) */}
      {showForm && (
        <div className="bg-white p-5 rounded-2xl mb-6 grid grid-cols-3 gap-4 shadow">

          <input name="customerName" value={form.customerName} onChange={handleChange} placeholder="Investor Name" className="input" />
          <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile" className="input" />
          <input name="folioNo" value={form.folioNo} onChange={handleChange} placeholder="Folio No" className="input" />

          <input name="amc" value={form.amc} onChange={handleChange} placeholder="AMC" className="input" />
          <input name="investment" value={form.investment} onChange={handleChange} placeholder="Investment" className="input" />
          <input name="sipAmount" value={form.sipAmount} onChange={handleChange} placeholder="SIP Amount" className="input" />

          <button onClick={addInvestor} className="col-span-3 bg-blue-600 text-white py-2 rounded-xl">
            Save Investor
          </button>

        </div>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-sm">

        {/* TOP BAR */}
        <div className="p-5 flex justify-between items-center">

          <div className="relative w-[400px]">
            <Search size={18} className="absolute left-3 top-3 text-slate-400" />
            <input placeholder="Search investor..." className="w-full bg-slate-50 rounded-xl pl-10 py-2.5 outline-none" />
          </div>

          <div className="flex gap-3">

            <button className="bg-slate-100 px-4 py-2 rounded-xl flex gap-2">
              <Download size={16} />
              Export
            </button>

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl flex gap-2"
            >
              <Plus size={16} />
              Add Investor
            </button>

          </div>

        </div>

        {/* TABLE DATA */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">
              <tr>
                <th className="p-4">Investor</th>
                <th className="p-4">Mobile</th>
                <th className="p-4">Folio</th>
                <th className="p-4">AMC</th>
                <th className="p-4">Investment</th>
                <th className="p-4">SIP</th>
              </tr>
            </thead>

            <tbody>

              {clients.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50">

                  <td className="p-4 font-medium">{c.customerName}</td>
                  <td className="p-4">{c.mobile}</td>
                  <td className="p-4">{c.folioNo}</td>
                  <td className="p-4">{c.amc}</td>
                  <td className="p-4">₹{c.investment}</td>
                  <td className="p-4">₹{c.sipAmount}</td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
