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