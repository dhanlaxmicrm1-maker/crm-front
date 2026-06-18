import { useEffect, useState } from "react";

import api from "../services/api";

export default function Settings() {

  const [company, setCompany] = useState({
    firmName: "",
    sebi: "",
    email: "",
    phone: "",
  });

  const [teamMembers, setTeamMembers] =
    useState<any[]>([]);

  const [notifications, setNotifications] =
    useState({
      websiteLead: false,
      assignedTask: false,
      overdueTask: false,
      followupReminder: false,
    });

  useEffect(() => {

    fetchSettings();

  }, []);

  const fetchSettings = async () => {

    try {

      const res = await api.get(
        "/settings"
      );

      setCompany(
        res.data.company
      );

      setTeamMembers(
        res.data.teamMembers
      );

      setNotifications(
        res.data.notifications
      );

    }

    catch (err) {

      console.log(err);

    }

  };

  const saveCompany = async () => {

    try {

      await api.put(
        "/settings/company",

        company
      );

      alert("Saved");

    }

    catch (err) {

      console.log(err);

      alert("Error");

    }

  };

  const toggleNotification = async (
    key: keyof typeof notifications
  ) => {

    const updated = {

      ...notifications,

      [key]: !notifications[key],

    };

    setNotifications(updated);

    try {

      await api.put(
        "/settings/notifications",

        updated
      );

    }

    catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="p-8 bg-slate-50 min-h-screen">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">

          Settings

        </h1>

        <p className="text-gray-500 mt-2">

          Team, integrations and notifications

        </p>

      </div>

      {/* Top */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Company */}

        <div className="bg-white rounded-2xl border p-6 shadow-sm">

          <h2 className="font-semibold text-lg mb-5">

            Company Profile

          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className="text-sm text-gray-600">

                Firm Name

              </label>

              <input

                value={company.firmName}

                onChange={(e) =>

                  setCompany({

                    ...company,

                    firmName:
                      e.target.value,

                  })

                }

                className="w-full border rounded-lg px-3 py-2 mt-1"

              />

            </div>

            <div>

              <label className="text-sm text-gray-600">

                SEBI Reg.

              </label>

              <input

                value={company.sebi}

                onChange={(e) =>

                  setCompany({

                    ...company,

                    sebi:
                      e.target.value,

                  })

                }

                className="w-full border rounded-lg px-3 py-2 mt-1"

              />

            </div>

            <div>

              <label className="text-sm text-gray-600">

                Email

              </label>

              <input

                value={company.email}

                onChange={(e) =>

                  setCompany({

                    ...company,

                    email:
                      e.target.value,

                  })

                }

                className="w-full border rounded-lg px-3 py-2 mt-1"

              />

            </div>

            <div>

              <label className="text-sm text-gray-600">

                Phone

              </label>

              <input

                value={company.phone}

                onChange={(e) =>

                  setCompany({

                    ...company,

                    phone:
                      e.target.value,

                  })

                }

                className="w-full border rounded-lg px-3 py-2 mt-1"

              />

            </div>

          </div>

          <button

            onClick={saveCompany}

            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm"

          >

            Save Changes

          </button>

        </div>

        {/* Team */}

        <div className="bg-white rounded-2xl border p-6 shadow-sm">

          <h2 className="font-semibold text-lg mb-5">

            Team Members

          </h2>

          <div className="space-y-2">

            {teamMembers.map(

              (member) => (

                <div

                  key={member._id}

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

              )

            )}

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

                  toggleNotification(

                    item.key as keyof typeof notifications

                  )

                }

                className={`relative inline-flex h-6 w-11 items-center rounded-full transition

                ${notifications[item.key as keyof typeof notifications]

                  ? "bg-blue-900"

                  : "bg-slate-300"

                }`}

              >

                <span

                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition

                  ${notifications[item.key as keyof typeof notifications]

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
