// Fetch stats, Calculate change, Pass data to components
"use client";

import StatCard from "@/components/dashboard/StatCard";
import { useQuery } from "@tanstack/react-query";
import { getStats } from "@/services/dashboardService";
import StatCardSkeleton from "@/components/dashboard/StatCardSkeleton";

export default function Home() {
  const {
    data: stats,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  const calculateChange = (currentValue: number, previousValue: number) => {
    if (previousValue === 0) {
      return 0;
    }
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : isError || !stats ? (
          <div>Failed to load statistics cards.</div>
        ) : (
          <>
            <StatCard
              title={stats.totalRevenue.title}
              value={stats.totalRevenue.currentValue}
              change={calculateChange(
                stats.totalRevenue.currentValue,
                stats.totalRevenue.previousValue,
              )}
              format={stats.totalRevenue.format}
            />

            <StatCard
              title={stats.orders.title}
              value={stats.orders.currentValue}
              change={calculateChange(
                stats.orders.currentValue,
                stats.orders.previousValue,
              )}
              format={stats.orders.format}
            />

            <StatCard
              title={stats.newCustomers.title}
              value={stats.newCustomers.currentValue}
              change={calculateChange(
                stats.newCustomers.currentValue,
                stats.newCustomers.previousValue,
              )}
              format={stats.newCustomers.format}
            />

            <StatCard
              title={stats.avgOrderValue.title}
              value={stats.avgOrderValue.currentValue}
              change={calculateChange(
                stats.avgOrderValue.currentValue,
                stats.avgOrderValue.previousValue,
              )}
              format={stats.avgOrderValue.format}
            />
          </>
        )}
      </div>
    </div>
  );
}
