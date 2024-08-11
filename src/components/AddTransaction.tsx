"use client";

import addTransaction from "@/app/actions/addTransaction";
import { Button } from "./ui/button";
import { toast } from "react-toastify";
import { useRef } from "react";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction Added");
      formRef.current?.reset();
    }
  };
  return (
    <>
      <h3>Add Transaction</h3>
      <form
        action={clientAction}
        className="my-3 flex flex-col items-center"
        ref={formRef}
      >
        <div className="flex w-[40vw] flex-col border-2 border-secondary">
          <label htmlFor="text" className="text-bold text-xl">
            Text
          </label>
          <input
            className="h-8 bg-secondary"
            type="text"
            name="text"
            placeholder="Enter Text..."
          />
        </div>
        <div className="mb-2 flex w-[40vw] flex-col border-2 border-secondary">
          <label htmlFor="amount" className="text-bold text-xl">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            className="h-8 bg-secondary"
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <Button>Add Transaction</Button>
      </form>
    </>
  );
};

export default AddTransaction;
