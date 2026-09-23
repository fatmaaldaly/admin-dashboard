import { OrdersData } from "@/types/overview";
import InitialsBadge from "../InitialsBadge";
import StatusBadge from "./StatusBadge";

interface RecentOrdersProps {
  title: string;
  data: OrdersData[];
}

export default function RecentOrders({ title, data }: RecentOrdersProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm">
      <h2 className="font-semibold">{title}</h2>

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
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <InitialsBadge name={item.customer.name} />

                    <div>
                      <p className="text-sm font-medium">
                        {item.customer.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.customer.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-3 text-sm">{item.product}</td>

                <td className="py-3">
                  <StatusBadge status={item.status} />
                </td>

                <td className="py-3 text-right text-sm font-medium">
                  ${item.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
