// API communication

import type {
  AnalysisResponse,
  OrdersResponse,
  RevenueOverviewResponse,
  SalesByChannelResponse,
  StatsResponse,
} from "@/types/dashboard";
import axios from "axios";

export async function getStats() {
  const res = await axios.get<StatsResponse>(
    "https://mocki.io/v1/01581b1d-6c81-4067-ad6f-fe0db1b732d0",
  );
  return res.data;
}

export async function getAnalysis() {
  const res = await axios.get<AnalysisResponse>(
    "https://mocki.io/v1/695d9a5a-415f-4b0d-a8b3-0da38b86f29a",
  );
  return res.data;
}

export async function getRevenueOverview() {
  const res = await axios.get<RevenueOverviewResponse>(
    "https://dummyjson.com/c/892e-8430-4a24-bd12",
  );
  return res.data;
}

export async function getSalesByChannel() {
  const res = await axios.get<SalesByChannelResponse>(
    "https://dummyjson.com/c/bd0d-7c6c-4d54-9544",
  );
  return res.data;
}

export async function getRecentOrders() {
  const res = await axios.get<OrdersResponse>(
    "https://dummyjson.com/c/64e0-41e8-46a3-a295",
  );
  return res.data;
}
