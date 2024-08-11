import React from "react";
import { Transaction } from "@/types/Transaction";
import getTransactions from "@/app/actions/getTransactions";
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
            <p key={index}>{transaction.text}</p>
          ))}
      </ul>
    </>
  );
}
