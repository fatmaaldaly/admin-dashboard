// Fetch stats, Calculate change, Pass data to components

"use client";

import StatCard from "@/components/dashboard/StatCard";
import { useQuery } from "@tanstack/react-query";
import { getAnalysis, getStats } from "@/services/dashboardService";
import StatCardSkeleton from "@/components/dashboard/StatCardSkeleton";
import AnalysisCard from "@/components/dashboard/AnalysisCard";
import { TrendingUp, Target, Rss, AlertTriangle } from "lucide-react";

export default function Home() {
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  const { data: analysis, isLoading: isAnalysisLoading } = useQuery({
    queryKey: ["analysis"],
    queryFn: getAnalysis,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Error loading data</p>;
  }

  const calculateChange = (currentValue: number, previousValue: number) => {
    if (previousValue === 0) {
      return 0;
    }
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-10 py-10">
        {stats?.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.currentValue}
            change={calculateChange(item.currentValue, item.previousValue)}
            format={item.format}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-10">
        {isAnalysisLoading ? (
          <div className="grid grid-cols-1 gap-4 p-10 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <StatCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <AnalysisCard
            title={analysis?.revenueMomentum.title ?? ""}
            value={analysis?.revenueMomentum.currentValue ?? 0}
            unit={"currency"}
            description={analysis?.revenueMomentum.description ?? ""}
            change={calculateChange(
              analysis?.revenueMomentum.currentValue ?? 0,
              analysis?.revenueMomentum.previousValue ?? 0,
            )}
            icon={<TrendingUp />}
            progress={80}
            progressLabel={`${analysis?.revenueMomentum.progress}% of $100k monthly goal`}
          />
        )}
      </div>
    </>
  );
}
