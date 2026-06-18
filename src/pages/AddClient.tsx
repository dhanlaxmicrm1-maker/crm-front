import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddClient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    client: "",
    phone: "",
    investmentType: "SIP",
    amount: "",
    risk: "Moderate",
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await api.post("/leads", form);
      navigate("/mutual-fund-clients");
    } catch (err:any) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 p-6">

      <input placeholder="Client Name"
        onChange={(e)=>setForm({...form, client:e.target.value})} required />

      <input placeholder="Phone"
        onChange={(e)=>setForm({...form, phone:e.target.value})} required />

      <select onChange={(e)=>setForm({...form, investmentType:e.target.value})}>
        <option>SIP</option>
        <option>Lumpsum</option>
      </select>

      <input placeholder="Amount"
        onChange={(e)=>setForm({...form, amount:e.target.value})} />

      <button className="bg-black text-white p-2 rounded">
        Save Client
      </button>

    </form>
  );
}
