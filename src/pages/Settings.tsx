import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    websiteLead: true,
    assignedTask: true,
    overdueTask: true,
    followupReminder: false,
  });

  const toggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const teamMembers = [
    {
      initials: "RS",
      name: "Riya Shah",
      role: "Admin",
    },
    {
      initials: "AP",
      name: "Amit Patel",
      role: "Manager",
    },
    {
      initials: "NK",
      name: "Neha Kumar",
      role: "Employee",
    },
    {
      initials: "VS",
      name: "Vikram Singh",
      role: "Employee",
    },
    {
      initials: "PM",
      name: "Priya Mehta",
      role: "Employee",
    },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Team, integrations and notification preferences.
        </p>

      </div>

      {/* Top Section */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Company Profile */}

        <div className="bg-white rounded-2xl border p-6 shadow-sm">

          <h2 className="font-semibold text-lg mb-5">
            Company profile
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-600">
                Firm name
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 mt-1"
                defaultValue="Finvest Advisors"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                SEBI Reg.
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 mt-1"
                defaultValue="INA000012345"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Email
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 mt-1"
                defaultValue="ops@finvest.in"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Phone
              </label>

              <input
                className="w-full border rounded-lg px-3 py-2 mt-1"
                defaultValue="+91 22 4000 1234"
              />
            </div>

          </div>

          <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">
            Save changes
          </button>

        </div>

        {/* Team Members */}

        <div className="bg-white rounded-2xl border p-6 shadow-sm">

          <h2 className="font-semibold text-lg mb-5">
            Team members
          </h2>

          <div className="space-y-2">

            {teamMembers.map((member, index) => (

              <div
                key={index}
                className="flex justify-between items-center border rounded-xl px-4 py-3"
              >

                <div className="flex items-center gap-3">

                  <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold">
                    {member.initials}
                  </div>

                  <div>

                    <p className="font-medium text-sm">
                      {member.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {member.role}
                    </p>

                  </div>

                </div>

                <button className="text-xs font-medium">
                  Manage
                </button>

              </div>

            ))}

            <button className="w-full border rounded-xl py-3 text-sm hover:bg-slate-50">
              + Invite member
            </button>

          </div>

        </div>

      </div>

      {/* Notifications */}

      <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">

        <h2 className="font-semibold text-lg mb-5">
          Notifications
        </h2>

        <div className="space-y-3">

          {[
            {
              label: "New lead from website",
              key: "websiteLead",
            },
            {
              label: "Task assigned to me",
              key: "assignedTask",
            },
            {
              label: "Task overdue",
              key: "overdueTask",
            },
            {
              label: "Daily follow-up reminder",
              key: "followupReminder",
            },
          ].map((item) => (

            <div
              key={item.key}
              className="flex justify-between items-center bg-slate-50 border rounded-xl px-4 py-4"
            >

              <span className="text-sm font-medium">
                {item.label}
              </span>

              <button
                onClick={() =>
                  toggle(item.key as keyof typeof notifications)
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  notifications[
                    item.key as keyof typeof notifications
                  ]
                    ? "bg-blue-900"
                    : "bg-slate-300"
                }`}
              >

                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
                    notifications[
                      item.key as keyof typeof notifications
                    ]
                      ? "translate-x-5"
                      : "translate-x-1"
                  }`}
                />

              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}