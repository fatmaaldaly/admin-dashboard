export default function OrdersTableSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-4 shadow-sm">
      <div className="mt-4 overflow-x-auto p-2">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left text-sm">
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 text-right font-medium">Amount</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 6 }).map((_, index) => (
              <tr key={index} className="border-b border-gray-200">
                {/* Customer */}
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />

                    <div className="space-y-2">
                      <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                      <div className="h-3 w-36 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                </td>

                {/* Product */}
                <td className="py-4">
                  <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                </td>

                {/* Status */}
                <td className="py-4">
                  <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200" />
                </td>

                {/* Amount */}
                <td className="py-4 text-right">
                  <div className="ml-auto h-4 w-20 animate-pulse rounded bg-gray-200" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
