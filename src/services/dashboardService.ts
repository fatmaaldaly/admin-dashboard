// API communication

import type { StatsResponse } from "@/types/dashboard";
import axios from "axios";

export async function getStats() {
  const res = await axios.get<StatsResponse>(
    "https://mocki.io/v1/01581b1d-6c81-4067-ad6f-fe0db1b732d0",
  );
  return res.data;
}
