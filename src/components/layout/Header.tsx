import { Search } from "lucide-react";
import InitialsBadge from "../InitialsBadge";

export default function Header() {
  const companyName = "Acme Commerce";

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-300 bg-white px-4 md:px-6">
      {/* left side */}
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">Overview</h1>
        <p className="text-xs text-gray-500">
          Welcome back, here is what is happening today.
        </p>
      </div>

      {/* right side */}

      <div className="flex items-center gap-4">
        {/* search bar */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search orders, products..."
            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 outline-none h-9 text-sm focus:border-blue-500"
          />
        </div>

        <InitialsBadge name={companyName} />
      </div>
    </header>
  );
}
