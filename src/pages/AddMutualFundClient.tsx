import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMutualFundClient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    investment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.mobile) {
      alert("Please fill required fields");
      return;
    }

    const existing = JSON.parse(
      localStorage.getItem("mfClients") || "[]"
    );

    const newClient = {
      id: Date.now(),
      ...form,
    };

    localStorage.setItem(
      "mfClients",
      JSON.stringify([...existing, newClient])
    );

    navigate("/mutualfund-clients");
  };

  return (
    <div className="p-6 max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">
        Add Mutual Fund Client
      </h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="investment"
          placeholder="Investment Amount"
          value={form.investment}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Client
        </button>
      </div>
    </div>
  );
}
