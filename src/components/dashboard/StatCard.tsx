import ChangeBadge from "./ChangeBadge";

interface StatCardProps {
  title: string;
  value: number;
  change: number;
  format: "currency" | "number";
}

export default function StatCard({
  title,
  value,
  change,
  format,
}: StatCardProps) {
  const formattedValue =
    format === "currency"
      ? `$${value.toLocaleString()}`
      : value.toLocaleString();

  return (
    <div className="flex flex-col bg-white border border-gray-300 rounded-2xl p-6 shadow-sm gap-2">
      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <p className="text-3xl font-bold">{formattedValue}</p>
      <div className="flex items-center gap-2">
        <ChangeBadge change={change} />
        <span className="text-xs text-gray-500">vs. last month</span>
      </div>
    </div>
  );
}