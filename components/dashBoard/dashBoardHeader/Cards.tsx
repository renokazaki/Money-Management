"use client";

import { Card } from "@/components/ui/card";

const Cards: React.FC<{
  title: string;
  amount: number;
  icon: React.ReactNode;
  color: string;
}> = ({ title, amount, icon }) => {
  return (
    <Card className={`rounded-lg bg-indigo-950 shadow-md p-2 sm:p-8`}>
      <h3 className="flex gap-2 text-xs sm:text-xl font-semibold text-white">
        {title}
        <span className="flex items-center mb-2">{icon}</span>
      </h3>
      <p className="text-base font-bold sm:text-xl text-white">
        {amount.toLocaleString()}円
      </p>
    </Card>
  );
};

export default Cards;
