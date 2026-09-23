"use client";

import { useQuery } from "@tanstack/react-query";
import { getAnalysis, getStats } from "@/services/dashboardService";
import AnalysisCard from "@/components/dashboard/AnalysisCard";
import { TrendingUp, Target, Rss, AlertTriangle } from "lucide-react";
import AnalysisCardSkeleton from "@/components/dashboard/AnalysisCardSkeleton";
import StatCard from "@/components/dashboard/StatCard";
import StatCardSkeleton from "@/components/dashboard/StatCardSkeleton";
import { calculateChange } from "@/utils/calculateChange";

export default function Home() {
  const {
    data: stats,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  const {
    data: analysis,
    isLoading: isAnalysisLoading,
    isError: isAnalysisError,
  } = useQuery({
    queryKey: ["analysis"],
    queryFn: getAnalysis,
  });

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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
        {isAnalysisLoading ? (
          <>
            <AnalysisCardSkeleton />
            <AnalysisCardSkeleton />
            <AnalysisCardSkeleton />
            <AnalysisCardSkeleton />
          </>
        ) : isAnalysisError || !analysis ? (
          <div>Failed to load statistics cards.</div>
        ) : (
          <>
            <AnalysisCard
              title={analysis.revenueMomentum.title}
              value={analysis.revenueMomentum.currentValue}
              previousValue={analysis.revenueMomentum.previousValue}
              unit={"currency"}
              description={analysis.revenueMomentum.description}
              icon={<TrendingUp />}
              progress={analysis.revenueMomentum.progress}
              progressLabel={`${analysis.revenueMomentum.progress}% of $100k monthly goal`}
            />

            <AnalysisCard
              title={analysis.conversionRate.title}
              value={analysis.conversionRate.currentValue}
              previousValue={analysis.conversionRate.previousValue}
              unit={"percentage"}
              description={analysis.conversionRate.description}
              icon={<Target />}
              progress={analysis.conversionRate.progress}
              progressLabel={`Above the ${analysis.conversionRate.progress} category benchmark`}
            />

            <AnalysisCard
              title={analysis.topChannel.title}
              value={analysis.topChannel.currentValue}
              previousValue={analysis.topChannel.previousValue}
              unit={"sales"}
              description={analysis.topChannel.description}
              icon={<Rss />}
              progress={analysis.topChannel.progress}
              progressLabel={`${analysis.topChannel.progress}% of total sales volume`}
            />

            <AnalysisCard
              title={analysis.inventoryRisk.title}
              value={analysis.inventoryRisk.currentValue}
              previousValue={analysis.inventoryRisk.previousValue}
              unit={"sku"}
              description={analysis.inventoryRisk.description}
              icon={<AlertTriangle />}
              progress={analysis.inventoryRisk.progress}
              progressLabel={`${analysis.inventoryRisk.progress}% of catalog needs restock`}
            />
          </>
        )}
      </div>
    </div>
  );
}
