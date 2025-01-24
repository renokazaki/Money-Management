import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Transaction } from "@/types/type";
const CalenderModal = ({
  isDialogOpen,
  setIsDialogOpen,
  selectedDateTransactions,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDateTransactions: Transaction[];
}) => {
  return (
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
  );
};

export default CalenderModal;
