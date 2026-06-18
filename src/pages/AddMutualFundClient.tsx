import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormState = {
  name: string;
  mobile: string;
  investment: string;
};

export default function AddMutualFundClient() {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    investment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.mobile.trim()) {
      alert("Please fill required fields");
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem("mfClients") || "[]");

      const newClient = {
        id: Date.now(),
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        investment: form.investment.trim(),
      };

      localStorage.setItem(
        "mfClients",
        JSON.stringify([...existing, newClient])
      );

      navigate("/mutualfund-clients");
    } catch (error) {
      console.error("Error saving client:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
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
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Client
        </button>
      </div>
    </div>
  );
}
