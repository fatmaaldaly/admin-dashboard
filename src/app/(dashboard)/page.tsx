// Fetch stats, Calculate change, Pass data to components
"use client";

import { useQuery } from "@tanstack/react-query";
import { getAnalysis, getStats } from "@/services/dashboardService";
import AnalysisCard from "@/components/dashboard/AnalysisCard";
import { TrendingUp, Target, Rss, AlertTriangle } from "lucide-react";
import AnalysisCardSkeleton from "@/components/dashboard/AnalysisCardSkeleton";
import StatCard from "@/components/dashboard/StatCard";
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
  
  const {
    data: analysis,
    isLoading: isAnalysisLoading,
    isError: isAnalysisError,
  } = useQuery({
    queryKey: ["analysis"],
    queryFn: getAnalysis,
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
              unit={"currency"}
              description={analysis.revenueMomentum.description}
              change={calculateChange(
                analysis.revenueMomentum.currentValue,
                analysis.revenueMomentum.previousValue,
              )}
              icon={<TrendingUp />}
              progress={analysis.revenueMomentum.progress}
              progressLabel={`${analysis.revenueMomentum.progress}% of $100k monthly goal`}
            />

            <AnalysisCard
              title={analysis.conversionRate.title}
              value={analysis.conversionRate.currentValue}
              unit={"percentage"}
              description={analysis.conversionRate.description}
              change={calculateChange(
                analysis.conversionRate.currentValue,
                analysis.conversionRate.previousValue,
              )}
              icon={<Target />}
              progress={analysis.conversionRate.progress}
              progressLabel={`Above the ${analysis.conversionRate.progress} category benchmark`}
            />

            <AnalysisCard
              title={analysis.topChannel.title}
              value={analysis.topChannel.currentValue}
              unit={"sales"}
              description={analysis.topChannel.description}
              change={calculateChange(
                analysis.topChannel.currentValue,
                analysis.topChannel.previousValue,
              )}
              icon={<Rss />}
              progress={analysis.topChannel.progress}
              progressLabel={`${analysis.topChannel.progress}% of total sales volume`}
            />

            <AnalysisCard
              title={analysis.inventoryRisk.title}
              value={analysis.inventoryRisk.currentValue}
              unit={"sku"}
              description={analysis.inventoryRisk.description}
              change={calculateChange(
                analysis.inventoryRisk.currentValue,
                analysis.inventoryRisk.previousValue,
              )}
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
