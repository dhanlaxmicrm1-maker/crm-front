import { useState } from "react";
import { Search } from "lucide-react";

export default function InsuranceClients() {

  const [clients, setClients] = useState([]);

  const [form, setForm] = useState({
    client: "",
    policyNo: "",
    product: "",
    premium: "",
    commission: "",
    renewal: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addClient = () => {
    if (!form.client) return;

    setClients([
      ...clients,
      {
        id: Date.now(),
        ...form,
        premium: Number(form.premium),
        commission: Number(form.commission)
      }
    ]);

    setForm({
      client: "",
      policyNo: "",
      product: "",
      premium: "",
      commission: "",
      renewal: ""
    });
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      <h1 className="text-4xl font-bold mb-6">
        Insurance Clients
      </h1>

      {/* 🔥 FORM */}
      <div className="bg-white p-5 rounded-2xl mb-6 shadow-sm grid grid-cols-3 gap-4">

        <input name="client" value={form.client} onChange={handleChange} placeholder="Client Name" className="input" />
        <input name="policyNo" value={form.policyNo} onChange={handleChange} placeholder="Policy No" className="input" />
        <input name="product" value={form.product} onChange={handleChange} placeholder="Product" className="input" />

        <input name="premium" value={form.premium} onChange={handleChange} placeholder="Premium" className="input" />
        <input name="commission" value={form.commission} onChange={handleChange} placeholder="Commission" className="input" />
        <input name="renewal" value={form.renewal} onChange={handleChange} placeholder="Renewal Date" className="input" />

        <button
          onClick={addClient}
          className="col-span-3 bg-blue-600 text-white py-2 rounded-xl"
        >
          Add Client
        </button>

      </div>

      {/* 🔍 SEARCH */}
      <div className="relative w-[420px] mb-5">
        <Search className="absolute left-3 top-3 text-slate-400" size={18} />
        <input placeholder="Search..." className="w-full bg-slate-50 rounded-xl pl-10 py-3 outline-none" />
      </div>

      {/* 📊 TABLE */}
      <div className="bg-white rounded-3xl shadow-sm p-5 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 text-left">Client</th>
              <th className="p-4 text-left">Policy #</th>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Premium</th>
              <th className="p-4 text-left">Commission</th>
              <th className="p-4 text-left">Renewal</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50">
                <td className="p-4">{c.client}</td>
                <td className="p-4">{c.policyNo}</td>
                <td className="p-4">{c.product}</td>
                <td className="p-4">₹{c.premium}</td>
                <td className="p-4 text-green-600">₹{c.commission}</td>
                <td className="p-4">{c.renewal}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
