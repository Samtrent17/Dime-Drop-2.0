"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 1500, expenses: 1200 },
  { name: "Feb", income: 1800, expenses: 1400 },
  { name: "Mar", income: 2450, expenses: 1280 },
];

const CustomXAxis = ({ ...props }) => (
  <XAxis
    stroke="#9CA3AF"
    tickLine={false}
    axisLine={true}
    {...props}
  />
);

const CustomYAxis = ({ ...props }) => (
  <YAxis
    stroke="#9CA3AF"
    tickLine={false}
    axisLine={true}
    {...props}
  />
);

export default function Overview() {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 p-6">
      <Tabs defaultValue="chart" className="space-y-4">
        <TabsList className="bg-zinc-900 border-zinc-700">
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chart" className="space-y-4">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <CustomXAxis dataKey="name" />
                <CustomYAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181B",
                    border: "1px solid #374151",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#34D399"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#F87171"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="breakdown">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-700">
                <p className="text-sm text-zinc-400">Top Income</p>
                <p className="text-lg font-semibold">Salary</p>
                <p className="text-emerald-400">$2,000.00</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-700">
                <p className="text-sm text-zinc-400">Top Expense</p>
                <p className="text-lg font-semibold">Rent</p>
                <p className="text-rose-400">$800.00</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}