import { TopProduct } from "@/types/overview";

interface TopProductsProps {
  title: string;
  data: TopProduct[];
}

export default function TopProducts({ title, data }: TopProductsProps) {
  return (
    <div className="h-full bg-white border border-gray-300 rounded-2xl p-4 shadow-sm">
      <h2 className="font-semibold">{title}</h2>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full">
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex w-8 h-8 justify-center items-center rounded-lg bg-blue-100">
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>

                      <p className="text-xs text-gray-500">
                        {item.category} ·{" "}
                        {item.stock === 0
                          ? "Out of stock"
                          : item.stock < 10
                            ? `Low · ${item.stock} left`
                            : `${item.stock} in stock`}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 text-right">
                  <p className="text-sm font-medium">
                    ${item.price.toLocaleString()}
                  </p>

                  <p className="text-xs text-gray-500">{item.sold} sold</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
