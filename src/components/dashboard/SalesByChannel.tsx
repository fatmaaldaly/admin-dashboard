import { SalesData } from "@/types/dashboard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SalesByChannelProps {
  title: string;
  subTitle: string;
  data: SalesData[];
}

export default function SalesByChannel({
  title,
  subTitle,
  data,
}: SalesByChannelProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm">
      <h2 className="font-semibold">{title}</h2>
      <span className="text-sm text-gray-500">{subTitle}</span>

      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="channel"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14 }}
            />
            <YAxis
              width={40}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14 }}
            />
            <Tooltip formatter={(value) => Number(value).toLocaleString()} />
            <Bar dataKey="sales" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
