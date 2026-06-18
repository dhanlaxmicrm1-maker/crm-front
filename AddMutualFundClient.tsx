import { useState } from "react";
import { useNavigate } from "react-router-dom";

type MFClient = {
  id: number;
  customerName: string;
  mobile: string;
  folioNo: string;
  amc: string;
  investment: number;
  sipAmount: number;
};

export default function AddMutualFundClient() {
  const navigate = useNavigate();

  const [form, setForm] = useState<Omit<MFClient, "id">>({
    customerName: "",
    mobile: "",
    folioNo: "",
    amc: "",
    investment: 0,
    sipAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "investment" || name === "sipAmount"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = () => {
    if (!form.customerName) {
      alert("Enter name");
      return;
    }

    const existing = JSON.parse(
      localStorage.getItem("mfClients") || "[]"
    );

    const newClient: MFClient = {
      id: Date.now(),
      ...form,
    };

    localStorage.setItem(
      "mfClients",
      JSON.stringify([...existing, newClient])
    );

    navigate("/mutual-fund-clients");
  };

  return (
    <div className="p-4">
      <h2>Add Investor</h2>

      <input name="customerName" placeholder="Name" onChange={handleChange} />
      <input name="mobile" placeholder="Mobile" onChange={handleChange} />
      <input name="folioNo" placeholder="Folio" onChange={handleChange} />
      <input name="amc" placeholder="AMC" onChange={handleChange} />
      <input name="investment" placeholder="Investment" onChange={handleChange} />
      <input name="sipAmount" placeholder="SIP" onChange={handleChange} />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
