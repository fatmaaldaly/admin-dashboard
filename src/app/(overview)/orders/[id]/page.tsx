"use client";

import OrderDetailsCard from "@/components/orders/OrderDetailsCard";
import OrderDetailsSkeleton from "@/components/orders/OrderDetailsSkeleton";
import OrderSummary from "@/components/orders/OrderSummary";
import StatusBadge from "@/components/overview/StatusBadge";
import { getOrders } from "@/services/dashboardServices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function OrderDetailsPage() {
  const params = useParams();

  const orderId = params.id;

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const order = orders?.data.find((order) => String(order.id) === orderId);

  if (isLoading) {
    return (
      <div className="p-10">
        <OrderDetailsSkeleton />
      </div>
    );
  }

  if (isError || !orders) {
    return <div>error fetching orders</div>;
  }

  // order doesnt exist
  if (!order) {
    return <div>order not found</div>;
  }

  return (
    <div className="p-10">
      <div className="mt-6 flex items-center gap-3">
        <h1 className="text-xl font-semibold">Order #{order.id}</h1>

        <StatusBadge status={order.status} />
      </div>

      <div className="mt-6">
        <OrderSummary order={order} />
      </div>

      <div className="mt-6">
        <OrderDetailsCard order={order} />
      </div>
    </div>
  );
}
