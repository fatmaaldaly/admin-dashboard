// API communication

import type { StatsData } from "@/types/dashboard";
import axios from "axios";

export async function getStats() {
  const res = await axios.get<StatsData[]>(
    "https://retoolapi.dev/GhGgrf/stats",
  );
  return res.data;
}
