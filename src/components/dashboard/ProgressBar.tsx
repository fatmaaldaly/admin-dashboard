interface ProgressBarProps {
  progress: number;
  progressLabel: string;
  change: number;
}

export default function ProgressBar({
  progress,
  progressLabel,
  change,
}: ProgressBarProps) {
  const isPositive = change >= 0;

  return (
    <div className="mt-3">
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full ${isPositive ? "bg-green-600" : "bg-purple-600"}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>{progressLabel}</span>
      </div>
    </div>
  );
}
