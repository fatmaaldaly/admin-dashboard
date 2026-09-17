import ChangeBadge from "./ChangeBadge";

interface AnalysisCardProps {
  title: string;
  value: number;
  description: string;
  change: number;
  icon: React.ReactNode;
  bar: string;
}

export default function AnalysisCard({
  title,
  value,
  description,
  change,
  icon,
  bar,
}: AnalysisCardProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-300 rounded-2xl p-6 shadow-sm gap-2">
      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
      <div className="flex items-center gap-2">
        <ChangeBadge change={change} />
        <span className="text-xs text-gray-500">vs. last month</span>
      </div>
    </div>
  );
}
