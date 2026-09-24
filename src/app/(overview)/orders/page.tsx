// owns pagination state
// fetches all orders
// calculates which orders to display

"use client";

import OrdersTable from "@/components/orders/OrdersTable";
import OrdersTableSkeleton from "@/components/orders/OrdersTableSkeleton";
import { getOrders } from "@/services/overviewServices";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ordersPerPage = 5;

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");

  const {
    data: orders,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const filteredOrders =
    statusFilter === "all"
      ? (orders?.data ?? [])
      : (orders?.data.filter((order) => order.status === statusFilter) ?? []);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const startIndex = (currentPage - 1) * ordersPerPage;
  const currentOrders = filteredOrders.slice(
    startIndex,
    startIndex + ordersPerPage,
  );

  const handleStatusChange = (status: string) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  return (
    <div className="p-10">
      <div className="mb-4 flex justify-end">
        <select
          value={statusFilter}
          onChange={(event) => handleStatusChange(event.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="all" className="bg-white text-gray-700">
            Status: All
          </option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="refunded">Refunded</option>
        </select>
      </div>

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
