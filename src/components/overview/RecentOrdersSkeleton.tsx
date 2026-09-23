export default function RecentOrdersSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-4 shadow-sm">
      <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

      <div className="mt-4 overflow-x-auto p-2">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left text-sm">
              <th className="pb-3">
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
              </th>
              <th className="pb-3">
                <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
              </th>
              <th className="pb-3">
                <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
              </th>
              <th className="pb-3">
                <div className="ml-auto h-4 w-16 animate-pulse rounded bg-gray-200" />
              </th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4].map((row) => (
              <tr
                key={row}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />

                    <div className="space-y-2">
                      <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                      <div className="h-3 w-32 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                </td>

                <td className="py-3">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                </td>

                <td className="py-3">
                  <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200" />
                </td>

                <td className="py-3">
                  <div className="ml-auto h-4 w-16 animate-pulse rounded bg-gray-200" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
