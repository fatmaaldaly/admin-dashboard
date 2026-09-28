export default function OrdersTableEmpty() {
  return (
    <div className="flex min-h-60 items-center justify-center rounded-2xl border border-gray-300 bg-white">
      <div className="text-center">
        <h2 className="text-sm font-semibold text-gray-700">No orders found</h2>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search or status filter.
        </p>
      </div>
    </div>
  );
}
