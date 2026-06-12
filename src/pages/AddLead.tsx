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
  value={form.client}
  onChange={(e) =>
    setForm({ ...form, client: e.target.value })
  }
/>

<input
  placeholder="Phone"
  value={form.phone}
  onChange={(e) =>
    setForm({ ...form, phone: e.target.value })
  }
/>

<input
  placeholder="Source"
  value={form.source}
  onChange={(e) =>
    setForm({ ...form, source: e.target.value })
  }
/>

<input
  placeholder="Code"
  value={form.code}
  onChange={(e) =>
    setForm({ ...form, code: e.target.value })
  }
/>

<input
  placeholder="Referred By"
  value={form.referredBy}
  onChange={(e) =>
    setForm({ ...form, referredBy: e.target.value })
  }
/>

<input
  placeholder="Task"
  value={form.task}
  onChange={(e) =>
    setForm({ ...form, task: e.target.value })
  }
/>

<input
  placeholder="Processed By"
  value={form.processedBy}
  onChange={(e) =>
    setForm({ ...form, processedBy: e.target.value })
  }
/>

<input
  placeholder="Documents"
  value={form.documents}
  onChange={(e) =>
    setForm({ ...form, documents: e.target.value })
  }
/>

<input
  placeholder="Account"
  value={form.account}
  onChange={(e) =>
    setForm({ ...form, account: e.target.value })
  }
/>

<input
  placeholder="Mandate"
  value={form.mandate}
  onChange={(e) =>
    setForm({ ...form, mandate: e.target.value })
  }
/>

<input
  placeholder="SIP"
  value={form.sip}
  onChange={(e) =>
    setForm({ ...form, sip: e.target.value })
  }
/>        <button
          onClick={submit}
          className="bg-blue-600 text-white p-3 rounded"
        >
          Save Lead
        </button>
      </div>
    </div>
  );
}
