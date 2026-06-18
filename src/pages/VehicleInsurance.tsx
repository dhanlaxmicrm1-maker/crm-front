import { Search, Download, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function VehicleInsurance() {
  const [policies, setPolicies] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    customerName: "",
    vehicleType: "",
    vehicleNumber: "",
    mobile: "",
    premium: "",
    offerPrice: "",
    discount: "",
    cost: "",
    insurer: "",
    agentCompany: "",
  });

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const res = await api.get("/vehicle-insurance");
      setPolicies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addPolicy = async () => {
    try {
      await api.post("/vehicle-insurance", formData);
      fetchPolicies();
      setShowModal(false);
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const deletePolicy = async (id: string) => {
    try {
      await api.delete(`/vehicle-insurance/${id}`);
      fetchPolicies();
    } catch (err) {
      console.log(err);
    }
  };

  const resetForm = () => {
    setFormData({
      customerName: "",
      vehicleType: "",
      vehicleNumber: "",
      mobile: "",
      premium: "",
      offerPrice: "",
      discount: "",
      cost: "",
      insurer: "",
      agentCompany: "",
    });
  };

  const filteredPolicies = policies.filter((p) =>
    p.customerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Vehicle Insurance</h1>
        <p className="text-xs text-slate-500">
          Vehicle policies and renewals
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">

        {/* Top bar */}
        <div className="flex justify-between items-center mb-4">

          {/* Search */}
          <div className="relative w-[320px]">
            <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search vehicle..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 rounded-lg pl-9 py-2 text-sm outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="bg-slate-100 px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
              <Download size={14} />
              Export
            </button>

            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm"
            >
              <Plus size={14} />
              Add Policy
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border text-xs">
            <thead>
              <tr className="bg-slate-100">
                <th className="border p-2">Customer</th>
                <th className="border p-2">Vehicle</th>
                <th className="border p-2">Number</th>
                <th className="border p-2">Mobile</th>
                <th className="border p-2">Premium</th>
                <th className="border p-2">Offer</th>
                <th className="border p-2">Discount</th>
                <th className="border p-2">Cost</th>
                <th className="border p-2">Insurer</th>
                <th className="border p-2">Agent</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredPolicies.map((p) => (
                <tr key={p._id}>
                  <td className="border p-2">{p.customerName}</td>
                  <td className="border p-2">{p.vehicleType}</td>
                  <td className="border p-2">{p.vehicleNumber}</td>
                  <td className="border p-2">{p.mobile}</td>
                  <td className="border p-2">₹{p.premium}</td>
                  <td className="border p-2">₹{p.offerPrice}</td>
                  <td className="border p-2">₹{p.discount}</td>
                  <td className="border p-2">₹{p.cost}</td>
                  <td className="border p-2">{p.insurer}</td>
                  <td className="border p-2">{p.agentCompany}</td>

                  <td className="border p-2">
                    <button
                      onClick={() => deletePolicy(p._id)}
                      className="text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[400px] space-y-2">
            <h2 className="font-semibold">Add Policy</h2>

            {Object.keys(formData).map((key) => (
              <input
                key={key}
                name={key}
                placeholder={key}
                onChange={handleChange}
                className="w-full border p-2 rounded text-sm"
              />
            ))}

            <div className="flex justify-end gap-2 pt-2">
              <button onClick={() => setShowModal(false)}>Cancel</button>

              <button
                onClick={addPolicy}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
