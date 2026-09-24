"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getAnalysis,
  getRecentOrders,
  getRevenueOverview,
  getSalesByChannel,
  getStats,
  getTopProducts,
} from "@/services/dashboardServices";
import AnalysisCard from "@/components/overview/AnalysisCard";
import { TrendingUp, Target, Rss, AlertTriangle } from "lucide-react";
import AnalysisCardSkeleton from "@/components/overview/AnalysisCardSkeleton";
import StatCard from "@/components/overview/StatCard";
import StatCardSkeleton from "@/components/overview/StatCardSkeleton";
import RevenueOverview from "@/components/overview/RevenueOverview";
import RevenueOverviewSkeleton from "@/components/overview/RevenueOverviewSkeleton";
import SalesByChannel from "@/components/overview/SalesByChannel";
import SalesByChannelSkeleton from "@/components/overview/SalesByChannelSkeleton";
import RecentOrders from "@/components/overview/RecentOrders";
import RecentOrdersSkeleton from "@/components/overview/RecentOrdersSkeleton";
import TopProducts from "@/components/overview/TopProducts";
import TopProductsSkeleton from "@/components/overview/TopProductsSkeleton";

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
              previousValue={stats.totalRevenue.previousValue}
              format={stats.totalRevenue.format}
            />

            <StatCard
              title={stats.orders.title}
              value={stats.orders.currentValue}
              previousValue={stats.orders.previousValue}
              format={stats.orders.format}
            />

            <StatCard
              title={stats.newCustomers.title}
              value={stats.newCustomers.currentValue}
              previousValue={stats.newCustomers.previousValue}
              format={stats.newCustomers.format}
            />

            <StatCard
              title={stats.avgOrderValue.title}
              value={stats.avgOrderValue.currentValue}
              previousValue={stats.avgOrderValue.previousValue}
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
