"use client";

import { Search } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function HeaderSearch() {
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
    <input
      type="text"
      placeholder="Search orders, products..."
      defaultValue={searchParams.get("q") ?? ""}
      onChange={(event) => handleSearch(event.target.value)}
      className="h-9 w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 outline-none text-sm focus:border-blue-500"
    />
  );
}
