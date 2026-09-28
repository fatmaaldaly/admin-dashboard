import { OrdersData } from "@/types/overview";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface OrderDetailsCardProps {
  order: OrdersData;
}

export default function OrderDetailsCard({ order }: OrderDetailsCardProps) {
  const router = useRouter();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-700">
          Customer Information
        </h2>

        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs text-gray-500">Name</p>
            <p className="text-sm font-medium">{order.customer.name}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm font-medium">{order.customer.email}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-700">
          Order Information
        </h2>

        <div className="mt-4 space-y-3">
          <div>
            <p className="text-xs text-gray-500">Product</p>
            <p className="text-sm font-medium">{order.product}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Status</p>
            <p className="text-sm font-medium">{order.status}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Amount</p>
            <p className="text-sm font-medium">
              ${order.amount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => router.back()}
        className="flex h-10 w-20 items-center gap-1 cursor-pointer rounded-2xl border border-gray-200 bg-white px-3 shadow-sm text-sm font-medium text-gray-700 transition hover:bg-gray-50"
      >
        <ArrowLeft size={16} />
        Back
      </button>
    </div>
  );
}
