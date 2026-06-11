import { Search, Calendar, Pencil, Trash2, Plus } from "lucide-react";
import { tasks } from "../data/tasks";

export default function Tasks() {
  const columns = [
    "Pending",
    "In Progress",
    "Follow-up",
    "Completed",
  ];

  const priorityClass = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600";
      case "Medium":
        return "bg-sky-100 text-sky-600";
      default:
        return "bg-slate-100 text-slate-500";
    }
  };

  const statusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-sky-100 text-sky-700";
      case "Follow-up":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="px-8 py-8">
      {/* Header */}

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-[36px] font-bold text-slate-900">
            Tasks
          </h1>

          <p className="text-slate-500 mt-1">
            Internal work board. Track who's doing what and what's due next.
          </p>
        </div>

        <button className="bg-[#1f365c] hover:bg-[#172a47] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium">
          <Plus size={16} />
          New Task
        </button>
      </div>

      <div className="border-b border-slate-200 mb-6" />

      {/* Search */}

      <div className="relative mb-5 w-[320px]">
        <Search
          size={16}
          className="absolute left-3 top-3 text-slate-400"
        />

        <input
          placeholder="Search tasks..."
          className="w-full h-10 border border-slate-200 rounded-xl pl-10 pr-4 text-sm bg-white outline-none"
        />
      </div>

      {/* Board */}

      <div className="grid grid-cols-4 gap-4 mb-5">
        {columns.map((column) => {
          const columnTasks = tasks.filter(
            (task) => task.status === column
          );

          return (
            <div
              key={column}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4 min-h-[320px]"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[15px]">
                  {column}
                </h3>

                <div className="h-6 min-w-[24px] px-2 rounded-full border border-slate-200 bg-white flex items-center justify-center text-xs">
                  {columnTasks.length}
                </div>
              </div>

              <div className="space-y-3">
                {columnTasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-medium text-[14px] leading-5">
                        {task.title}
                      </h4>

                      <span
                        className={`px-2 py-1 rounded-full text-[11px] whitespace-nowrap ${priorityClass(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 mt-2">
                      {task.client}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar size={12} />
                        {task.dueDate}
                      </div>

                      <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-semibold">
                        {task.employee
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* All Tasks */}

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200">
          <h3 className="font-semibold">All tasks</h3>
        </div>

        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between px-5 py-4 border-b border-slate-100 hover:bg-slate-50"
          >
            <div>
              <h4 className="font-medium text-[14px]">
                {task.title}
              </h4>

              <p className="text-xs text-slate-500 mt-1">
                {task.client} · {task.employee} · Due {task.dueDate}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-xs px-3 py-1 rounded-full ${priorityClass(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>

              <span
                className={`text-xs px-3 py-1 rounded-full ${statusClass(
                  task.status
                )}`}
              >
                {task.status}
              </span>

              <button className="text-slate-500 hover:text-slate-700">
                <Pencil size={15} />
              </button>

              <button className="text-red-500 hover:text-red-700">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
