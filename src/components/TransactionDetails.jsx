import React from "react";

const TransactionDetails = ({ data }) => {
  if (data.length < 1) {
    return (
      <div>
        <h3 className="font-bold">Transactions Details</h3>
        <h2 className="p-2 text-red-600">No Transactions yet</h2>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-bold">Transactions Details</h3>
      {data.length < 1 && <h2>No Transactions yet</h2>}
      <ol className="mt-3 flex flex-col gap-2">
        {data.map((cur, id) => {
          return (
            <li
              key={id}
              className="p-2 bg-gray-500 rounded-md text-white flex justify-between"
            >
              <span>{cur.description}</span>
              <span className="text-black">₹{cur.amount}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TransactionDetails;
