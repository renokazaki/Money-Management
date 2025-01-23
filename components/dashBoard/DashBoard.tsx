import React, { useState } from "react";
import { Transaction } from "@/types/type";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import AddTransactionModal from "../modal/AddTransactionModal";
import DashboardCard from "./DashBoardCard";

const DashBoard: React.FC<{
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}> = ({ transactions, setTransactions }) => {
  const [showModal, setShowModal] = useState(false);
  const [balance, setBalance] = useState<number>(0);

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

  return (
    <div>
      {/* 総合ダッシュボード */}
      <DashboardCard transactions={transactions} balance={balance} />
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
    </div>
  );
};

export default DashBoard;
