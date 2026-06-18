import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddInsuranceClient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    policyNo: "",
    vehicle: "",
    premium: "",
  });

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handle save
  const handleSubmit = () => {
    if (!form.name || !form.policyNo) {
      alert("Please fill required fields");
      return;
    }

    // get existing data
    const existing = JSON.parse(
      localStorage.getItem("insuranceClients") || "[]"
    );

    const newClient = {
      id: Date.now(),
      ...form,
    };

    // save updated list
    localStorage.setItem(
      "insuranceClients",
      JSON.stringify([...existing, newClient])
    );

    // redirect to list page
    navigate("/insurance-clients");
  };

  return (
    <div className="p-6 max-w-xl">
      <h2 className="text-2xl font-semibold mb-4">
        Add Insurance Client
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="policyNo"
          placeholder="Policy Number"
          value={form.policyNo}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="vehicle"
          placeholder="Vehicle Details"
          value={form.vehicle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="premium"
          placeholder="Premium Amount"
          value={form.premium}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Client
        </button>
      </div>
    </div>
  );
}
