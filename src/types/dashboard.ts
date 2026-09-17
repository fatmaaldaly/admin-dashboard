export interface StatsData {
  title: string;
  currentValue: number;
  previousValue: number;
  format: "currency" | "number";
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
