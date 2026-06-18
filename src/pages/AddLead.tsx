import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddLead() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    client: "",
    phone: "",
    source: "",
    referredBy: "",
    task: "",
    processedBy: "",
    documents: "pending",
    account: "pending",
    mandate: "pending",
    sip: "pending",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/leads", form);
      navigate("/leads");
    } catch (err: any) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 p-6">
      <input placeholder="Client Name" onChange={(e)=>setForm({...form, client:e.target.value})} required />
      <input placeholder="Phone" onChange={(e)=>setForm({...form, phone:e.target.value})} required />
      <input placeholder="Source" onChange={(e)=>setForm({...form, source:e.target.value})} />
      <button className="bg-black text-white p-2 rounded">Save</button>
    </form>
  );
}
