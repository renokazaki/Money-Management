"use client";
import React, { useState } from "react";
import { Transaction } from "@/types/type";
import DashBoardHeader from "@/components/dashBoard/dashBoardHeader/DashBoardHeader";
import Graph from "@/components/dashBoard/dashBoardGraph/Graph";

const Home = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <div>
      {/* ダッシュボードヘッダー */}
      <DashBoardHeader
        transactions={transactions}
        setTransactions={setTransactions}
      />
      {/* ダッシュボードグラフ */}
      <Graph />
    </div>
  );
};

export default Home;
