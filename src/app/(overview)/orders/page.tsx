// owns pagination state
// fetches all orders
// calculates which orders to display

"use client";

import OrdersTable from "@/components/orders/OrdersTable";
import OrdersTableEmpty from "@/components/orders/OrdersTableEmpty";
import OrdersTableSkeleton from "@/components/orders/OrdersTableSkeleton";
import { getOrders } from "@/services/dashboardServices";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ORDERS_PER_PAGE = 5;

export default function OrdersPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";
  const router = useRouter();
  const pathname = usePathname();
  const statusFilter = searchParams.get("status") ?? "all";

  const {
    data: orders,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const filteredOrders = (orders?.data ?? []).filter((order) => {
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;

    const matchesSearch =
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const startIndex = (currentPage - 1) * ORDERS_PER_PAGE;
  const currentOrders = filteredOrders.slice(
    startIndex,
    startIndex + ORDERS_PER_PAGE,
  );

  const startItem = filteredOrders.length === 0 ? 0 : startIndex + 1;

  const endItem = Math.min(
    startIndex + currentOrders.length,
    filteredOrders.length,
  );

  const handleStatusChange = (status: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (status === "all") {
      params.delete("status");
    } else {
      params.set("status", status);
    }
    params.delete("page");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-10">
      <div className="mb-4 flex justify-between">
        <p className="text-sm">
          {`Showing ${startItem} – ${endItem} of ${filteredOrders.length} orders`}{" "}
        </p>
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
      ) : filteredOrders.length === 0 ? (
        <OrdersTableEmpty />
      ) : (
        <OrdersTable
          data={currentOrders}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
