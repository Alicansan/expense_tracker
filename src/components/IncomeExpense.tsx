import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addCommas } from "@/lib/utils";
import React from "react";

export default async function IncomeExpense() {
  const { income, expense } = await getIncomeExpense();
  return (
    <div className="mx-auto my-6 flex max-w-[40vw] flex-1 justify-between bg-secondary p-[20px] shadow-xl">
      <div>
        <h4 className="text-green-600">Income</h4>
        <p>${addCommas(Number(income?.toFixed(2)))} </p>
      </div>
      <div>
        <h4 className="text-red-500">Expense</h4>
        <p> ${addCommas(Number(expense?.toFixed(2)))}</p>
      </div>
    </div>
  );
}
