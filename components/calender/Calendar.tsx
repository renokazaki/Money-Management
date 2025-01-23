"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Transaction } from "@/types/type";

const Calendar: React.FC<{ transactions: Transaction[] }> = ({
  transactions,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateTransactions, setSelectedDateTransactions] = useState<
    Transaction[]
  >([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const handleDayClick = (day: Date) => {
    const dailyTransactions = transactions.filter(
      (t) => t.date === formatDate(day)
    );
    setSelectedDateTransactions(dailyTransactions);
    setIsDialogOpen(true); // ダイアログを開く
  };

  const calendarDays = generateCalendarDays();

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <button
            onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() - 1,
                  1
                )
              )
            }
            className="p-2 bg-gray-100 rounded"
          >
            {"<"}
          </button>
          <CardTitle>
            {currentDate.getFullYear()}年 {currentDate.getMonth() + 1}月
          </CardTitle>
          <button
            onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() + 1,
                  1
                )
              )
            }
            className="p-2 bg-gray-100 rounded"
          >
            {">"}
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2 text-center">
          {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
            <div key={day} className="font-bold">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => {
            const dailyTransactions = day
              ? transactions.filter((t) => t.date === formatDate(day))
              : [];

            const incomeAmount = dailyTransactions.reduce(
              (sum, t) => (t.type === "income" ? sum + t.amount : sum),
              0
            );
            const expenseAmount = dailyTransactions.reduce(
              (sum, t) => (t.type === "expense" ? sum + t.amount : sum),
              0
            );
            const difference = incomeAmount - expenseAmount;

            // 取引がある場合のみ表示
            return (
              <div
                key={index}
                className={`border p-2 min-h-[70px] relative ${
                  day ? "cursor-pointer hover:bg-gray-100" : ""
                }`}
                onClick={() => day && handleDayClick(day)}
              >
                {day && (
                  <>
                    <div className="text-[10px]">{day.getDate()}</div>
                    {/* 収入か支出があれば表示 */}
                    {incomeAmount > 0 && (
                      <div className="text-[8px] font-bold mt-1 text-green-500">
                        収入: ¥{incomeAmount.toLocaleString()}
                      </div>
                    )}
                    {expenseAmount > 0 && (
                      <div className="text-[8px] font-bold mt-1 text-red-500">
                        支出: ¥{expenseAmount.toLocaleString()}
                      </div>
                    )}
                    {/* 差額が0でない場合に表示 */}
                    {difference !== 0 && (
                      <div
                        className={`text-[8px] font-bold mt-1 ${
                          difference >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        差額: ¥{Math.abs(difference).toLocaleString()}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>取引詳細</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-72">
              {selectedDateTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className={`p-2 mb-2 rounded ${
                    transaction.type === "income"
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  } border`}
                >
                  <div className="flex justify-between">
                    <span>{transaction.category}</span>
                    <span
                      className={
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      ¥{transaction.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {transaction.description}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default Calendar;
