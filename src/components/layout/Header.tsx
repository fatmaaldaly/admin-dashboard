"use client";

import { useState } from "react";
import InitialsBadge from "../InitialsBadge";
import { Menu, Search } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Header() {
  const companyName = "Acme Commerce";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    params.delete("page");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-300 bg-white px-4 md:px-6">
      {/* left side */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="md:hidden cursor-pointer"
          aria-label="Open navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
        <MobileSidebar
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Overview</h1>
          <p className="text-xs text-gray-500">
            Welcome back, here is what is happening today.
          </p>
        </div>
      </div>

      {/* right side */}

      <div className="flex items-center gap-4">
        {/* search bar */}
        <div className="relative w-40 md:w-64">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search orders, products..."
            defaultValue={searchParams.get("q") ?? ""}
            onChange={(event) => handleSearch(event.target.value)}
            className="h-9 w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 outline-none text-sm focus:border-blue-500"
          />
        </div>

        <InitialsBadge name={companyName} />
      </div>
    </header>
  );
}
