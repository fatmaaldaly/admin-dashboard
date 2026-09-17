export default function StatCardSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
      <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

      <div className="h-9 w-32 animate-pulse rounded bg-gray-200" />

      <div className="flex items-center gap-2">
        <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200" />
        <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}
