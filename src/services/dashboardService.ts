// API communication

import type { AnalysisResponse, StatsResponse } from "@/types/dashboard";
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
