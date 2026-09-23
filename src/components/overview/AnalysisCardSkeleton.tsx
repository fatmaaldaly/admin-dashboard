export default function AnalysisCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
      {/* Icon + change badge */}
      <div className="flex items-center justify-between">
        <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
        <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200" />
      </div>

      {/* Title */}
      <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

      {/* Value */}
      <div className="h-9 w-32 animate-pulse rounded bg-gray-200" />

      {/* Description */}
      <div className="h-4 w-full animate-pulse rounded bg-gray-200" />

      {/* Progress section */}
      <div className="mt-3">
        {/* Progress label */}
        <div className="mb-2 h-3 w-40 animate-pulse rounded bg-gray-200" />

        {/* Progress bar */}
        <div className="h-2 w-full animate-pulse rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
