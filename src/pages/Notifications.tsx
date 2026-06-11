import {
  UserPlus,
  AlertTriangle,
  FileText,
  Wallet,
  Bell,
} from "lucide-react";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New lead from website",
      description: "Karan Mehta · Contact form",
      time: "10 min ago",
      icon: UserPlus,
      color: "text-sky-600",
    },
    {
      id: 2,
      title: "Task overdue",
      description: "Reset trading password · Divya Nair",
      time: "1 h ago",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      id: 3,
      title: "Documents pending",
      description: "Rahul Sharma — bank proof missing",
      time: "3 h ago",
      icon: FileText,
      color: "text-slate-700",
    },
    {
      id: 4,
      title: "SIP registration pending",
      description: "Priya Iyer · ₹10,000 monthly",
      time: "Yesterday",
      icon: Wallet,
      color: "text-sky-600",
    },
    {
      id: 5,
      title: "Follow-up reminder",
      description: "Call Rohit Khanna for portfolio review",
      time: "Yesterday",
      icon: Bell,
      color: "text-slate-500",
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-[1080px]">

        <div className="mb-5">
          <h1 className="text-2xl font-bold">
            Notifications
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Real-time alerts on leads, tasks and pending operations.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">

          {notifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`
                  flex items-center justify-between
                  px-5 py-4
                  hover:bg-slate-50
                  ${
                    index !== notifications.length - 1
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
          })}

        </div>
      </div>
    </div>
  );
}