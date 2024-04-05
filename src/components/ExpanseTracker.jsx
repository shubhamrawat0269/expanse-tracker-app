import React, { useContext } from "react";

import ExpanseBalance from "./ExpanseBalance";
import ExpanseForm from "./ExpanseForm";
import ExpanseIncome from "./ExpanseIncome";
import TransactionDetails from "./TransactionDetails";
import { TrackerContext } from "../contexts/TrackerContext";

const ExpanseTracker = () => {
  const {
    data,
    showModal,
    setShowModal,
    balance,
    savings,
    setSavings,
    expense,
    setExpense,
    updateBalance,
    handleAddData,
  } = useContext(TrackerContext);
  return (
    <div className="bg-white p-5 rounded-xl w-96">
      <ExpanseBalance
        show={showModal}
        balance={balance}
        disapatchShowModal={setShowModal}
      />
      <ExpanseForm
        show={showModal}
        updateBalance={updateBalance}
        handleAddData={handleAddData}
        dispatchSavings={setSavings}
        dispatchExapense={setExpense}
      />
      <ExpanseIncome savings={savings} expense={expense} />
      <TransactionDetails data={data} />
    </div>
  );
};

export default ExpanseTracker;
