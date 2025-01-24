"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Transaction } from "@/types/type";

// カスタム日付フォーマット関数
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};

const AddTransactionModal: React.FC<{
  onAddTransaction: (transaction: Transaction) => void;
  onClose: () => void;
}> = ({ onAddTransaction, onClose }) => {
  const [formData, setFormData] = useState<Omit<Transaction, "id">>({
    date: formatDate(new Date().toISOString()),
    amount: 0,
    category: "",
    type: "expense",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTransaction({
      ...formData,
      id: Date.now().toString(),
    });
    onClose();
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="outline">新しい取引を追加</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>取引の追加</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* 日付フィールド */}
            <div>
              <label htmlFor="date">日付</label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>

            {/* 金額フィールド */}
            <div>
              <label htmlFor="amount">金額</label>
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: e.target.value ? Number(e.target.value) : 0,
                  })
                }
              />
            </div>

            {/* カテゴリフィールド */}
            <div>
              <label htmlFor="category">カテゴリ</label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
            </div>

            {/* 説明フィールド */}
            <div>
              <label htmlFor="description">説明</label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* 種別フィールド */}
            <div>
              <label htmlFor="type">種別</label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    type: value as "income" | "expense",
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="expense">支出</SelectItem>
                  <SelectItem value="income">収入</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <Button type="submit">追加</Button>
            <Button variant="outline" onClick={onClose}>
              キャンセル
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionModal;
