"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const chartData = [
  { date: "2024-04-01", 支出: 222, 収入: 150 },
  { date: "2024-04-02", 支出: 97, 収入: 180 },
  { date: "2024-04-03", 支出: 167, 収入: 120 },
  { date: "2024-04-04", 支出: 242, 収入: 260 },
  { date: "2024-04-05", 支出: 373, 収入: 290 },
  { date: "2024-04-06", 支出: 301, 収入: 340 },
  { date: "2024-04-07", 支出: 245, 収入: 180 },
  { date: "2024-04-08", 支出: 409, 収入: 320 },
  { date: "2024-04-09", 支出: 59, 収入: 110 },
  { date: "2024-04-10", 支出: 261, 収入: 190 },
  { date: "2024-04-11", 支出: 327, 収入: 350 },
  { date: "2024-04-12", 支出: 292, 収入: 210 },
  { date: "2024-04-13", 支出: 342, 収入: 380 },
  { date: "2024-04-14", 支出: 137, 収入: 220 },
  { date: "2024-04-15", 支出: 120, 収入: 170 },
  { date: "2024-04-16", 支出: 138, 収入: 190 },
  { date: "2024-04-17", 支出: 446, 収入: 360 },
  { date: "2024-04-18", 支出: 364, 収入: 410 },
  { date: "2024-04-19", 支出: 243, 収入: 180 },
  { date: "2024-04-20", 支出: 89, 収入: 150 },
  { date: "2024-04-21", 支出: 137, 収入: 200 },
  { date: "2024-04-22", 支出: 224, 収入: 170 },
  { date: "2024-04-23", 支出: 138, 収入: 230 },
  { date: "2024-04-24", 支出: 387, 収入: 290 },
  { date: "2024-04-25", 支出: 215, 収入: 250 },
  { date: "2024-04-26", 支出: 75, 収入: 130 },
  { date: "2024-04-27", 支出: 383, 収入: 420 },
  { date: "2024-04-28", 支出: 122, 収入: 180 },
  { date: "2024-04-29", 支出: 315, 収入: 240 },
  { date: "2024-04-30", 支出: 454, 収入: 380 },
  { date: "2024-05-01", 支出: 165, 収入: 220 },
  { date: "2024-05-02", 支出: 293, 収入: 310 },
  { date: "2024-05-03", 支出: 247, 収入: 190 },
  { date: "2024-05-04", 支出: 385, 収入: 420 },
  { date: "2024-05-05", 支出: 481, 収入: 390 },
  { date: "2024-05-06", 支出: 498, 収入: 520 },
  { date: "2024-05-07", 支出: 388, 収入: 300 },
  { date: "2024-05-08", 支出: 149, 収入: 210 },
  { date: "2024-05-09", 支出: 227, 収入: 180 },
  { date: "2024-05-10", 支出: 293, 収入: 330 },
  { date: "2024-05-11", 支出: 335, 収入: 270 },
  { date: "2024-05-12", 支出: 197, 収入: 240 },
  { date: "2024-05-13", 支出: 197, 収入: 160 },
  { date: "2024-05-14", 支出: 448, 収入: 490 },
  { date: "2024-05-15", 支出: 473, 収入: 380 },
  { date: "2024-05-16", 支出: 338, 収入: 400 },
  { date: "2024-05-17", 支出: 499, 収入: 420 },
  { date: "2024-05-18", 支出: 315, 収入: 350 },
  { date: "2024-05-19", 支出: 235, 収入: 180 },
  { date: "2024-05-20", 支出: 177, 収入: 230 },
  { date: "2024-05-21", 支出: 82, 収入: 140 },
  { date: "2024-05-22", 支出: 81, 収入: 120 },
  { date: "2024-05-23", 支出: 252, 収入: 290 },
  { date: "2024-05-24", 支出: 294, 収入: 220 },
  { date: "2024-05-25", 支出: 201, 収入: 250 },
  { date: "2024-05-26", 支出: 213, 収入: 170 },
  { date: "2024-05-27", 支出: 420, 収入: 460 },
  { date: "2024-05-28", 支出: 233, 収入: 190 },
  { date: "2024-05-29", 支出: 78, 収入: 130 },
  { date: "2024-05-30", 支出: 340, 収入: 280 },
  { date: "2024-05-31", 支出: 178, 収入: 230 },
  { date: "2024-06-01", 支出: 178, 収入: 200 },
  { date: "2024-06-02", 支出: 470, 収入: 410 },
  { date: "2024-06-03", 支出: 103, 収入: 160 },
  { date: "2024-06-04", 支出: 439, 収入: 380 },
  { date: "2024-06-05", 支出: 88, 収入: 140 },
  { date: "2024-06-06", 支出: 294, 収入: 250 },
  { date: "2024-06-07", 支出: 323, 収入: 370 },
  { date: "2024-06-08", 支出: 385, 収入: 320 },
  { date: "2024-06-09", 支出: 438, 収入: 480 },
  { date: "2024-06-10", 支出: 155, 収入: 200 },
  { date: "2024-06-11", 支出: 92, 収入: 150 },
  { date: "2024-06-12", 支出: 492, 収入: 420 },
  { date: "2024-06-13", 支出: 81, 収入: 130 },
  { date: "2024-06-14", 支出: 426, 収入: 380 },
  { date: "2024-06-15", 支出: 307, 収入: 350 },
  { date: "2024-06-16", 支出: 371, 収入: 310 },
  { date: "2024-06-17", 支出: 475, 収入: 520 },
  { date: "2024-06-18", 支出: 107, 収入: 170 },
  { date: "2024-06-19", 支出: 341, 収入: 290 },
  { date: "2024-06-20", 支出: 408, 収入: 450 },
  { date: "2024-06-21", 支出: 169, 収入: 210 },
  { date: "2024-06-22", 支出: 317, 収入: 270 },
  { date: "2024-06-23", 支出: 480, 収入: 530 },
  { date: "2024-06-24", 支出: 132, 収入: 180 },
  { date: "2024-06-25", 支出: 141, 収入: 190 },
  { date: "2024-06-26", 支出: 434, 収入: 380 },
  { date: "2024-06-27", 支出: 448, 収入: 490 },
  { date: "2024-06-28", 支出: 149, 収入: 200 },
  { date: "2024-06-29", 支出: 103, 収入: 160 },
  { date: "2024-06-30", 支出: 446, 収入: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  支出: {
    label: "支出",
    color: "hsl(var(--chart-1))",
  },
  収入: {
    label: "収入",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Graph() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="mx-4 sm:h-[630px]">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-3 sm:py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6 ">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full sm:h-[500px]"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fill支出" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-支出)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-支出)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fill収入" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-収入)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-収入)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="支出"
              type="natural"
              fill="url(#fill収入)"
              stroke="var(--color-収入)"
              stackId="a"
            />
            <Area
              dataKey="収入"
              type="natural"
              fill="url(#fill支出)"
              stroke="var(--color-支出)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} className="mt-4" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
