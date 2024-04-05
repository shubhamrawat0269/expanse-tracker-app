import React from "react";

const ExpanseIncome = ({ savings, expense }) => {
  return (
    <div className="flex items-center mt-3 mb-3 gap-2">
      <div className="flex flex-col border w-3/6 p-2 rounded-md">
        <span className="font-bold">Expanse</span>
        <span className="text-red-700">{expense}</span>
      </div>
      <div className="flex flex-col border w-3/6 p-2 rounded-md">
        <span className="font-bold">Savings</span>
        <span className="text-green-700">{savings}</span>
      </div>
    </div>
  );
};

export default ExpanseIncome;
