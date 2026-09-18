// Fetch stats, Calculate change, Pass data to components

"use client";

import { useQuery } from "@tanstack/react-query";
import { getAnalysis } from "@/services/dashboardService";
import AnalysisCard from "@/components/dashboard/AnalysisCard";
import { TrendingUp, Target, Rss, AlertTriangle } from "lucide-react";
import AnalysisCardSkeleton from "@/components/dashboard/AnalysisCardSkeleton";

export default function Home() {
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
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-10">
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
    </>
  );
}
