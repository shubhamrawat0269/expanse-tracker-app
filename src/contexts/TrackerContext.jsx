import { createContext, useState } from "react";

const TrackerContext = createContext();

const TrackerProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [balance, setBalance] = useState("43750");
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);
  const [data, setData] = useState([]);

  const updateBalance = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
  };

  const handleAddData = (obj) => {
    setData((prevData) => [...prevData, obj]);
  };

  const context = {
    showModal,
    setShowModal,
    balance,
    setBalance,
    expense,
    setExpense,
    savings,
    data,
    setSavings,
    updateBalance,
    handleAddData,
  };
  return (
    <TrackerContext.Provider value={context}>
      {children}
    </TrackerContext.Provider>
  );
};

export { TrackerProvider, TrackerContext };
