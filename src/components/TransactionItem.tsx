"use client";
import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/utils";
import deleteTransaction from "@/app/actions/DeleteTransaction";
import { LucideX } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

export default function TransactionItem({
  index,
  transaction,
}: {
  transaction: Transaction;
  index: number;
}) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?",
    );
    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);
    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };
  return (
    <div
      className={`mx-auto flex max-w-[40vw] items-center justify-between border-2 p-2 ${transaction.amount < 0 ? "text-red-600" : "text-green-600"} ${+index % 2 == 0 ? "bg-secondary" : ""} `}
    >
      <p className="w-[40%]">{transaction.text}</p>
      <p className="w-[40%] items-start">
        {sign}${addCommas(Math.abs(transaction.amount))}
      </p>
      <Button onClick={() => handleDeleteTransaction(transaction.id)} size="sm">
        <LucideX className="" width={10} height={10} />
      </Button>
    </div>
  );
}
