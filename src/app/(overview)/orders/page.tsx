// owns pagination state
// fetches all orders
// calculates which orders to display

"use client";

import OrdersTable from "@/components/orders/OrdersTable";
import OrdersTableSkeleton from "@/components/orders/OrdersTableSkeleton";
import { getOrders } from "@/services/dashboardServices";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: orders,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const ordersPerPage = 5;
  const totalPages = Math.ceil((orders?.data.length ?? 0) / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = orders?.data.slice(
    startIndex,
    startIndex + ordersPerPage,
  );

  return (
    <div className="p-10">
      {isOrdersLoading ? (
        <OrdersTableSkeleton />
      ) : isOrdersError || !orders ? (
        <div>Failed to load orders table.</div>
      ) : (
        <OrdersTable
          data={currentOrders ?? []}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
