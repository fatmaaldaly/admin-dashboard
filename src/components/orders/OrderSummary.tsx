import { OrdersData } from "@/types/overview";

interface OrderSummaryProps {
  order: OrdersData;
}

export default function OrderSummary({ order }: OrderSummaryProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-xs text-gray-500">Product</p>
        <p className="mt-1 text-sm font-medium text-gray-700">
          {order.product}
        </p>
      </div>

      <div className="text-right">
        <p className="text-xs text-gray-500">Total</p>
        <p className="mt-1 text-lg font-semibold text-gray-800">
          ${order.amount.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
