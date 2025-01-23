"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const DashboardCard: React.FC<{
  title: string;
  amount: number;
  icon: React.ReactNode;
  color: string;
}> = ({ title, amount, icon, color }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold text-${color}-600`}>
          ¥{amount.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
