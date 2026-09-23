import { RevenueData } from "@/types/overview";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface RevenueOverviewProps {
  title: string;
  subTitle: string;
  data: RevenueData[];
}

export default function RevenueOverview({
  title,
  subTitle,
  data,
}: RevenueOverviewProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm">
      <h2 className="font-semibold">{title}</h2>
      <span className="text-sm text-gray-500">{subTitle}</span>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} dy={10} />
            <YAxis
              tickFormatter={(value) => `$${value / 1000}K`}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              formatter={(value) => `${Number(value).toLocaleString()}`}
            />
            <Legend
              position="bottom"
              wrapperStyle={{
                paddingTop: "20px",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="profit"
              name="Profit"
              stroke="#16a34a"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
