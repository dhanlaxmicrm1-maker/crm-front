import { useEffect, useState } from "react";

import api from "../services/api";

import {
  UserPlus,
  AlertTriangle,
  FileText,
  Wallet,
  Bell,
} from "lucide-react";

export default function Notifications() {

  const [notifications, setNotifications] =
    useState<any[]>([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {

    try {

      const res = await api.get(
        "/notifications"
      );

      setNotifications(res.data);

    }

    catch (err) {

      console.log(err);

    }

  };

  const getIcon = (icon: string) => {

    switch (icon) {

      case "UserPlus":

        return UserPlus;

      case "AlertTriangle":

        return AlertTriangle;

      case "FileText":

        return FileText;

      case "Wallet":

        return Wallet;

      default:

        return Bell;

    }

  };

  return (

    <div className="p-4">

      <div className="max-w-[1080px]">

        <div className="mb-5">

          <h1 className="text-2xl font-bold">

            Notifications

          </h1>

          <p className="text-sm text-slate-500 mt-1">

            Real-time alerts on leads,
            tasks and pending operations.

          </p>

        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">

          {notifications.map(
            (item, index) => {

              const Icon = getIcon(
                item.icon
              );

              return (

                <div

                  key={item._id}

                  className={`
                    flex items-center justify-between
                    px-5 py-4
                    hover:bg-slate-50
                    ${
                      index !==
                      notifications.length - 1

                        ? "border-b border-slate-100"

                        : ""
                    }
                  `}
                >

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">

                      <Icon
                        size={16}
                        className={item.color}
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-[15px] leading-none">

                        {item.title}

                      </h3>

                      <p className="text-xs text-slate-500 mt-2">

                        {item.description}

                      </p>

                    </div>

                  </div>

                  <span className="text-xs text-slate-500">

                    {item.time}

                  </span>

                </div>

              );

            }
          )}

        </div>

      </div>

    </div>

  );

}
