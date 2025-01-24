"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", 支出: 186, 収入: 80 },
  { month: "February", 支出: 305, 収入: 200 },
  { month: "March", 支出: 237, 収入: 120 },
  { month: "April", 支出: 73, 収入: 190 },
  { month: "May", 支出: 209, 収入: 130 },
  { month: "June", 支出: 214, 収入: 140 },
  { month: "January", 支出: 186, 収入: 80 },
  { month: "February", 支出: 305, 収入: 200 },
  { month: "March", 支出: 237, 収入: 120 },
  { month: "April", 支出: 73, 収入: 190 },
  { month: "May", 支出: 209, 収入: 130 },
  { month: "June", 支出: 214, 収入: 140 },
];

const chartConfig = {
  支出: {
    label: "支出",
    color: "#2563eb",
  },
  収入: {
    label: "収入",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const Graph = () => {
  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="min-h-[150px] w-full pt-8"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="支出" fill="var(--color-支出)" radius={4} />
          <Bar dataKey="収入" fill="var(--color-収入)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Graph;
