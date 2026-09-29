export default function ProductsTableSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-4 shadow-sm">
      <div className="mt-4 overflow-x-auto p-2">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 text-left text-sm">
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Stock</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="px-4 py-4">
                  <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
                </td>

                <td className="px-4 py-4">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                </td>

                <td className="px-4 py-4">
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                </td>

                <td className="px-4 py-4">
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
