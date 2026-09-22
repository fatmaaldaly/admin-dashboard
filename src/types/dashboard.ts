interface StatCard {
  id: number;
  title: string;
  format: "currency" | "number";
  currentValue: number;
  previousValue: number;
}

export interface StatsResponse {
  totalRevenue: StatCard;
  orders: StatCard;
  newCustomers: StatCard;
  avgOrderValue: StatCard;
}

export interface AnalysisData {
  title: string;
  currentValue: number;
  previousValue: number;  
  description: string;
  progress: number;
}

export interface AnalysisResponse{
  revenueMomentum: AnalysisData;
  conversionRate: AnalysisData;
  topChannel: AnalysisData;
  inventoryRisk: AnalysisData;
}


export interface RevenueData {
  month: string;
  revenue: number;
  profit: number;
}

export interface RevenueOverviewResponse {
  title: string;
  data: RevenueData[];
}

export interface SalesData {
  channel: string;
  sales: number;
}

export interface SalesByChannelResponse {
  title: string;
  data: SalesData[];
}


export interface OrdersData {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  product: string;
  status: string;
  amount: number;
}

export interface OrdersResponse {
  title: string;
  data: OrdersData[];
}

export interface TopProduct {
  id: number;
  title: string;
  category: string;
  stock: number;
  price: number;
  sold: number;
}

export interface TopProductsResponse {
  title: string;
  data: TopProduct[];
}