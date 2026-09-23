export default function TopProductsSkeleton() {
  return (
    <div className="h-full rounded-2xl border border-gray-300 bg-white p-4 shadow-sm">
      <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

      <div className="mt-4 overflow-x-auto">
        <table className="w-full">
          <tbody>
            {[1, 2, 3, 4].map((item) => (
              <tr
                key={item}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200 animate-pulse" />

                    <div className="space-y-2">
                      <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                      <div className="h-3 w-40 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                </td>

                <td className="py-4">
                  <div className="ml-auto flex flex-col items-end gap-2">
                    <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                    <div className="h-3 w-12 animate-pulse rounded bg-gray-200" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
