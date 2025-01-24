"use client";

import { Card } from "@/components/ui/card";

const Cards: React.FC<{
  title: string;
  amount: number;
  icon: React.ReactNode;
  color: string;
}> = ({ title, amount, icon, color }) => {
  return (
    <Card className={`rounded-lg bg-${color}-100 shadow-md`}>
      <h3 className="flex gap-2 text-xs sm:text-xl font-semibold text-gray-700">
        {title}
        <span className="flex items-center mb-2">{icon}</span>
      </h3>
      <p className="text-base font-bold sm:text-xl text-gray-900">
        {amount.toLocaleString()}円
      </p>
    </Card>
  );
};

export default Cards;
