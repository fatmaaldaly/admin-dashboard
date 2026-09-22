"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getAnalysis,
  getRecentOrders,
  getRevenueOverview,
  getSalesByChannel,
  getStats,
  getTopProducts,
} from "@/services/dashboardService";
import AnalysisCard from "@/components/dashboard/AnalysisCard";
import { TrendingUp, Target, Rss, AlertTriangle } from "lucide-react";
import AnalysisCardSkeleton from "@/components/dashboard/AnalysisCardSkeleton";
import StatCard from "@/components/dashboard/StatCard";
import StatCardSkeleton from "@/components/dashboard/StatCardSkeleton";
import { calculateChange } from "@/utils/calculateChange";
import RevenueOverview from "@/components/dashboard/RevenueOverview";
import RevenueOverviewSkeleton from "@/components/dashboard/RevenueOverviewSkeleton";
import SalesByChannel from "@/components/dashboard/SalesByChannel";
import SalesByChannelSkeleton from "@/components/dashboard/SalesByChannelSkeleton";
import RecentOrders from "@/components/dashboard/RecentOrders";
import RecentOrdersSkeleton from "@/components/dashboard/RecentOrdersSkeleton";
import TopProducts from "@/components/dashboard/TopProducts";
import TopProductsSkeleton from "@/components/dashboard/TopProductsSkeleton";

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

  const {
    data: revenue,
    isLoading: isRevenueLoading,
    isError: isRevenueError,
  } = useQuery({
    queryKey: ["revenue"],
    queryFn: getRevenueOverview,
  });

  const {
    data: sales,
    isLoading: isSalesLoading,
    isError: isSalesError,
  } = useQuery({
    queryKey: ["sales"],
    queryFn: getSalesByChannel,
  });

  const {
    data: orders,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getRecentOrders,
  });

  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getTopProducts,
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
          <div>Failed to load analysis cards.</div>
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

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {isRevenueLoading ? (
            <RevenueOverviewSkeleton />
          ) : isRevenueError || !revenue ? (
            <div>Failed to load revenue overview.</div>
          ) : (
            <RevenueOverview
              title={revenue.title}
              subTitle="Monthly revenue and profit, last 9 months"
              data={revenue.data}
            />
          )}
        </div>

        <div className="lg:col-span-1">
          {isSalesLoading ? (
            <SalesByChannelSkeleton />
          ) : isSalesError || !sales ? (
            <div>Failed to load sales by channel.</div>
          ) : (
            <SalesByChannel
              title={sales.title}
              subTitle="Orders per acquisition source"
              data={sales.data}
            />
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {isOrdersLoading ? (
            <RecentOrdersSkeleton />
          ) : isOrdersError || !orders ? (
            <div>Failed to load recent orders.</div>
          ) : (
            <RecentOrders title={orders.title} data={orders.data} />
          )}
        </div>

        <div className="lg:col-span-1">
          {isProductsLoading ? (
            <TopProductsSkeleton />
          ) : isProductsError || !products ? (
            <div>Failed to load top products.</div>
          ) : (
            <TopProducts title={products.title} data={products.data} />
          )}
        </div>
      </div>
    </div>
  );
}
