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
