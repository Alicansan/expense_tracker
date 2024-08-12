import React from "react";
import { Transaction } from "@/types/Transaction";
import getTransactions from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";

export default async function TransactionList() {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions &&
          transactions.map((transaction: Transaction, index) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              index={index}
            />
          ))}
      </ul>
    </>
  );
}
