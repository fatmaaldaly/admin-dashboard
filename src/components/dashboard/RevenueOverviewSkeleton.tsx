export default function RevenueOverviewSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
      {/* Title */}
      <div className="h-5 w-36 animate-pulse rounded bg-gray-200" />

      {/* Subtitle */}
      <div className="mt-2 h-4 w-64 animate-pulse rounded bg-gray-200" />

      {/* Chart */}
      <div className="mt-4 h-80 animate-pulse rounded bg-gray-100" />
    </div>
  );
}
