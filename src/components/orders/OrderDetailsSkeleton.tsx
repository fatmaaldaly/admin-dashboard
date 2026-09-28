export default function OrderDetailsSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="h-10 w-20 animate-pulse rounded-2xl bg-gray-200" />

      <div className="h-7 w-40 animate-pulse rounded bg-gray-200" />

      {/* Summary */}
      <div className="h-24 animate-pulse rounded-2xl bg-gray-200" />

      {/* Details */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="h-48 animate-pulse rounded-2xl bg-gray-200" />
        <div className="h-48 animate-pulse rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}
