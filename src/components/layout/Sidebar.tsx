"use client";

import { FiShoppingBag } from "react-icons/fi";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { menuItems, generalItems } from "@/data/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="hidden min-h-screen w-65 shrink-0 flex-col border-r border-gray-300 bg-indigo-950 px-6 py-4 md:flex">
      <header>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <FiShoppingBag size={23} className="text-white" />
          </div>

          <div>
            <h1 className="text-sm font-bold text-white">Acme Commerce</h1>
            <p className="text-xs text-gray-400">Admin panel</p>
          </div>
        </div>
      </header>

      <nav className="mt-8">
        <div className="mb-6">
          <h2 className="mb-2 text-sm font-semibold text-gray-500">MENU</h2>
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                name={item.name}
                href={item.href}
                icon={item.icon}
                isActive={pathname === item.href}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-semibold text-gray-500">GENERAL</h2>
          <div className="flex flex-col gap-1">
            {generalItems.map((item) => (
              <NavItem
                key={item.href}
                name={item.name}
                href={item.href}
                icon={item.icon}
                isActive={pathname === item.href}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
