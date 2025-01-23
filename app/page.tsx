"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import Calendar from "@/components/calender/Calendar";

import { Transaction } from "@/types/type";
import DashboardCard from "@/components/dashBoardCard/DashBoardCard";
import AddTransactionModal from "@/components/modal/AddTransactionModal";

// 現在の月の取引をフィルタリング
const getCurrentMonthRange = () => {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return { firstDay, lastDay };
};

const Home = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  // 新規取引追加ハンドラ
  const addTransaction = (transaction: Transaction) => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
    setBalance((prevBalance) =>
      transaction.type === "income"
        ? prevBalance + transaction.amount
        : prevBalance - transaction.amount
    );
  };

  // 月の取引をフィルタリング
  const getCurrentMonthTransactions = () => {
    const { firstDay, lastDay } = getCurrentMonthRange();

    return transactions.filter((t) => {
      const transactionDate = new Date(t.date);
      return transactionDate >= firstDay && transactionDate <= lastDay;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hello User!</h1>

      {/* 総合ダッシュボード */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <DashboardCard
          title="現在の残高"
          amount={balance}
          icon={<Wallet className="h-4 w-4 text-muted-foreground" />}
          color="muted"
        />
        <DashboardCard
          title="今月の収入"
          amount={getCurrentMonthTransactions()
            .filter((t) => t.type === "income")
            .reduce((sum, t) => sum + t.amount, 0)}
          icon={<TrendingUp className="h-4 w-4 text-green-500" />}
          color="green"
        />
        <DashboardCard
          title="今月の支出"
          amount={getCurrentMonthTransactions()
            .filter((t) => t.type === "expense")
            .reduce((sum, t) => sum + t.amount, 0)}
          icon={<TrendingDown className="h-4 w-4 text-red-500" />}
          color="red"
        />
      </div>

      {/* 取引追加ボタン */}
      <Button
        variant="outline"
        className="flex items-center mb-4 bg-blue-300"
        onClick={() => setShowModal(true)}
      >
        <PlusCircle className="mr-2" /> 取引を追加
      </Button>

      {/* モーダル */}
      {showModal && (
        <AddTransactionModal
          onAddTransaction={addTransaction}
          onClose={() => setShowModal(false)}
        />
      )}
      <Calendar transactions={transactions} />
    </div>
  );
};

export default Home;
