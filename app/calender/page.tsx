import Calender from "@/components/calender/Calender";
import { Transaction } from "@/types/type";
import React from "react";

const CalenderPage = () => {
  // 仮データを作成
  const transactions: Transaction[] = [
    {
      id: "1",
      date: "2025-01-01",
      amount: 5000,
      category: "Food",
      type: "expense",
      description: "Lunch at a restaurant",
    },
    {
      id: "2",
      date: "2025-01-02",
      amount: 20000,
      category: "Salary",
      type: "income",
      description: "January salary",
    },
    {
      id: "3",
      date: "2025-01-03",
      amount: 3000,
      category: "Transport",
      type: "expense",
      description: "Bus fare",
    },
  ];

  return (
    <div className="w-full mt-4 sm:mt-28 p-2 sm:px-8">
      <Calender transactions={transactions} />
    </div>
  );
};

export default CalenderPage;
