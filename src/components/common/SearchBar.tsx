import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
      <Search
        size={16}
        className="text-gray-400"
      />

      <input
        type="text"
        placeholder="Search..."
        className="ml-2 outline-none w-full"
      />
    </div>
  );
}