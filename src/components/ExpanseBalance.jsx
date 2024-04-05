import React from "react";

const ExpanseBalance = ({ show, disapatchShowModal, balance }) => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Expanse Tracker</h1>
      <div className="flex items-center justify-between m-3 pl-2 pr-2">
        <h2 className="text-2xl font-bold">
          Balance: <span className="text-slate-800">₹{balance}</span>
        </h2>

        {!show ? (
          <button
            className="btn hover:bg-slate-800"
            onClick={() => disapatchShowModal(!show)}
          >
            Add
          </button>
        ) : (
          <button
            className="btn hover:bg-slate-800"
            onClick={() => disapatchShowModal(!show)}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpanseBalance;
