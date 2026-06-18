import { useState, useEffect } from "react";

export default function Settings() {

  // 🏢 Company Profile State
  const [company, setCompany] = useState({
    name: "Finvest Advisors",
    sebi: "INA000012345",
    email: "ops@finvest.in",
    phone: "+91 22 4000 1234",
  });

  // 🔔 Notification Settings
  const [notifications, setNotifications] = useState({
    websiteLead: true,
    assignedTask: true,
    overdueTask: true,
    followupReminder: false,
  });

  // 👥 Team Members
  const [team, setTeam] = useState([
    { initials: "RS", name: "Riya Shah", role: "Admin" },
    { initials: "AP", name: "Amit Patel", role: "Manager" },
  ]);

  // ➕ Add Member Form
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
  });

  // 🔁 Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCompany(parsed.company);
      setNotifications(parsed.notifications);
      setTeam(parsed.team);
    }
  }, []);

  // 💾 Save to localStorage
  const saveAll = () => {
    localStorage.setItem(
      "settings",
      JSON.stringify({ company, notifications, team })
    );
    alert("Saved!");
  };

  // 🔁 Toggle Notification
  const toggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // ➕ Add Team Member
  const addMember = () => {
    if (!newMember.name) return;

    const initials = newMember.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    setTeam([
      ...team,
      {
        initials,
        name: newMember.name,
        role: newMember.role || "Employee",
      },
    ]);

    setNewMember({ name: "", role: "" });
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="grid xl:grid-cols-2 gap-6">

        {/* 🏢 Company */}
        <div className="bg-white p-6 rounded-2xl">

          <h2 className="font-semibold mb-5">Company profile</h2>

          <div className="grid grid-cols-2 gap-4">

            <input
              value={company.name}
              onChange={(e) =>
                setCompany({ ...company, name: e.target.value })
              }
              className="input"
              placeholder="Firm name"
            />

            <input
              value={company.sebi}
              onChange={(e) =>
                setCompany({ ...company, sebi: e.target.value })
              }
              className="input"
              placeholder="SEBI"
            />

            <input
              value={company.email}
              onChange={(e) =>
                setCompany({ ...company, email: e.target.value })
              }
              className="input"
              placeholder="Email"
            />

            <input
              value={company.phone}
              onChange={(e) =>
                setCompany({ ...company, phone: e.target.value })
              }
              className="input"
              placeholder="Phone"
            />

          </div>

          <button
            onClick={saveAll}
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg"
          >
            Save changes
          </button>

        </div>

        {/* 👥 Team */}
        <div className="bg-white p-6 rounded-2xl">

          <h2 className="font-semibold mb-5">Team members</h2>

          <div className="space-y-2">

            {team.map((m, i) => (
              <div
                key={i}
                className="flex justify-between items-center border p-3 rounded-xl"
              >
                <div className="flex gap-3 items-center">

                  <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center text-xs">
                    {m.initials}
                  </div>

                  <div>
                    <p className="text-sm font-medium">{m.name}</p>
                    <p className="text-xs text-gray-500">{m.role}</p>
                  </div>

                </div>

                <button
                  onClick={() =>
                    setTeam(team.filter((_, index) => index !== i))
                  }
                  className="text-xs text-red-500"
                >
                  Remove
                </button>

              </div>
            ))}

            {/* ➕ Add Member */}
            <div className="flex gap-2 mt-3">
              <input
                placeholder="Name"
                value={newMember.name}
                onChange={(e) =>
                  setNewMember({ ...newMember, name: e.target.value })
                }
                className="input"
              />

              <input
                placeholder="Role"
                value={newMember.role}
                onChange={(e) =>
                  setNewMember({ ...newMember, role: e.target.value })
                }
                className="input"
              />

              <button
                onClick={addMember}
                className="bg-blue-600 text-white px-3 rounded-xl"
              >
                Add
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* 🔔 Notifications */}
      <div className="mt-6 bg-white p-6 rounded-2xl">

        <h2 className="font-semibold mb-5">Notifications</h2>

        {[
          { label: "New lead from website", key: "websiteLead" },
          { label: "Task assigned", key: "assignedTask" },
          { label: "Task overdue", key: "overdueTask" },
          { label: "Follow-up reminder", key: "followupReminder" },
        ].map((item) => (

          <div
            key={item.key}
            className="flex justify-between items-center bg-slate-50 p-4 rounded-xl mb-2"
          >

            <span className="text-sm">{item.label}</span>

            <button
              onClick={() => toggle(item.key)}
              className={`w-11 h-6 rounded-full ${
                notifications[item.key] ? "bg-blue-900" : "bg-gray-300"
              }`}
            />

          </div>

        ))}

      </div>

    </div>
  );
}
