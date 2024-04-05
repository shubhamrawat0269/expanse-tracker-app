import React, { useState } from "react";
import { category } from "../utils/Namespace";

const ExpanseForm = ({
  show,
  updateBalance,
  handleAddData,
  dispatchSavings,
  dispatchExapense,
}) => {
  const [checkedVal, setCheckedVal] = useState("");
  const [amount, setAmount] = useState(null);
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let expenseDetails = {
      amount: amount,
      description: description,
      checked: checkedVal,
    };
    // console.log(expenseDetails);

    //1. updating value of balance state
    updateBalance(expenseDetails.amount);
    //2. Add value to category selected section
    if (expenseDetails.checked === category.EXPENSE) {
      dispatchExapense(
        (preAmount) => parseInt(preAmount) + parseInt(expenseDetails.amount)
      );
      //3. Create a new List which displayed on Transaction Section
      handleAddData(expenseDetails);
    } else {
      dispatchSavings(
        (preAmount) => parseInt(preAmount) + parseInt(expenseDetails.amount)
      );
    }

    setCheckedVal("");
    setAmount(null);
    setDescription("");
  };
  return (
    <div>
      {show && (
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <label htmlFor="amount">
            <input
              type="text"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="border p-2 outline-none w-full"
            />
          </label>
          <label htmlFor="Description">
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="border p-2 outline-none w-full"
            />
          </label>
          <div className="flex gap-4 mt-2 mb-2">
            <label htmlFor="radioBtn" className="flex gap-2">
              <input
                type="radio"
                name="radioBtn"
                id="radioBtn"
                value="expense"
                onChange={(e) => setCheckedVal(e.target.value)}
              />
              <span>Expanse</span>
            </label>
            <label htmlFor="radioBtn" className="flex gap-2">
              <input
                type="radio"
                name="radioBtn"
                id="radioBtn"
                value="savings"
                onChange={(e) => setCheckedVal(e.target.value)}
              />
              <span>Savings</span>
            </label>
          </div>

          <button type="submit" className="btn">
            Add Transactions
          </button>
        </form>
      )}
    </div>
  );
};

export default ExpanseForm;
