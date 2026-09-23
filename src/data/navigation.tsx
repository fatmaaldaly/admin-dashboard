import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  Settings,
  LifeBuoy,
} from "lucide-react";

export const menuItems = [
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

export const generalItems = [
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings size={20} />,
  },
  {
    name: "Support",
    href: "/dashboard/support",
    icon: <LifeBuoy size={20} />,
  },
];
