"use client";

import { generalItems, menuItems } from "@/data/navigation";
import { X } from "lucide-react";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div
        className="h-full w-72 bg-indigo-950 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          className="cursor-pointer text-white"
        >
          <X size={24} />
        </button>

        <nav className="mt-8">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                name={item.name}
                href={item.href}
                icon={item.icon}
                isActive={pathname === item.href}
                onClick={onClose}
              />
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
              General
            </p>

            <div className="space-y-2">
              {generalItems.map((item) => (
                <NavItem
                  key={item.href}
                  name={item.name}
                  href={item.href}
                  icon={item.icon}
                  isActive={pathname === item.href}
                  onClick={onClose}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
