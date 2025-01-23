"use client";
import React, { useState } from "react";
import Calendar from "@/components/calender/Calendar";
import { Transaction } from "@/types/type";
import DashBoard from "@/components/dashBoard/DashBoard";

const Home = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hello User!</h1>
      {/* 総合ダッシュボード */}
      <DashBoard
        transactions={transactions}
        setTransactions={setTransactions}
      />

      {/* カレンダー */}
      <Calendar transactions={transactions} />
    </div>
  );
};

export default Home;
