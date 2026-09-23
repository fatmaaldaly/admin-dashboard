import Link from "next/link";

interface NavItemProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

export default function NavItem({
  name,
  href,
  icon,
  isActive,
  onClick,
}: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg px-2 py-2 ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-gray-500 hover:text-white"
      }`}
    >
      {icon}
      {name}
    </Link>
  );
}
