import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddLead() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    client: "",
    phone: "",
    source: "",
    code: "",
    referredBy: "",
    task: "",
    processedBy: "",
    documents: "pending",
    account: "pending",
    mandate: "pending",
    sip: "pending",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/leads", form);
      alert("Lead added successfully ✅");
      navigate("/leads");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error adding lead ❌");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Lead</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <input name="client" placeholder="Client Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="source" placeholder="Source" onChange={handleChange} />
        <input name="code" placeholder="Code" onChange={handleChange} />
        <input name="referredBy" placeholder="Referred By" onChange={handleChange} />
        <input name="task" placeholder="Task" onChange={handleChange} />
        <input name="processedBy" placeholder="Processed By" onChange={handleChange} />

        <button className="col-span-2 bg-black text-white py-2 rounded">
          Save Lead
        </button>

      </form>
    </div>
  );
}
