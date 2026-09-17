// Display percentage, arrow, color
// Determine positive/negative

interface ChangeBadgeProps {
  change: number;
}

export default function ChangeBadge({ change }: ChangeBadgeProps) {
  const formattedChange = `${Math.abs(change).toFixed(1)}%`;
  const isPositive = change >= 0;

  return (
    <div
      className={`flex items-center gap-1 px-2 py-1 rounded-full ${
        isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
      }`}
    >
      {/* Arrow Icon */}
      <svg
        xmlns="http://w3.org"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className={`w-3 h-3 transform transition-transform ${
          isPositive ? "-rotate-45" : "rotate-45"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
      <span className="text-xs font-medium">{formattedChange}</span>
    </div>
  );
}
