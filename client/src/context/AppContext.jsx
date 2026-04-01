import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [activities, setActivities] = useState([]);
  const [disputes, setDisputes] = useState([]);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
    setActivities((prev) => [`Escrow created for ${project.name}`, ...prev]);
  };

  const releasePayment = (project) => {
    setTransactions((prev) => [...prev, project]);
    setActivities((prev) => [`Payment released for ${project.name}`, ...prev]);
  };

  const raiseDispute = (project) => {
    setDisputes((prev) => [...prev, project]);
    setActivities((prev) => [`Dispute raised for ${project.name}`, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        projects,
        transactions,
        activities,
        disputes,
        addProject,
        releasePayment,
        raiseDispute,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);