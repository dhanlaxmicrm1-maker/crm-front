import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header
      className="
        fixed
        top-0
        left-72
        right-0
        h-[72px]
        bg-white
        border-b
        border-slate-200
        px-6
        flex
        items-center
        justify-between
        z-40
      "
    >
      {/* Search */}

      <div className="w-[420px]">

        <div
          className="
            flex
            items-center
            bg-slate-50
            border
            border-slate-200
            rounded-xl
            px-4
            py-2
          "
        >
          <Search
            size={16}
            className="text-slate-400"
          />

          <input
            placeholder="Search clients, policies, leads..."
            className="
              ml-3
              bg-transparent
              outline-none
              text-sm
              w-full
            "
          />
        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4">

        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-4
            py-2
            rounded-xl
            text-sm
            font-medium
          "
        >
          + Add Lead
        </button>

        <button
          className="
            relative
            h-10
            w-10
            rounded-xl
            bg-slate-50
            border
            border-slate-200
            flex
            items-center
            justify-center
          "
        >
          <Bell
            size={18}
            className="text-slate-600"
          />

          <span
            className="
              absolute
              top-2
              right-2
              h-2
              w-2
              bg-red-500
              rounded-full
            "
          />
        </button>

        <div
          className="
            flex
            items-center
            gap-3
            pl-3
          "
        >
          <div
            className="
              h-10
              w-10
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-semibold
              text-sm
            "
          >
            R
          </div>

          <div>
            <p className="text-sm font-semibold">
              Riya Sharma
            </p>

            <p className="text-xs text-slate-500">
              Senior Advisor
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}
