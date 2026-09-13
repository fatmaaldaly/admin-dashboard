"use client";

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  Settings,
  LifeBuoy,
} from "lucide-react";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

const menuItems = [
  {
    name: "Overview",
    href: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: <ShoppingBag size={20} />,
  },
  {
    name: "Products",
    href: "/products",
    icon: <Package size={20} />,
  },
  {
    name: "Customers",
    href: "/customers",
    icon: <Users size={20} />,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: <BarChart3 size={20} />,
  },
];

const generalItems = [
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings />,
  },
  {
    name: "Support",
    href: "/dashboard/support",
    icon: <LifeBuoy />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="flex h-screen w-65 flex-col border-r border-gray-300 bg-indigo-950 px-6 py-4">
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
                key={item.name}
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
                key={item.name}
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
