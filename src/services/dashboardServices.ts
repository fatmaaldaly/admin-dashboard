// API communication

import type {
  AnalysisResponse,
  OrdersResponse,
  Product,
  ProductsResponse,
  RevenueOverviewResponse,
  SalesByChannelResponse,
  StatsResponse,
  TopProductsResponse,
} from "@/types/overview";
import axios from "axios";

export async function getStats() {
  const res = await axios.get<StatsResponse>(
    "https://dummyjson.com/c/2660-b413-43e7-93f1",
  );
  return res.data;
}

export async function getAnalysis() {
  const res = await axios.get<AnalysisResponse>(
    "https://dummyjson.com/c/668c-8267-4edc-879d",
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

export async function getTopProducts() {
  const res = await axios.get<TopProductsResponse>(
    "https://dummyjson.com/c/01a3-e055-47e6-9ba6",
  );
  return res.data;
}

export async function getOrders() {
  const res = await axios.get<OrdersResponse>(
    "https://dummyjson.com/c/131e-1db1-4c6e-a575",
  );
  return res.data;
}

export async function getProducts() {
  const res = await axios.get<ProductsResponse>(
    "https://dummyjson.com/products",
  );

  return res.data;
}

export async function getProductById(id: string) {
  const res = await axios.get<Product>(`https://dummyjson.com/products/${id}`);

  return res.data;
}
