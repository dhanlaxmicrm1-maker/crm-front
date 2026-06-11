import { useState } from "react";
import api from "../services/api";

export default function AddLead() {
  const [form, setForm] = useState({
    client: "",
    phone: "",
    source: "",
    code: "",
    referredBy: "",
    task: "",
    processedBy: "Admin",
    documents: "Pending",
    account: "Pending",
    mandate: "Pending",
    sip: "Pending",
  });

  const submit = async () => {
    try {
      await api.post("/leads", form);
      alert("Lead Added Successfully");
      window.location.href = "/leads";
    } catch (err) {
      console.log(err);
      alert("Error Adding Lead");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-5">Add Lead</h1>

      <div className="flex flex-col gap-3 max-w-md">
        <input
          placeholder="Client Name"
          className="border p-2"
          onChange={(e) =>
            setForm({ ...form, client: e.target.value })
          }
        />

        <input
          placeholder="Phone"
          className="border p-2"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          placeholder="Source"
          className="border p-2"
          onChange={(e) =>
            setForm({ ...form, source: e.target.value })
          }
        />

        <input
          placeholder="Code"
          className="border p-2"
          onChange={(e) =>
            setForm({ ...form, code: e.target.value })
          }
        />

        <button
          onClick={submit}
          className="bg-blue-600 text-white p-3 rounded"
        >
          Save Lead
        </button>
      </div>
    </div>
  );
}
