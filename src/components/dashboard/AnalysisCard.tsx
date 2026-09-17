import ChangeBadge from "./ChangeBadge";

interface AnalysisCardProps {
  title: string;
  value: number;
  unit: "currency" | "percentage" | "sales" | "sku";
  description: string;
  change: number;
  icon: React.ReactNode;
  progress: number;
  progressLabel: string;
}

export default function AnalysisCard({
  title,
  value,
  unit,
  description,
  change,
  icon,
  progress,
  progressLabel,
}: AnalysisCardProps) {
  const formattedValue =
    unit === "currency"
      ? `$${value.toLocaleString()}`
      : unit === "percentage"
        ? `${value}%`
        : unit === "sales"
          ? `${value.toLocaleString()} sales`
          : `${value} SKUs`;

  return (
    <div className="flex flex-col bg-white border border-gray-300 rounded-2xl p-6 shadow-sm gap-2">
      {/* first row: icon + change */}
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
          {icon}
        </div>
        <ChangeBadge change={change} />
      </div>

      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <p className="text-3xl font-bold">{formattedValue}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
